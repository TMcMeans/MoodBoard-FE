import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

export default class Home extends Component {

  render() {
    const name = 'Ash'
    return (
      <div className="home">
        <Logo />
        <h1 className="welcome">Welcome {name}!</h1>
        <h3 className="this-month">this month...</h3>
        <div className="bubbles"></div>
        <Link to="/journal"><Button text="journal" /></Link>
        <Link to="/calendarView"><Button text="calendar" /></Link>
      </div>
    )
  }
}
