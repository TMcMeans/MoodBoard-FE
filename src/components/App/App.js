import React, { Component } from 'react';

import Journal from '../../containers/Journal/Journal.js';

import './App.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import CalendarView from '../../containers/Calendar/Calendar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        {/* <Button text="home" /> */}
        <Journal />
        {/* <CalendarView /> */}
      </div>
    );
  }
}

export default App;
