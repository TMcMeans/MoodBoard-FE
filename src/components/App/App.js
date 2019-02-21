import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import Affirmations from '../../containers/Affirmations/Affirmations';
import CalendarView from '../../containers/CalendarView/CalendarView';
import DailyView from '../../containers/DailyView/DailyView';
import Home from '../../containers/Home/Home';
import Journal from '../../containers/Journal/Journal';
import TodayMood from '../../containers/TodayMood/TodayMood';
import UserForm from '../UserForm/UserForm';
import WriteAffirmation from '../../containers/WriteAffirmation/WriteAffirmation';
import Info from '../Info/Info.js';


import './App.css';

export class App extends Component {
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
          <Route exact path="/info" render={() => <Info />} />
          <Route path='' render={() =>
            (<div id="four-oh-four">
              <h1>Oops! We couldn't find that page.</h1>
              <Link to='/home'><button className="standard-btn">Home</button></Link>
              </div>)
            } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
