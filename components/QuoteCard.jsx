import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function QuoteCard({ quote, author, index }) {
  return (
    <Card className="w-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <blockquote className="text-lg leading-relaxed mb-4 text-foreground">
              "{quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <cite className="text-primary font-semibold">
                — {author}
              </cite>
              <div className="flex items-center gap-1 text-muted-foreground">
                <span className="text-sm">Quote {index + 1}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}