import React, { useCallback, useState } from 'react';
import { styled } from '../common/styles/styled';
import { allQuizes, Quiz as QuizInterface } from '../quizes';

const QuizList = React.lazy(() =>
  import('./components/QuizList').then(mod => ({ default: mod.QuizList }))
);

const Quiz = React.lazy(() =>
  import('./components/Quiz').then(mod => ({ default: mod.Quiz }))
);

const Main = styled.main`
  padding: 1rem;
`;

export const App: React.SFC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizInterface>(null);
  const handleExit = useCallback(
    () => {
      setSelectedQuiz(null);
    },
    [setSelectedQuiz]
  );

  return (
    <Main>
      <React.Suspense fallback={<div>loading...</div>}>
        {Boolean(selectedQuiz) ? (
          <Quiz quiz={selectedQuiz} onExit={handleExit} />
        ) : (
          <QuizList
            availableQuizes={allQuizes}
            onSelectQuiz={setSelectedQuiz}
          />
        )}
      </React.Suspense>
    </Main>
  );
};
