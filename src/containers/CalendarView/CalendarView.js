import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Logo from '../../components/Logo/Logo';
import { getTonesByMonth } from '../../thunks/getTonesByMonth';
import './CalendarView.css';

export class CalendarView extends Component {
  constructor(props) {
    super();
    // this.state = {
    // will need this to make calendar dynamic
    //   date: new Date()
    // };
  }

  render() {
    const prevDays = ['28', '29', '30', '31'];
    const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
    const nextDays = ['1', '2', '3'];
    const prevDayBtns = prevDays.map((day) => {
      return (
        <button className="calendar-day-prev" key={day}>{day}</button>
      )
    });
    const dayBtns = days.map((day) => {
      const matchingDate = this.props.tones.find((tone) => tone.id === day);
      let className;

      if (matchingDate) {
        className = 'calendar-day ' + matchingDate.attributes.primary_tone;
      } else {
        className = 'calendar-day'
      }

      return (
        <Link to="/dailyview" key={day}>
          <button className={className}>{day}</button>
        </Link>
      )
    });
    const nextDayBtns = nextDays.map((day) => {
      return (
        <button className="calendar-day-next" key={day}>{day}</button>
      )
    });

    return (
      <div className="calendar">
        <Logo />
        <div className="calendar-container">
          <div className="calendar-nav-btns">
            <button className="nav-arrow">
              <FaAngleLeft />
            </button>
            <button className="nav-label">February 2019</button>
            <button className="nav-arrow">
              <FaAngleRight />
            </button>
          </div>
          <div className="month-container">
            {prevDayBtns}
            {dayBtns}
            {nextDayBtns}
          </div>
        </div>
        <Link to="/affirmations">
          <button className="standard-btn light affirmations-btn">
            your affirmations
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tones: state.tones
})

const mapDispatchToProps = dispatch => ({
  getTonesByMonth: url => dispatch(getTonesByMonth(url))
});

CalendarView.propTypes = {
  getTonesByMonth: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarView);
