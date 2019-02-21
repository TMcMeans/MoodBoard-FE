import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import { inspirationalQuotes } from '../../helper/inspirationalQuotes';
import './TodayMood.css';
import Journal from '../Journal/Journal';

export class TodayMood extends Component {
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
    let quoteText;
    let quoteAuthor;

    if (
      primary_tone === 'anger' ||
      primary_tone === 'sadness' ||
      primary_tone === 'tentative' ||
      primary_tone === 'fear'
    ) {
      messageText = 'would you like to write an affirmation?';
      toneResponse = (
        <div className="today-btns-container">
          <Link to="/writeaffirmation">
            <button className="standard-btn dark yes-no-btns">yes</button>
          </Link>
          <Link to="/home">
            <button className="standard-btn dark yes-no-btns">no</button>
          </Link>
        </div>
      );
    } else if (
      primary_tone === 'joy' ||
      primary_tone === 'analytical' ||
      primary_tone === 'confident'
    ) {
      const quoteTone = inspirationalQuotes[primary_tone];
      const quoteIndex = Math.round(Math.random() * (quoteTone.length - 1));
      quoteText = quoteTone[quoteIndex].quote;
      quoteAuthor = quoteTone[quoteIndex].author;

      messageText = 'have a quote:';

      toneResponse = (
        <div className="quote-btns-container">
          <p className="quote">
            {quoteText}
            <br />- {quoteAuthor}
          </p>
          <Link to="/home">
            <button className="standard-btn dark go-home-btn">home</button>
          </Link>
        </div>
      );
    }

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

export const mapStateToProps = state => ({
  journal: state.journal
});

Journal.propTypes = {
  journal: PropTypes.object
};

export default connect(mapStateToProps)(TodayMood);
