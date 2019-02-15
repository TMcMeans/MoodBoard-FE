import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

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
        <Button text="View affirmations" />
      </div>
    );
  }
}

export default CalendarView;
