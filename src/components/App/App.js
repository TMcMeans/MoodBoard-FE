import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Affirmations from '../../containers/Affirmations/Affirmations';
import CalendarView from '../../containers/CalendarView/CalendarView.js';
import DailyView from '../../containers/DailyView/DailyView';
import Home from '../../containers/Home/Home';
import Journal from '../../containers/Journal/Journal.js';
import TodayMood from '../../containers/TodayMood/TodayMood';
import UserForm from '../../containers/UserForm/UserForm';

import './App.css';
// import Calendar from 'react-calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/userForm" render={() => <UserForm />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/calendarView" render={() => <CalendarView />} />
          <Route exact path="/dailyView" render={() => <DailyView />} />
          <Route exact path="/journal" render={() => <Journal />} />
          <Route exact path="/todayMood" render={() => <TodayMood />} />
          <Route exact path="/affirmations" render={() => <Affirmations />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
