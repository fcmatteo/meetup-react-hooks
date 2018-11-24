import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './after/App';
import { App } from './before/App';
import { GlobalStyles } from './common/styles/GlobalStyles';
import { styled, ThemeProvider } from './common/styles/styled';
import { theme } from './common/styles/theme';

const AppWrap = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppWrap>
      <GlobalStyles />
      <App />
    </AppWrap>
  </ThemeProvider>,
  document.getElementById('root')
);
