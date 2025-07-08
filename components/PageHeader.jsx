import { Sparkles } from 'lucide-react';

export default function PageHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center items-center gap-2 mb-4">
        <Sparkles className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Quote Generator</h1>
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <p className="text-muted-foreground text-lg">
        Discover inspiring quotes on any topic to motivate your day
      </p>
    </div>
  );
}