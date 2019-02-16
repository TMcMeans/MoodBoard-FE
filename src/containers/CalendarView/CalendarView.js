import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button.js';

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

  render() {
    return (
      <div>
        <Calendar value={this.state.value} onChange={this.onChange} />
        <Link to="/affirmations"><Button text="View affirmations" /></Link>
      </div>
    );
  }
}

export default CalendarView;
