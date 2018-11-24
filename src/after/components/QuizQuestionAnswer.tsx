import React, { useCallback } from 'react';
import { Button } from '../../common/components/Button';
import { styled } from '../../common/styles/styled';

interface QuizQuestionAnswerProps {
  text: string;
  index: number;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect(answerIndex: number): void;
}

const Root = styled.div`
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const QuizQuestionAnswer = React.memo<QuizQuestionAnswerProps>(
  ({ text, isSelected, isDisabled, onSelect, index }) => {
    const handleClick = useCallback(() => onSelect(index), [onSelect, index]);

    return (
      <Root>
        <Button
          fullWidth
          textAlign="left"
          role="radio"
          aria-checked={isSelected}
          variant={isSelected ? 'primary' : 'default'}
          onClick={handleClick}
          disabled={isDisabled}
        >
          {text}
        </Button>
      </Root>
    );
  }
);
