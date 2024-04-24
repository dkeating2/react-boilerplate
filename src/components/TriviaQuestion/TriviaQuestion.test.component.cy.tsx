import TriviaQuestion from "./TriviaQuestion.tsx";

const mockQuestion = {
  id: 28,
  question: "What is Planet Express's Slogan?",
  possibleAnswers: [
    "Our crew is replaceable. Your package isn't",
    "Good news everyone",
    "We are the fastest service, no matter how long it takes.",
    "We will get it there, eventually.",
    "If it ain't broke, we'll break it.",
  ],
  correctAnswer: "Our crew is replaceable. Your package isn't",
};

describe("TriviaQuestion", () => {
  it("should render the trivia question", () => {
    cy.mount(<TriviaQuestion number={1} question={mockQuestion} />, {
      reducerState: {
        trivia: { loaded: true, answers: {}, questions: [mockQuestion] },
      },
    });
  });
});
