import React from 'react';
import { Button } from '../../common/components/Button';
import { Card } from '../../common/components/Card';
import { Text } from '../../common/components/Text';
import { styled } from '../../common/styles/styled';
import { Quiz } from '../../quizes';

interface QuizListProps {
  availableQuizes: Quiz[];
  onSelectQuiz(quiz: Quiz): void;
}

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0 0 0.5rem 0;
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const QuizList: React.SFC<QuizListProps> = ({
  availableQuizes,
  onSelectQuiz,
}) => (
  <Card>
    <Text size={1.5} mb={1} align="center">
      Auth0 Values Triva
    </Text>
    <List>
      <Button fullWidth onClick={() => onSelectQuiz(availableQuizes[0])}>
        Start Quiz
      </Button>
    </List>
  </Card>
);
