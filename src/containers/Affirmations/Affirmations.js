import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';
import { getAffirmationsByMonth } from '../../thunks/getAffirmationsByMonth';

import './Affirmations.css';

export class Affirmations extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const userID = 1;
    const affirmations = await this.props.getAffirmationsByMonth(
      `https://mood-board-be.herokuapp.com/api/v1/users/${userID}/affirmations?date=2019-02`
    );
    console.log(affirmations);
  }

  render() {
    const monthText = 'Febuary';
    return (
      <div className="month-affirmations">
        <Logo />
        <h1 className="month">{monthText} Affirmations</h1>
        <ul className="affirmation-list">
          <li className="single-affirmation" id="1">
            <FaCircle className="circle" />
            <span className="affirmation-text">2/3: "You got this."</span>
          </li>
          <li className="single-affirmation" id="2">
            <FaCircle className="circle" />
            <span className="affirmation-text">2/4: "You are not alone."</span>
          </li>
          <li className="single-affirmation" id="3">
            <FaCircle className="circle" />
            <span className="affirmation-text">
              2/5: "You can pull through."
            </span>
          </li>
          <li className="single-affirmation" id="4">
            <FaCircle className="circle" />
            <span className="affirmation-text">2/6: "Practice self care."</span>
          </li>
        </ul>
        <button className="standard-btn light back-to-calendar-btn">
          calendar
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  affirmations: state.affirmations
});

export const mapDispatchToProps = dispatch => ({
  getAffirmationsByMonth: url => dispatch(getAffirmationsByMonth(url))
});

Affirmations.propTypes = {
  affirmations: PropTypes.array,
  getAffirmationsByMonth: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Affirmations);
