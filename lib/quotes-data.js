// lib/quotes-data.js
export const quotesDatabase = {
  motivation: [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" }
  ],
  success: [
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
  ],
  life: [
    { quote: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" }
  ],
  wisdom: [
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "Yesterday is history, tomorrow is a mystery, today is a gift.", author: "Eleanor Roosevelt" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" }
  ],
  love: [
    { quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
    { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
    { quote: "Love is not about how much you say 'I love you', but how much you can prove that it's true.", author: "Unknown" },
    { quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { quote: "Love is the bridge between you and everything.", author: "Rumi" }
  ],
  happiness: [
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "The secret of being happy is accepting where you are in life and making the most out of everyday.", author: "Unknown" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "The happiest people don't have the best of everything, they just make the best of everything.", author: "Unknown" },
    { quote: "Happiness is a choice, not a result.", author: "Ralph Marston" }
  ],
  change: [
    { quote: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts" },
    { quote: "Change is the end result of all true learning.", author: "John F. Kennedy" },
    { quote: "Progress is impossible without change, and those who cannot change their minds cannot change anything.", author: "George Bernard Shaw" },
    { quote: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi" }
  ],
  dreams: [
    { quote: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Dreams don't work unless you do.", author: "John C. Maxwell" },
    { quote: "A dream doesn't become reality through magic; it takes sweat, determination and hard work.", author: "Colin Powell" },
    { quote: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" }
  ]
};

export const getAvailableTopics = () => {
  return Object.keys(quotesDatabase).map(topic => 
    topic.charAt(0).toUpperCase() + topic.slice(1)
  ).join(', ');
};

export const searchQuotes = (searchTopic) => {
  const normalizedTopic = searchTopic.toLowerCase().trim();
  let matchingQuotes = [];
  
  // Direct topic match
  if (quotesDatabase[normalizedTopic]) {
    matchingQuotes = [...quotesDatabase[normalizedTopic]];
  } else {
    // Search for partial matches across all topics
    Object.keys(quotesDatabase).forEach(key => {
      if (key.includes(normalizedTopic) || normalizedTopic.includes(key)) {
        matchingQuotes.push(...quotesDatabase[key]);
      }
    });
    
    // If no matches found, use a mix of motivational quotes
    if (matchingQuotes.length === 0) {
      matchingQuotes = [
        ...quotesDatabase.motivation,
        ...quotesDatabase.wisdom,
        ...quotesDatabase.life
      ];
    }
  }
  
  // Randomly select 3 quotes
  const shuffled = matchingQuotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};