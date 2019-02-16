import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

import './DailyView.css';

class DailyView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const entry =
      'Now, when you do this without getting punched in the chest, you will have more fun. Get me a vodka rocks. And a piece of toast. Now, when you do this without getting punched in the chest, you will have more fun. Get me a vodka rocks...';

    const affirmation = 'I got this.';
    const dateText = 'June 16, 2018';
    return (
      <div className="daily-view">
        <Logo />
        <h1 className="date">{dateText}</h1>
        <h1>anxiety</h1>
        <div class="daily-entry">{entry}</div>
        <div class="daily-affirmation">
          <li>{affirmation}</li>
        </div>
        <div className="btn-wrapper">
          <Button text="<" />
          <Button text="back" />
          <Button text=">" />
        </div>
      </div>
    );
  }
}

export default DailyView;
