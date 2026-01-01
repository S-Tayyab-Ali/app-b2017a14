"use client";

import React, { useState, useEffect } from 'react';
import { useStore } from '@/context/StoreContext';
import { Recommendation, RecCategory } from '@/lib/types';
import RecommendationCard from './RecommendationCard';
import Button from '../ui/Button';
import { Share2, Download, Printer } from 'lucide-react';
import FeedbackModal from '../feedback/FeedbackModal';
import Link from 'next/link';

const SafetyReport = () => {
  const { recommendations, quizResponse } = useStore();
  const [showFeedback, setShowFeedback] = useState(false);

  // Group recommendations by category
  const groupedRecs = recommendations.reduce((acc, rec) => {
    if (!acc[rec.category]) {
      acc[rec.category] = [];
    }
    acc[rec.category].push(rec);
    return acc;
  }, {} as Record<RecCategory, Recommendation[]>);

  const categories: RecCategory[] = ['DIY', 'Low-Cost', 'Professional'];

  const handleShare = () => {
    // In a real app, this would generate a link. 
    // For now, we'll just copy the current URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  // Show feedback modal after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFeedback(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!quizResponse) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No report found</h2>
        <p className="text-gray-600 mb-8">Please complete the assessment first.</p>
        <Link href="/assessment">
          <Button>Start Assessment</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Your Personalized Safety Plan
          </h1>
          <p className="text-gray-600">
            Generated on {new Date(quizResponse.createdAt).toLocaleDateString()}
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
        </div>
      </div>

      <div className="space-y-12">
        {categories.map((category) => {
          const recs = groupedRecs[category];
          if (!recs || recs.length === 0) return null;

          return (
            <section key={category}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{category} Improvements</h2>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-600">
                  {recs.length} items
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recs.map((rec) => (
                  <RecommendationCard key={rec.id} recommendation={rec} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Need help implementing these changes?</h3>
        <p className="text-blue-700 mb-8 max-w-2xl mx-auto">
          Browse our directory of verified Orange County resources to find contractors, funding programs, and support services.
        </p>
        <Link href="/resources">
          <Button size="lg">View Local Resources</Button>
        </Link>
      </div>

      <FeedbackModal isOpen={showFeedback} onClose={() => setShowFeedback(false)} />
    </div>
  );
};

export default SafetyReport;

