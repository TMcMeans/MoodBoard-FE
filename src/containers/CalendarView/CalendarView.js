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
    return (
      <div className="calendar">
        <Logo />
        <Calendar value={this.state.value} onChange={this.onChange} />
        <Link to="/affirmations">
          <button className="standard-btn light affirmations-btn">
            your affirmations
          </button>
        </Link>
      </div>
    );
  }
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
