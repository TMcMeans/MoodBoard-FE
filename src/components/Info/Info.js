import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './Info.css';
import Logo from '../../components/Logo/Logo';

export class Info extends Component {
  render() {
    return (
      <div>
        <Logo />

        <h1 className="info-heading"> About </h1>
        <p className="info-paragraph">
          {' '}
          MoodBoard is a daily journaling tool, record of personal reflections,
          and long-term reference for a user’s projected mood on any given day.{' '}
        </p>
      </div>
    );
  }
}

export default withRouter(Info);
