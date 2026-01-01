"use client";

import React from 'react';
import { Recommendation } from '@/lib/types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { AlertTriangle, Hammer, DollarSign, CheckCircle } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'DIY': return <Hammer size={18} />;
      case 'Low-Cost': return <DollarSign size={18} />;
      case 'Professional': return <CheckCircle size={18} />;
      default: return <CheckCircle size={18} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'info';
      default: return 'default';
    }
  };

  return (
    <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
            {getCategoryIcon(recommendation.category)}
            {recommendation.category}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
            <span className="font-bold text-green-600">{recommendation.cost}</span>
          </span>
        </div>
        <Badge variant={getPriorityColor(recommendation.priority)}>
          {recommendation.priority} Priority
        </Badge>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{recommendation.title}</h3>
      <p className="text-gray-600 flex-grow">{recommendation.description}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center gap-1">
          Learn more
        </button>
      </div>
    </Card>
  );
};

export default RecommendationCard;

