import React from 'react';
import { Card } from '../../common/components/Card';
import { Timer } from '../../common/components/Timer';
import { styled } from '../../common/styles/styled';
import { Question } from '../../quizes';
import { QuizQuestionAnswer } from './QuizQuestionAnswer';

export interface QuizQuestionProps {
  question: Question;
  secondsLeftToAnswer: number;
  selectedAnswerIndex: number;
  onSelectAnswer(answerIndex: number): void;
}

const QuestionText = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const QuizQuestion: React.SFC<QuizQuestionProps> = ({
  secondsLeftToAnswer,
  selectedAnswerIndex,
  onSelectAnswer,
  question,
}) => {
  const hasSelectedAnswer = selectedAnswerIndex != null;

  return (
    <Card>
      <TimerWrapper>
        <Timer value={secondsLeftToAnswer} />
      </TimerWrapper>
      <QuestionText id="quiz-quiestion-text">{question.text}</QuestionText>
      <div role="radiogroup" aria-labelledby="quiz-quiestion-text">
        {question.answerOptions.map((answer, idx) => (
          <QuizQuestionAnswer
            key={idx}
            index={idx}
            text={answer}
            isDisabled={hasSelectedAnswer}
            isSelected={selectedAnswerIndex === idx}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </Card>
  );
};
