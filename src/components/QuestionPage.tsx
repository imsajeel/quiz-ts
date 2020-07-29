import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { fetchQuestions, Difficulty, QuestionState } from "../API";

const TOTAL_QUESTION = 10;

type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function QuestionPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTION, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = async () => {
    const nextNumber = number + 1;

    if (nextNumber === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextNumber);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  return (
    <div className="text-center md:p-10">
      <h1 className="text-3xl">Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={startQuiz}
        >
          Begin Quiz
        </button>
      ) : null}

      {!gameOver ? <p className="score">Score: {score}</p> : null}

      {loading ? <p>Loading</p> : null}
      {!loading && !gameOver ? (
        <QuestionCard
          questionNum={number + 1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      ) : null}

      {!gameOver &&
      !gameOver &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTION - 1 ? (
        <div className="w-full text-center">
          <button
            className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={nextQuestion}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default QuestionPage;
