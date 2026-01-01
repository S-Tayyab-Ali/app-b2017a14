"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, glass = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={hoverEffect ? { y: 0 } : undefined}
        whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
        className={cn(
          "rounded-2xl overflow-hidden",
          glass 
            ? "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl" 
            : "bg-white border border-gray-100 shadow-lg shadow-gray-200/50",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;

