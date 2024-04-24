import { vi, expect, describe, it } from "vitest";
import { triviaSlice, fetchQuestions } from "./triviaReducer.ts";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

describe.concurrent("triviaSlice", () => {
  it("should handle initial state", () => {
    const actual = triviaSlice.reducer(undefined, { type: "unknown" });
    const initialState = {
      loading: false,
      questions: [],
      answers: {},
    };
    expect(actual).toEqual(initialState);
  });

  it("should handle answerQuestion", () => {
    const actual = triviaSlice.reducer(
      { loading: false, questions: [], answers: {} },
      triviaSlice.actions.answerQuestion({ id: 1, answer: "Test Answer" }),
    );
    expect(actual.answers[1]).toEqual("Test Answer");
  });

  it("should handle clearAnswers", () => {
    const actual = triviaSlice.reducer(
      { loading: false, questions: [], answers: { 1: "Test Answer" } },
      triviaSlice.actions.clearAnswers(),
    );
    expect(actual.answers).toEqual({});
  });
});

describe.concurrent("fetchQuestions", () => {
  it("should fetch questions successfully", async () => {
    const dummyQuestions = [{ question: "Test Question", id: 1 }];
    axios.get = vi.fn().mockResolvedValue({ data: dummyQuestions });

    const store = configureStore({ reducer: { trivia: triviaSlice.reducer } });
    await store.dispatch(fetchQuestions());

    const actual = store.getState();
    expect(actual.trivia.questions).toEqual(dummyQuestions);
  });

  it("should handle fetch error", async () => {
    axios.get = vi.fn().mockRejectedValue(new Error("Async error"));

    const store = configureStore({ reducer: { trivia: triviaSlice.reducer } });
    await store.dispatch(fetchQuestions());

    const actual = store.getState();
    expect(actual.trivia.questions).toEqual([]);
  });
});
