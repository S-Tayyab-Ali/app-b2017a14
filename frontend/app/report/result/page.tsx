"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SafetyReport from '@/components/report/SafetyReport';

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <SafetyReport />
      </main>
      
      <Footer />
    </div>
  );
}

