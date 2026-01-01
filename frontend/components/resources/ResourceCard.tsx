"use client";

import React from 'react';
import { Resource } from '@/lib/types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Phone, Globe, MapPin, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="info" className="mb-2">
          {resource.category}
        </Badge>
        {resource.costRange && (
          <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            {resource.costRange}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
        {resource.description}
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600 text-sm">
          <Phone size={16} className="mr-2 text-blue-500" />
          <a href={`tel:${resource.phone}`} className="hover:text-blue-600 transition-colors">
            {resource.phone}
          </a>
        </div>
        
        {resource.website && (
          <div className="flex items-center text-gray-600 text-sm">
            <Globe size={16} className="mr-2 text-blue-500" />
            <a 
              href={resource.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors truncate max-w-[200px]"
            >
              Visit Website
            </a>
          </div>
        )}
        
        {resource.address && (
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2 text-blue-500" />
            <span>{resource.address}</span>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.services.slice(0, 3).map((service, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
              {service}
            </span>
          ))}
          {resource.services.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
              +{resource.services.length - 3}
            </span>
          )}
        </div>
        
        <a href={`tel:${resource.phone}`} className="block w-full">
          <Button variant="outline" fullWidth size="sm">
            Contact Now
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ResourceCard;

