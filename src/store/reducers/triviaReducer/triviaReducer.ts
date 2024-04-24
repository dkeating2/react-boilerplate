import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Question } from "../../../types/question.types.ts";

interface TriviaState {
  loading: boolean;
  questions: Array<Question>;
  answers: Record<number, string>;
}

const initialState: TriviaState = {
  loading: false,
  questions: [],
  answers: {},
};

export const fetchQuestions = createAsyncThunk(
  "trivia/fetchQuestions",
  async (): Promise<Array<Question>> => {
    const response = await axios.get(
      "https://api.sampleapis.com/futurama/questions"
    );
    return response.data;
  }
);

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    answerQuestion: (
      state,
      action: PayloadAction<{ id: number; answer: string }>
    ) => {
      state.answers[action.payload.id] = action.payload.answer;
    },
    clearAnswers: (state) => {
      state.answers = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export const { answerQuestion, clearAnswers } = triviaSlice.actions;

export default triviaSlice.reducer;
