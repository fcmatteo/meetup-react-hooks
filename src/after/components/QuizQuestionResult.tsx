import React from 'react';
import { Button } from '../../common/components/Button';
import { Card, CardActions } from '../../common/components/Card';
import { Text } from '../../common/components/Text';
import { styled } from '../../common/styles/styled';
import { Question } from '../../quizes';

export interface QuizQuestionResultProps {
  currentQuestion: Question;
  selectedAnswerIndex: number;
  hasNexQuestion: boolean;
  onNextQuestion(): void;
  onExit(): void;
  onTryAgain(): void;
}

const Title = styled(Text).attrs({
  align: 'center',
  mb: 1,
  size: 2,
})<{ isCorrect: boolean }>`
  color: ${props =>
    props.isCorrect ? props.theme.success : props.theme.failure};
`;

const ValueIcon = styled.img`
  height: 100px;
  width: 100px;
  display: block;
  margin-bottom: 10px;
  margin: 0 auto 10px auto;
`;

const ValueTitle = styled.h1`
  text-align: center;
`;

export const QuizQuestionResult: React.SFC<QuizQuestionResultProps> = ({
  currentQuestion,
  selectedAnswerIndex,
  onNextQuestion,
  hasNexQuestion,
  onExit,
  onTryAgain,
}) => {
  const isCorrect = currentQuestion.answer === selectedAnswerIndex;
  // const correctAnswer = currentQuestion.answerOptions[currentQuestion.answer];

  return (
    <Card>
      <Title isCorrect={isCorrect}>
        {isCorrect ? 'Correct!' : 'Incorrect'}
      </Title>
      <ValueIcon src={currentQuestion.value.icon} />
      <ValueTitle>{currentQuestion.value.label}</ValueTitle>
      {!isCorrect && (
        <Text as="div" align="center" mb={1}>
          <Text mb={1 / 2}>Seriously?</Text>
          {/* <Text weight={500} size={1.25}>
            {correctAnswer}
          </Text> */}
        </Text>
      )}
      {/* {Boolean(currentQuestion.description) && (
        <Text color="secondary" align="center" mb={1}>
          {currentQuestion.description}
        </Text>
      )} */}
      <CardActions>
        <Button onClick={onExit} fullWidth>
          Exit Quiz
        </Button>
        {isCorrect ? (
          hasNexQuestion && (
            <Button fullWidth onClick={onNextQuestion} variant="primary">
              Next Question
            </Button>
          )
        ) : (
          <Button fullWidth onClick={onTryAgain} variant="primary">
            Try Again
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
