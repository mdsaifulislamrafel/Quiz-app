import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

const Questian = () => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Questions: {currentQuestionIndex + 1} of {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              onClick={() => handleAnswerChange(option)}
              key={index}
              size={"lg"}
              className="w-full mt-3"
            >
              {option}
            </Button>
          ))}
          <QuizControl />
        </CardContent>
      </Card>
    </div>
  );
};

export default Questian;
