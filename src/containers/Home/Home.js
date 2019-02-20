import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/journal">
          <button>journal</button>
        </Link>
        <Link to="/calendarView">
          <button>calendar</button>
        </Link>
      </div>
    );
  }
}

export default Home;
