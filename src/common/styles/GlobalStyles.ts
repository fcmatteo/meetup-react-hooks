import { createGlobalStyle } from './styled';

export const GlobalStyles = createGlobalStyle`
  html, 
  body {
    margin: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.25;
    @media(min-width: 500px) {
      font-size: 125%;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => props.theme.brand};
  }
`;
