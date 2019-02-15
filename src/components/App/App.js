import React, { Component } from 'react';

import Journal from '../../containers/Journal/Journal.js';

import './App.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import CalendarView from '../../containers/Calendar/Calendar.js';
import Home from '../Home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        {/* <Button text="home" /> */}
        {/*<Journal />*/}
        {/* <CalendarView /> */}
        <Home />
      </div>
    );
  }
}

export default App;
