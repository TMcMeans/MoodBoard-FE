import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

import './Affirmations.css';

export class Affirmations extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const monthText = 'June';
    return (
      <div className="month-affirmations">
        <Logo />
        <h1 className="month">{monthText} Affirmations</h1>
        <ul className="affirmation-list">
          <li className="single-affirmation" id="1">
            <FaCircle className="circle" />
            <span className="affirmation-text">6/3: "You got this."</span>
          </li>
          <li className="single-affirmation" id="2">
            <FaCircle className="circle" />
            <span className="affirmation-text">6/3: "You got this."</span>
          </li>
          <li className="single-affirmation" id="3">
            <FaCircle className="circle" />
            <span className="affirmation-text">6/3: "You got this."</span>
          </li>
          <li className="single-affirmation" id="4">
            <FaCircle className="circle" />
            <span className="affirmation-text">6/3: "You got this."</span>
          </li>
        </ul>
        <button className="standard-btn light back-to-calendar-btn">
          calendar
        </button>
      </div>
    );
  }
}

export default Affirmations;
