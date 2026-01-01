"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PROFESSIONAL_GUIDANCE } from '@/lib/data';
import GuidanceCard from '@/components/guidance/GuidanceCard';

export default function GuidancePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Guidance
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn who to hire, what to ask, and how to prepare for home modifications.
            </p>
          </div>

          <div className="space-y-6">
            {PROFESSIONAL_GUIDANCE.map((guidance) => (
              <GuidanceCard key={guidance.id} guidance={guidance} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

