import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: #1976D2;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
