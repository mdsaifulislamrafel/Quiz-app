import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface TQuiz {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  quizCompleted: boolean;
}

const initialState: TQuiz = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer
      console.log(questionIndex, answer);
    },
  },
});

export const { setAnswer } = quizSlice.actions;
export default quizSlice.reducer;
