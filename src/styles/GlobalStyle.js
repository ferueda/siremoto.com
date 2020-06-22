import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
:root {
  --border-radius-size: 4px;
  --main-orange: #f97f51;
}

  html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1rem;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
