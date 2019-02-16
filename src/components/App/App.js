import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

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
        {/*<Journal />*/}
        <Switch>
          <Route exact path="/userForm" render={() => {/*UserForm*/}} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/calendarView" render={() => {/*CalendarView*/}} />
          <Route exact path="/dailyView" render={() => {/*DailyView*/}} />
          <Route exact path="/journal" render={() => {/*Journal*/}} />
          <Route exact path="/todayMood" render={() => {/*TodayMood*/}} />
          <Route exact path="/affirmations" render={() => {/*Affirmations*/}} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
