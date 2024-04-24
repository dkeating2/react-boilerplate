import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../hooks/store.tsx";
import type { Question } from "../../types/question.types.ts";
import { Check, Close } from "@mui/icons-material";

import { answerQuestion } from "../../store/reducers/triviaReducer/triviaReducer.ts";
import Typography from "@mui/material/Typography";

interface TriviaQuestionProps {
  question: Question;
  number: number;
}

const TriviaQuestion = (props: TriviaQuestionProps) => {
  const { number, question } = props;

  const dispatch = useAppDispatch();
  const selectedAnswer = useAppSelector(
    (state) => state.trivia.answers[props.question.id]
  );
  const status = selectedAnswer
    ? selectedAnswer === question.correctAnswer
      ? "correct"
      : "incorrect"
    : undefined;

  const handleAnswerQuestion = (answer: string) => {
    dispatch(answerQuestion({ id: props.question.id, answer: answer }));
  };

  return (
    <Card>
      <CardContent>
        <Typography>
          {`${number}. `} {question.question}
        </Typography>
        <List dense disablePadding>
          {question.possibleAnswers.map((answer) => (
            <ListItem>
              <ListItemIcon>
                {answer === selectedAnswer &&
                  status &&
                  (status === "correct" ? <Check /> : <Close />)}
              </ListItemIcon>
              <ListItemButton onClick={() => handleAnswerQuestion(answer)}>
                <ListItemText primary={answer} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TriviaQuestion;
