import React from 'react';
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

export class QuizQuestionAnswer extends React.Component<
  QuizQuestionAnswerProps
> {
  private handleClick = () => {
    const { onSelect, index } = this.props;
    onSelect(index);
  };

  public render() {
    const { text, isSelected, isDisabled } = this.props;
    return (
      <Root>
        <Button
          fullWidth
          textAlign="left"
          variant={isSelected ? 'primary' : 'default'}
          role="checkbox"
          aria-checked={isSelected}
          onClick={this.handleClick}
          disabled={isDisabled}
        >
          {text}
        </Button>
      </Root>
    );
  }
}
