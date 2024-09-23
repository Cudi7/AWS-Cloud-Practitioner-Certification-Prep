import { createAppSlice } from "@/lib/createAppSlice";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuizSliceState {
  rightQuestionsCount: number;
  wrongQuestionsCount: number;
}

const initialState: QuizSliceState = {
  rightQuestionsCount: 0,
  wrongQuestionsCount: 0,
};

export const quizSlice = createAppSlice({
  name: "quiz",
  initialState,
  reducers: (create) => ({
    incrementRightQuestions: create.reducer((state) => {
      state.rightQuestionsCount += 1;
    }),
    incrementWrongQuestions: create.reducer((state) => {
      state.wrongQuestionsCount += 1;
    }),
  }),
  selectors: {
    selectRightQuestions: (state) => state.rightQuestionsCount,
    selectWrongQuestions: (state) => state.wrongQuestionsCount,
  },
});

export const { incrementRightQuestions, incrementWrongQuestions } =
  quizSlice.actions;

export const { selectRightQuestions, selectWrongQuestions } =
  quizSlice.selectors;
