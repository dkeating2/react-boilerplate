import { describe, expect, it } from "vitest";
import averageWordsPerQuote from "./averageWordPerQuote.ts";

describe.concurrent("averageWordsPerQuote", () => {
  it("should return the average number of words per quote", () => {
    const quotes = ["Hello", "React is awesome"];
    expect(averageWordsPerQuote(quotes)).toBe(2);
  });
  it("should return 0 if there are no quotes", () => {
    expect(averageWordsPerQuote([])).toBe(0);
  });
});
