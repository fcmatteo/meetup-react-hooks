import React from 'react';
import { styled } from '../common/styles/styled';
import { allQuizes, Quiz as QuizInterface } from '../quizes';
import { Quiz } from './components/Quiz';
import { QuizList } from './components/QuizList';

interface State {
  selectedQuiz: QuizInterface;
}

const Main = styled.main`
  padding: 1rem;
`;

export class App extends React.Component<{}, State> {
  public state: State = {
    selectedQuiz: null,
  };

  private handleSelectQuiz = (quiz: QuizInterface) => {
    this.setState({ selectedQuiz: quiz });
  };

  private handleExit = () => {
    this.setState({ selectedQuiz: null });
  };

  public render() {
    return (
      <Main>
        {Boolean(this.state.selectedQuiz) ? (
          <Quiz quiz={this.state.selectedQuiz} onExit={this.handleExit} />
        ) : (
          <QuizList
            availableQuizes={allQuizes}
            onSelectQuiz={this.handleSelectQuiz}
          />
        )}
      </Main>
    );
  }
}
