import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store.tsx";
import {
  clearAnswers,
  fetchQuestions,
} from "../../store/reducers/triviaReducer/triviaReducer.ts";
import { Stack, Button } from "@mui/material";
import TriviaQuestion from "../../components/TriviaQuestion/TriviaQuestion.tsx";

const TriviaPage = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.trivia.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  });

  const handleClearAnswers = () => {
    dispatch(clearAnswers());
  };

  return (
    <>
      <Stack spacing={3}>
        <Button onClick={handleClearAnswers}>Clear Answers</Button>
        {questions.map((question, i: number) => (
          <TriviaQuestion
            number={i + 1}
            question={question}
            key={question.id}
          />
        ))}
      </Stack>
    </>
  );
};
export default TriviaPage;
