import QuoteCard from './QuoteCard';

export default function QuotesDisplay({ quotes, topic }) {
  if (quotes.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Quotes about "{topic}"
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid gap-6">
        {quotes.map((item, index) => (
          <QuoteCard
            key={index}
            quote={item.quote}
            author={item.author}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}