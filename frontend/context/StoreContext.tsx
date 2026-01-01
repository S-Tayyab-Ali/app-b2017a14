"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuizResponse, Recommendation, Resource, Feedback, QuizAnswer } from '../lib/types';
import { RECOMMENDATIONS, QUESTIONS } from '../lib/data';
import { v4 as uuidv4 } from 'uuid';

interface StoreContextType {
  quizResponse: QuizResponse | null;
  saveQuizResponse: (answers: QuizAnswer[]) => void;
  generateReport: () => Recommendation[];
  recommendations: Recommendation[];
  resetQuiz: () => void;
  saveFeedback: (feedback: Omit<Feedback, 'id' | 'createdAt'>) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quizResponse, setQuizResponse] = useState<QuizResponse | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedResponse = localStorage.getItem('aging_at_home_quiz_response');
    if (savedResponse) {
      setQuizResponse(JSON.parse(savedResponse));
    }
  }, []);

  // Save to local storage whenever quizResponse changes
  useEffect(() => {
    if (quizResponse) {
      localStorage.setItem('aging_at_home_quiz_response', JSON.stringify(quizResponse));
      // Also generate recommendations when response is loaded/saved
      const recs = calculateRecommendations(quizResponse.answers);
      setRecommendations(recs);
    }
  }, [quizResponse]);

  const saveQuizResponse = (answers: QuizAnswer[]) => {
    const newResponse: QuizResponse = {
      id: uuidv4(),
      answers,
      createdAt: new Date().toISOString(),
    };
    setQuizResponse(newResponse);
  };

  const calculateRecommendations = (answers: QuizAnswer[]): Recommendation[] => {
    // Simple matching logic
    // Extract all answer values
    const answerValues = answers.map(a => a.answerValue);
    
    // Filter recommendations based on tags matching answer values
    // A recommendation is relevant if ANY of its tags match the user's answers
    // OR if it has no tags (general recommendation - though our data has tags)
    
    let matchedRecs = RECOMMENDATIONS.filter(rec => {
      return rec.tags.some(tag => answerValues.includes(tag));
    });

    // If no specific matches, or too few, maybe add some defaults? 
    // For MVP, let's ensure our data covers the bases.
    // If "preventive" is selected, we show preventive stuff.
    
    // Sort by priority
    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
    matchedRecs.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);

    return matchedRecs;
  };

  const generateReport = () => {
    if (!quizResponse) return [];
    return calculateRecommendations(quizResponse.answers);
  };

  const resetQuiz = () => {
    setQuizResponse(null);
    setRecommendations([]);
    localStorage.removeItem('aging_at_home_quiz_response');
  };

  const saveFeedback = (feedbackData: Omit<Feedback, 'id' | 'createdAt'>) => {
    const feedback: Feedback = {
      ...feedbackData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    // In a real app, send to backend. Here, maybe just log or store in LS
    const existingFeedback = JSON.parse(localStorage.getItem('aging_at_home_feedback') || '[]');
    localStorage.setItem('aging_at_home_feedback', JSON.stringify([...existingFeedback, feedback]));
    console.log('Feedback saved:', feedback);
  };

  return (
    <StoreContext.Provider value={{ 
      quizResponse, 
      saveQuizResponse, 
      generateReport, 
      recommendations, 
      resetQuiz,
      saveFeedback
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

