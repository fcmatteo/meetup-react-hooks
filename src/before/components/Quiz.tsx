import React from 'react';
import { Quiz as QuizInterface } from '../../quizes';
import { QuizQuestion } from './QuizQuestion';
import { QuizQuestionResult } from './QuizQuestionResult';

interface QuizProps {
  quiz: QuizInterface;
  onExit(): void;
}

interface State {
  secondsLeftToAnswer: number;
  currentQuestionIndex: number;
  selectedAnswerIndex: number;
}

const SECONDS_TO_ANSWER = 10;

export class Quiz extends React.Component<QuizProps, State> {
  public state: State = {
    currentQuestionIndex: 0,
    secondsLeftToAnswer: SECONDS_TO_ANSWER,
    selectedAnswerIndex: null,
  };

  private countdown: number;

  private handleSelectAnswer = (selectedAnswerIndex: number) => {
    this.setState({ selectedAnswerIndex });
  };

  private handleNextQuestion = () => {
    const { currentQuestionIndex } = this.state;
    this.setState({
      currentQuestionIndex: currentQuestionIndex + 1,
      secondsLeftToAnswer: SECONDS_TO_ANSWER,
      selectedAnswerIndex: null,
    });
    this.startCountdown();
  };

  private startCountdown = () => {
    this.countdown = window.setInterval(this.handleCountdownTick, 1000);
  };

  private handleCountdownTick = () => {
    const { secondsLeftToAnswer } = this.state;
    const nextValue = secondsLeftToAnswer - 1;
    if (nextValue === 0) {
      window.clearInterval(this.countdown);
    }
    this.setState({ secondsLeftToAnswer: nextValue });
  };

  public componentDidMount() {
    this.startCountdown();
  }

  public render() {
    const { quiz, onExit } = this.props;
    const {
      secondsLeftToAnswer,
      currentQuestionIndex,
      selectedAnswerIndex,
    } = this.state;
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const hasNexQuestion = currentQuestionIndex < quiz.questions.length - 1;

    if (!secondsLeftToAnswer) {
      return (
        <QuizQuestionResult
          currentQuestion={currentQuestion}
          hasNexQuestion={hasNexQuestion}
          onExit={onExit}
          onNextQuestion={this.handleNextQuestion}
          selectedAnswerIndex={selectedAnswerIndex}
        />
      );
    }

    return (
      <QuizQuestion
        question={currentQuestion}
        selectedAnswerIndex={selectedAnswerIndex}
        secondsLeftToAnswer={secondsLeftToAnswer}
        onSelectAnswer={this.handleSelectAnswer}
      />
    );
  }
}
