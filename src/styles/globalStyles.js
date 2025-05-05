import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #f0f0f0; /* Light background for the whole app */
  }

  h1, h2, h3 {
    color: #222;
    margin-bottom: 0.5em;
  }

  p {
    color: #444;
    line-height: 1.5;
    margin-bottom: 1em;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
