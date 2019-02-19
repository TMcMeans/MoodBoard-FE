import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import './TodayMood.css';

class TodayMood extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const toneWord = 'analytical';
    const messageText = 'would you like to write an affirmation?'
    return (
      <div className="today-mood analytical-bg">
        <Logo />
        <h2 className="today-title">Today's Mood</h2>
        <h1 className="tone-word analytical">{toneWord}</h1>
        <p className="message">
          Based on your mood today,
          <br /> 
          <span className="message-text">
            {messageText}
          </span>
        </p>
        <div className="today-btns-container">
          <Link to="/writeaffirmation">
            <button>yes</button>
          </Link>
          <Link to="/home">
            <button>no</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  journal: state.journal
})

const mapDispatchToProps = dispatch => ({
  // will need to dispatch isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(TodayMood);
