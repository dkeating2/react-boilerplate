const averageWordsPerQuote = (quotes: string[]) => {
  if (quotes.length === 0) {
    return 0;
  }
  const totalWords = quotes.reduce((acc, quote) => {
    const words = quote.split(" ");
    return acc + words.length;
  }, 0);
  return totalWords / quotes.length;
};

export default averageWordsPerQuote;
