"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { QUESTIONS } from '@/lib/data';
import { useStore } from '@/context/StoreContext';
import { QuizAnswer } from '@/lib/types';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

const Quiz = () => {
  const router = useRouter();
  const { saveQuizResponse } = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUESTIONS.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (value: string) => {
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      answerValue: value,
    };

    // Update answers array - replace if exists, otherwise add
    const updatedAnswers = [...answers];
    const existingIndex = updatedAnswers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingIndex >= 0) {
      updatedAnswers[existingIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }
    
    setAnswers(updatedAnswers);

    // Auto advance after short delay for better UX
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // If last question, show submit button or auto submit?
        // Let's just stay on last question and show a "See Results" button
      }
    }, 300);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    saveQuizResponse(answers);
    
    // In a real app we'd use the ID from the saved response
    // For now, we just redirect to a generic report page or use the ID from context
    // But wait, saveQuizResponse updates the context state.
    // We can redirect to /report/latest or something, but better to pass ID.
    // Since saveQuizResponse is sync in our mock, we can just redirect.
    // But we need the ID. Let's assume the context updates and we can just go to /report/result
    
    router.push('/report/result');
  };

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
          <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(progress)}% Completed</span>
        </div>
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-8 md:p-10 shadow-xl border-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer?.answerValue === option.value;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-lg font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <Check size={14} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={currentQuestionIndex === 0 ? 'invisible' : ''}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>

              {isLastQuestion ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!currentAnswer || isSubmitting}
                  isLoading={isSubmitting}
                  size="lg"
                  className="px-8"
                >
                  Get My Recommendations
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  variant="secondary"
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;

