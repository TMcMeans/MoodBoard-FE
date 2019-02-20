import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import { getTonesByMonth } from '../../thunks/getTonesByMonth';
import './CalendarView.css';

class CalendarView extends Component {
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
    console.log(this.state.date)
    // get the tones
    // set the tones to colors
    // assign colors to individual days (by the day's value)
  }

  render() {
    return (
      <div className="calendar">
        <Logo />
        <Calendar value={this.state.value} onChange={this.onChange} />
        <Link to="/affirmations">
          <Button text="your affirmations" />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTonesByMonth: (url) => dispatch(getTonesByMonth(url))
})

export default connect(null, mapDispatchToProps)(CalendarView);

///api/v1/users/1/tone_responses?date=YYYY-MM
