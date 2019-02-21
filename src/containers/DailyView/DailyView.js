import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import { getJournalEntryByDate } from '../../thunks/getJournalEntryByDate';
import './DailyView.css';

class DailyView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    const url = 'https://mood-board-be.herokuapp.com/api/v1/users/1/calendar?date=2019-02-17';
    await this.props.getJournalEntryByDate(url);
  }

  render() {
  //   const { primary_tone } = this.props.journal.tones;
  //   const { entry_text } = this.props.journal;
    const { primary_tone, journal_entry_text } = this.props.journal;
    let affirm;
    console.log(this.props.journal.affirmations)
    if (this.props.journal.affirmations) {
      affirm = this.props.journal.affirmations.map((affirmation) => affirmation.affirmation_text);
    }

    let componentClass;
    let toneClass;
    if (primary_tone === 'anger') {
      componentClass = 'anger-bg daily-view';
      toneClass = 'anger tone-word';
    } else if (primary_tone === 'sadness') {
      componentClass = 'sadness-bg daily-view';
      toneClass = 'sadness tone-word';
    } else if (primary_tone === 'tentative') {
      componentClass = 'tentative-bg daily-view';
      toneClass = 'tentative tone-word';
    } else if (primary_tone === 'fear') {
      componentClass = 'fear-bg daily-view';
      toneClass = 'fear tone-word';
    } else if (primary_tone === 'joy') {
      componentClass = 'joy-bg daily-view';
      toneClass = 'joy tone-word';
    } else if (primary_tone === 'confident') {
      componentClass = 'confident-bg daily-view';
      toneClass = 'confident tone-word';
    } else if (primary_tone === 'analytical') {
      componentClass = 'analytical-bg daily-view';
      toneClass = 'analytical tone-word';
    }

    const dateText = 'February 17, 2019';

    return (
      <div className={componentClass}>
        <Logo />
        <h2 className="daily-date">{dateText}</h2>
        <h1 className={toneClass}>{primary_tone}</h1>
        <div className="daily-entry">{journal_entry_text}</div>
        <div className="daily-affirmation">
          <p className="daily-affirmation-text">{affirm}</p>
        </div>
        <div className="btn-wrapper">
          <button className="standard-btn dark left-arrow">&#60;</button>
          <Link to="/calendarview">
            <button className="standard-btn dark back-to-calendar-btn">
              calendar
            </button>
          </Link>
          <button className="standard-btn dark right-arrow">&#62;</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  journal: state.journal
})

const mapDispatchToProps = dispatch => ({
  getJournalEntryByDate: (url) => dispatch(getJournalEntryByDate(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyView);
