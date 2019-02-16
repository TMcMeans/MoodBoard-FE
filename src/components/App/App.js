import React, { Component } from 'react';

// import Journal from '../../containers/Journal/Journal.js';
// import Logo from '../Logo/Logo';
// import CalendarView from '../../containers/Calendar/CalendarView.js';
// import Home from '../../containers/Home/Home';

import TodayMood from '../../containers/TodayMood/TodayMood';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodayMood />
      </div>
    );
  }
}

export default App;
