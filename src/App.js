import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./Example";
import selfpic from './resize.jpg';
import About from './About.js';
import Experience from './Experience.js';
import Exp from './Exp.js';
import RFDSP from './RFDSP.js';
import Nano from './Nano.js';
import CB from './CB.js';
import CS from './CS.js';
import DPR from './DPR.js';
import OHP from './OHP.js';
import Contact from './Contact.js';
import rect from './rect.png';
import { callExpression } from '@babel/types';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rect} width="800" height="80"/>
        <a className="App-hi"> Hi! I'm <br></br> </a>
        <a className="App-name"> KATELYN SCHMIDT </a>
        <img src={selfpic} className="Main-pic" alt="selfpic" align="right" border-radius="25px"/>
        <p>
        <br></br>
        <br></br>
        <br></br>
        I’m a third year electrical engineering and computer science student at UC Berkeley, passionate about coding and eating!
        </p>
        
      </header>
      {/* <div>
        exp_data.map((logo, info) => <Exp logo="logo" info="info" />)
      </div> */}
      <body className="App-about">
        <a className="App-little">
      <a className="App-name"> A Little About Me... </a> </a>
        < About />
      </body>
      <body className="App-things">
        <a className="App-name">
          Some Things That I've Done...
        </a>
      </body>
      <body className="App-rf">
        <RFDSP />
      </body>
      <body className="App-nano">
        <Nano />
      </body>
      <body className="App-cb">
        <CB />
      </body>
      <body className="App-cs">
        <CS />
      </body>
      <body className="App-dpr">
        <DPR />
      </body>
      <body className="App-ohp">
        <OHP />
      </body>
      <body className="App-contact">
        <Contact />
        17schmidtkatelyn@berkeley.edu <br></br>
        <a
          className="App-link"
          href="https://github.com/katelyn-schmidt"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/katelyn-schmidt
        </a>
      </body>
      
    </div>
  );
}

export default App;
