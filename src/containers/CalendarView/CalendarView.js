import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import { getTonesByMonth } from '../../thunks/getTonesByMonth';
import './CalendarView.css';

export class CalendarView extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  onChange = date => {
    this.setState({ date });
  };

  componentDidMount = async () => {
    // get the date (mo, yr)
    console.log(this.state.date);
    // get the tones
    // set the tones to colors
    // assign colors to individual days (by the day's value)
  };

  render() {
    const prevDays = [28, 29, 30, 31];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    const nextDays = [1, 2, 3];
    const prevDayBtns = prevDays.map((day) => {
      return (
        <button className="calendar-day-prev">{day}</button>
      )
    });
    const dayBtns = days.map((day) => {
      return (
        <button className="calendar-day">{day}</button>
      )
    });
    const nextDayBtns = nextDays.map((day) => {
      return (
        <button className="calendar-day-next">{day}</button>
      )
    });
        // <Logo />
    return (
      <div className="calendar">
        <div className="calendar-container">
          <div className="calendar-nav-btns">
            <button className="nav-arrow">&#60;</button>
            <button className="nav-label">February 2019</button>
            <button className="nav-arrow">&#62;</button>
          </div>
          <div className="month-container">
            {prevDayBtns}
            {dayBtns}
            {nextDayBtns}
          </div>
        </div>
        <Calendar value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
        // <Link to="/affirmations">
        //   <button className="standard-btn light affirmations-btn">
        //     your affirmations
        //   </button>
        // </Link>
}

const mapDispatchToProps = dispatch => ({
  getTonesByMonth: url => dispatch(getTonesByMonth(url))
});

CalendarView.propTypes = {
  getTonesByMonth: PropTypes.func,
  date: PropTypes.string
};

export default connect(
  null,
  mapDispatchToProps
)(CalendarView);
