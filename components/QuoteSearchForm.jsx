"use client";

import { useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { getAvailableTopics } from '@/lib/quotes-data';

export default function QuoteSearchForm({ onSearch, isLoading, hasSearched }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    if (topic.trim()) {
      onSearch(topic);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const generateNewQuotes = () => {
    if (topic.trim()) {
      onSearch(topic);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium">
              What topic inspires you today?
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., motivation, success, love, wisdom..."
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={handleSubmit}
              disabled={isLoading || !topic.trim()}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Generate Quotes
                </>
              )}
            </Button>
            
            {hasSearched && (
              <Button
                onClick={generateNewQuotes}
                disabled={isLoading || !topic.trim()}
                variant="outline"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                New Quotes
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Available topics:</strong> {getAvailableTopics()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}