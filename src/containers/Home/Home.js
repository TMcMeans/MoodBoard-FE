import React, { Component } from 'react';
import './Home.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

export default class Home extends Component {

  render() {
    const name = 'Ash'
    return (
      <div>
        <Logo />
        <h1 className="welcome">Welcome {name}!</h1>
        <h3 className="this-month">this month...</h3>
        <div className="bubbles"></div>
        <Button text="journal" />
        <Button text="calendar" />
      </div>
    )
  }
}
