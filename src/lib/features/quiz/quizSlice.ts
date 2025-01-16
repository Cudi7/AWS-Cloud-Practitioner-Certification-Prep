import { createAppSlice } from "@/lib/createAppSlice";

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
    incrementRightQuestion: create.reducer((state) => {
      state.rightQuestionsCount += 1;
    }),
    incrementWrongQuestion: create.reducer((state) => {
      state.wrongQuestionsCount += 1;
    }),
  }),
  selectors: {
    selectRightQuestions: (state) => state.rightQuestionsCount,
    selectWrongQuestions: (state) => state.wrongQuestionsCount,
  },
});

export const { incrementRightQuestion, incrementWrongQuestion } =
  quizSlice.actions;

export const { selectRightQuestions, selectWrongQuestions } =
  quizSlice.selectors;
