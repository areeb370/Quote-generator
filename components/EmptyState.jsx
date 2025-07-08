import { Quote } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-12">
      <Quote className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">
        Ready to get inspired?
      </h3>
      <p className="text-muted-foreground">
        Enter a topic above to discover three carefully selected quotes
      </p>
    </div>
  );
}