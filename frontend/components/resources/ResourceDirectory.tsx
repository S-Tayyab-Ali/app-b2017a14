"use client";

import React, { useState } from 'react';
import { RESOURCES } from '@/lib/data';
import { Category } from '@/lib/types';
import ResourceCard from './ResourceCard';
import { Search, Filter } from 'lucide-react';

const ResourceDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (Category | 'All')[] = ['All', 'Safety', 'Funding', 'Contractors', 'Programs'];

  const filteredResources = RESOURCES.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Orange County Resource Directory
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find verified local contractors, funding programs, and support services for aging in place.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
          />
        </div>
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <Filter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No resources found</h3>
          <p className="text-gray-500">Try adjusting your search or category filter.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ResourceDirectory;

