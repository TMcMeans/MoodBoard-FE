import React, { Component } from 'react';

// import Journal from '../../containers/Journal/Journal.js';
// import Logo from '../Logo/Logo';
// import CalendarView from '../../containers/Calendar/CalendarView.js';
// import Home from '../../containers/Home/Home';

import DailyView from '../../containers/DailyView/DailyView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DailyView />
      </div>
    );
  }
}

export default App;
