import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Button from '../Button/Button';
import Journal from '../../containers/Journal/Journal.js';
import Logo from '../Logo/Logo';
import CalendarView from '../../containers/Calendar/CalendarView.js';
import Home from '../../containers/Home/Home';
import TodayMood from '../../containers/TodayMood/TodayMood';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/userForm"
            render={() => {
              /*UserForm*/
            }}
          />
          <Route exact path="/home" render={() => <Home />} />
          <Route
            exact
            path="/calendarView"
            render={() => {
              /*CalendarView*/
            }}
          />
          <Route
            exact
            path="/dailyView"
            render={() => {
              /*DailyView*/
            }}
          />
          <Route
            exact
            path="/journal"
            render={() => {
              /*Journal*/
            }}
          />
          <Route
            exact
            path="/todayMood"
            render={() => {
              /*TodayMood*/
            }}
          />
          <Route
            exact
            path="/affirmations"
            render={() => {
              /*Affirmations*/
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
