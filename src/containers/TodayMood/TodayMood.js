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
    const { primary_tone } = this.props.journal.tones;

    let componentClass;
    let toneClass;
    if (primary_tone === 'anger') {
      componentClass = 'anger-bg today-mood';
      toneClass = 'anger tone-word';
    } else if (primary_tone === 'sadness') {
      componentClass = 'sadness-bg today-mood';
      toneClass = 'sadness tone-word';
    } else if (primary_tone === 'tentative') {
      componentClass = 'tentative-bg today-mood';
      toneClass = 'tentative tone-word';
    } else if (primary_tone === 'fear') {
      componentClass = 'fear-bg today-mood';
      toneClass = 'fear tone-word';
    } else if (primary_tone === 'joy') {
      componentClass = 'joy-bg today-mood';
      toneClass = 'joy tone-word';
    } else if (primary_tone === 'confident') {
      componentClass = 'confident-bg today-mood';
      toneClass = 'confident tone-word';
    } else if (primary_tone === 'analytical') {
      componentClass = 'analytical-bg today-mood';
      toneClass = 'analytical tone-word';
    }

    let messageText;
    let toneResponse;
    if (primary_tone === 'anger' || primary_tone === 'sadness' || primary_tone === 'tentative' || primary_tone === 'fear') {
      messageText = 'would you like to write an affirmation?';
      toneResponse = (
        <div className="quote-btns-container">
          <Link to="/writeaffirmation">
              <button>yes</button>
          </Link>
          <Link to="/home">
            <button>no</button>
          </Link>
        </div>
      )
    } else if (primary_tone === 'joy' || primary_tone === 'confident' || primary_tone === 'analytical') {
      messageText = 'here is a nice quote for your day.';
      toneResponse = (
        <div className="quote-btns-container">
          <p className="quote">
            {quoteText}
          </p>
          <Link to="/home">
            home
          </Link>
        </div>
      )
    }

    let quoteText = 'Happy'

    return (
      <div className={componentClass}>
        <Logo />
        <h2 className="today-title">Today's Mood</h2>
        <h1 className={toneClass}>{primary_tone}</h1>
        <p className="message">
          Based on your mood today,
          <br /> 
          {messageText}
        </p>
        {toneResponse}
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
