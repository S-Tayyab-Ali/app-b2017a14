"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                AH
              </div>
              <span className="font-bold text-xl text-gray-900">
                Aging at Home Hub
              </span>
            </div>
            <p className="text-gray-500 max-w-md">
              Empowering older adults and caregivers with personalized home safety recommendations and local resources in Orange County.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/assessment" className="text-gray-600 hover:text-blue-600">Assessment</Link></li>
              <li><Link href="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link></li>
              <li><Link href="/guidance" className="text-gray-600 hover:text-blue-600">Professional Guidance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 cursor-not-allowed">Privacy Policy</span></li>
              <li><span className="text-gray-600 cursor-not-allowed">Terms of Service</span></li>
              <li><span className="text-gray-600 cursor-not-allowed">Disclaimer</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aging at Home Hub. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Designed for Orange County, CA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

