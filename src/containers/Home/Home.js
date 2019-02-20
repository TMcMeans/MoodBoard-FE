import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Home.css';
import Logo from '../../components/Logo/Logo';

class Home extends Component {
  render() {
    const name = 'Ash';
    return (
      <div className="home">
        <Logo />
        <h1 className="welcome">Welcome, {name}!</h1>
        <h3 className="this-month">This month...</h3>
        <div className="bubbles" />
        <div className="home-btns-container">
          <Link to="/journal">
            <button className="standard-btn light home-btns">journal</button>
          </Link>
          <Link to="/calendarView">
            <button className="standard-btn light home-btns">calendar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
