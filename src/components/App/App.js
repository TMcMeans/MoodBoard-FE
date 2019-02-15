import React, { Component } from 'react';

import Journal from '../../containers/Journal/Journal.js';

import './App.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import CalendarView from '../../containers/Calendar/Calendar.js';
import Home from '../../containers/Home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Button text="home" /> */}
        {/*<Journal />*/}
        {/* <CalendarView /> */}
        <Home />
      </div>
    );
  }
}

export default App;
