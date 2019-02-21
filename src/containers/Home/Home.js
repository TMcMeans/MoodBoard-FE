import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';
import { getTonesByMonth } from '../../thunks/getTonesByMonth';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  formatDate = () => {
    const { date } = this.state;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    if (month < 10) {
      month = '0' + month.toString();
    }

    return year.toString() + '-' + month;
  }

  componentDidMount = async () => {
    const urlDate = this.formatDate();
    const url = `https://mood-board-be.herokuapp.com/api/v1/users/1/tone_responses?date=${urlDate}`;
    await this.props.getTonesByMonth(url);
    // set the tones to colors
    
    // assign colors to individual days (by the day's value)
  }

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

const mapStateToProps = state => ({
  tones: state.tones
})

const mapDispatchToProps = dispatch => ({
  getTonesByMonth: (url) => dispatch(getTonesByMonth(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
