"use client";

import React, { useState } from 'react';
import { ProfessionalGuidance } from '@/lib/types';
import Card from '../ui/Card';
import { ChevronDown, ChevronUp, MessageCircle, ClipboardList, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GuidanceCardProps {
  guidance: ProfessionalGuidance;
}

const GuidanceCard = ({ guidance }: GuidanceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-purple-500">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">{guidance.title}</h3>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        
        <p className="text-gray-600 mt-2">{guidance.roleDescription}</p>
        
        <div className="mt-4 flex items-start gap-2 text-sm text-purple-700 bg-purple-50 p-3 rounded-lg">
          <Clock size={18} className="flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">When to contact: </span>
            {guidance.whenToContact}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 border-t border-gray-100"
          >
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-900 font-bold">
                  <MessageCircle size={20} className="text-blue-500" />
                  <h4>Questions to Ask</h4>
                </div>
                <ul className="space-y-2">
                  {guidance.sampleQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                      <span className="font-bold text-blue-500 text-sm mt-0.5">{idx + 1}.</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-900 font-bold">
                  <ClipboardList size={20} className="text-green-500" />
                  <h4>Preparation Checklist</h4>
                </div>
                <ul className="space-y-2">
                  {guidance.preparationTips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default GuidanceCard;

