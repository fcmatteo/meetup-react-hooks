import React, { useCallback, useState } from 'react';
import { styled } from '../common/styles/styled';
import logoSrc from '../images/logo-darkbg.svg';
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

const Logo = styled.img`
  width: 200px;
  margin-bottom: 25px;
`

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
      <header>
        <Logo src={logoSrc} />
      </header>
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
