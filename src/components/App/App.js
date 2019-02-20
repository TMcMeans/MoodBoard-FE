import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Affirmations from '../../containers/Affirmations/Affirmations';
import CalendarView from '../../containers/CalendarView/CalendarView';
import DailyView from '../../containers/DailyView/DailyView';
import Home from '../../containers/Home/Home';
import Journal from '../../containers/Journal/Journal';
import TodayMood from '../../containers/TodayMood/TodayMood';
import UserForm from '../../containers/UserForm/UserForm';
import WriteAffirmation from '../../containers/WriteAffirmation/WriteAffirmation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <UserForm type="login" />} />
          <Route exact path="/signup" render={() => <UserForm type="signup" />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/calendarview" render={() => <CalendarView />} />
          <Route exact path="/dailyview" render={() => <DailyView />} />
          <Route exact path="/journal" render={() => <Journal />} />
          <Route exact path="/todaymood" render={() => <TodayMood />} />
          <Route exact path="/affirmations" render={() => <Affirmations />} />
          <Route exact path="/writeaffirmation" render={() => <WriteAffirmation />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
