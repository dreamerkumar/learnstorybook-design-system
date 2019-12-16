import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import logo from './logo.svg';
import './App.css';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
