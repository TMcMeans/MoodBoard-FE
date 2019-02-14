import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MoodBoard</h1>
        <Button text="home" />
      </div>
    );
  }
}

export default App;
