import React, { Component } from 'react';

import Journal from '../../containers/Journal/Journal.js';

import './App.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Journal />
      </div>
    );
  }
}

export default App;
