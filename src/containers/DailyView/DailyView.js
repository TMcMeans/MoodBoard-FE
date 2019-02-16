import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

class DailyView extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="daily-view">
        <Logo />
        <h2>Today's Mood</h2>
        <h1>anxiety</h1>
        <p>
          Based on today's journal entry response, would you like to write a
          affirmation?
        </p>
        <Button text="yes" />
        <Button text="no" />
      </div>
    );
  }
}

export default DailyView;
