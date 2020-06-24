import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
:root {
  --border-radius-size: 4px;
  --main-color: #08d9d6;
  --secondary-color: #eb4d4b;
  --dark-color: #252a34;
  --light-color: #eaeaea;

}

${
	'' /* .color {
  background-color: var(--secondary-color);
  color: #fff;
  padding: 1rem 3rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  margin: 2rem auto;
  display: block;
} */
}

html {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
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
