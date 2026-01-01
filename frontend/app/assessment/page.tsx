"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Quiz from '@/components/quiz/Quiz';

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Home Safety Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few simple questions to get a personalized safety plan tailored to your needs.
          </p>
        </div>
        
        <Quiz />
      </main>
      
      <Footer />
    </div>
  );
}

