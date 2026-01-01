"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar = ({ current, total, className }: ProgressBarProps) => {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5 overflow-hidden", className)}>
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ProgressBar;

