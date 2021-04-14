import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1440px;
    margin: 0 auto;
  }

  li {
    list-style: none;
  }

  .root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content auto;
  }

  i {
    font-size: 100px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
