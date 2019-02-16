import React, { Component } from 'react';

import Journal from '../../containers/Journal/Journal.js';
import { Switch, Route } from 'react-router-dom';
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
          <Route exact path="/" render={() => {/*UserForm*/}} />
          <Route exact path="/home" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
