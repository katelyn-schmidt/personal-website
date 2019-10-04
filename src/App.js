import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./Example";
import selfpic from './resize.jpg';
import About from './About.js';
import Experience from './Experience.js';
import { callExpression } from '@babel/types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={selfpic} className="Main-pic" alt="selfpic" />
        <p>
        I’m a third year electrical engineering and computer science student at UC Berkeley, passionate about coding and eating!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < Example />
      </header>
      < About />
      < Experience />
    </div>
  );
}

export default App;
