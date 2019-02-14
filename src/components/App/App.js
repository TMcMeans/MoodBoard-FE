import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Button text="home" />
      </div>
    );
  }
}

export default App;
