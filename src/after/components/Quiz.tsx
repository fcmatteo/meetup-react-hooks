import React, { useCallback, useEffect, useState } from 'react';
import { Quiz as QuizInterface } from '../../quizes';
import { QuizQuestion } from './QuizQuestion';
import { QuizQuestionResult } from './QuizQuestionResult';

interface QuizProps {
  quiz: QuizInterface;
  onExit(): void;
}

const SECONDS_TO_ANSWER = 10;

export const Quiz: React.SFC<QuizProps> = ({ quiz, onExit }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeftToAnswer, setSecondsLeftToAnswer] = useState(
    SECONDS_TO_ANSWER
  );

  const handleNextQuestion = useCallback(
    () => {
      setSelectedAnswerIndex(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSecondsLeftToAnswer(SECONDS_TO_ANSWER);
    },
    [currentQuestionIndex]
  );

  const handleSelectAnswer = useCallback((answer: number) => {
    setSelectedAnswerIndex(answer);
  }, []);

  useEffect(
    () => {
      if (secondsLeftToAnswer > 0) {
        const id = window.setTimeout(() => {
          setSecondsLeftToAnswer(secondsLeftToAnswer - 1);
        }, 1000);

        return () => window.clearTimeout(id);
      }
    },
    [secondsLeftToAnswer]
  );

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const hasNexQuestion = currentQuestionIndex < quiz.questions.length - 1;

  if (!secondsLeftToAnswer) {
    return (
      <QuizQuestionResult
        currentQuestion={currentQuestion}
        hasNexQuestion={hasNexQuestion}
        onExit={onExit}
        onNextQuestion={handleNextQuestion}
        selectedAnswerIndex={selectedAnswerIndex}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      selectedAnswerIndex={selectedAnswerIndex}
      secondsLeftToAnswer={secondsLeftToAnswer}
      onSelectAnswer={handleSelectAnswer}
    />
  );
};
