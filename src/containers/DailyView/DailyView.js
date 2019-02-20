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
    const toneWord = 'sadness';
    const entry =
      'Now, when you do this without getting punched in the chest, you will have more fun. Get me a vodka rocks. And a piece of toast. Now, when you do this without getting punched in the chest, you will have more fun. Get me a vodka rocks...';

    const affirmation = 'I got this.';
    const dateText = 'June 16, 2018';
    return (
      <div className="daily-view sadness-bg">
        <Logo />
        <h2 className="daily-date">{dateText}</h2>
        <h1 className="tone-word sadness">{toneWord}</h1>
        <div class="daily-entry">{entry}</div>
        <div class="daily-affirmation">
          <p className="daily-affirmation-text">{affirmation}</p>
        </div>
        <div className="btn-wrapper">
          <button className="standard-btn dark left-arrow">&#60;</button>
          <button className="standard-btn dark back-to-calendar-btn">calendar</button>
          <button className="standard-btn dark right-arrow">&#62;</button>
        </div>
      </div>
    );
  }
}

export default DailyView;
