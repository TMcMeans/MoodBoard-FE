import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

import './Affirmations.css';

class Affirmations extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const monthText = 'June';
    return (
      <div>
        <Logo />
        <h1 className="month">{monthText} Affirmations</h1>
        <div className="single-affirmation">
          <div className="mood-color" style={{ backgroundColor: 'green' }} />
          <p>6/3: "You got this."</p>
        </div>
        <div className="single-affirmation">
          <div className="mood-color" style={{ backgroundColor: 'red' }} />
          <p>6/3: "You got this."</p>
        </div>
        <div className="single-affirmation">
          <div className="mood-color" style={{ backgroundColor: 'purple' }} />
          <p>6/3: "You got this."</p>
        </div>
        <div className="single-affirmation">
          <div className="mood-color" style={{ backgroundColor: 'gold' }} />
          <p>6/3: 'You got this.'</p>
        </div>
        <Button text="Calendar" />
      </div>
    );
  }
}

export default Affirmations;
