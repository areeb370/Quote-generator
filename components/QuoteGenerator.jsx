"use client";

import { useState } from 'react';
import PageHeader from './PageHeader';
import QuoteSearchForm from './QuoteSearchForm';
import QuotesDisplay from './QuotesDisplay';
import EmptyState from './EmptyState';
import { searchQuotes } from '@/lib/quotes-data';

export default function QuoteGenerator() {
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentTopic, setCurrentTopic] = useState('');

  const handleSearch = async (topic) => {
    setIsLoading(true);
    setHasSearched(true);
    setCurrentTopic(topic);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const quotes = searchQuotes(topic);
    setDisplayedQuotes(quotes);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto">
        <PageHeader />
        
        <div className="mb-8">
          <QuoteSearchForm 
            onSearch={handleSearch}
            isLoading={isLoading}
            hasSearched={hasSearched}
          />
        </div>

        {displayedQuotes.length > 0 ? (
          <QuotesDisplay 
            quotes={displayedQuotes}
            topic={currentTopic}
          />
        ) : !hasSearched ? (
          <EmptyState />
        ) : null}

      </div>
    </div>
  );
}