import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Spinner } from '../../components/Spinner/Spinner';
import Logo from '../../components/Logo/Logo';
import { getAffirmationsByMonth } from '../../thunks/getAffirmationsByMonth';

import './Affirmations.css';

export class Affirmations extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: []
    };
  }

  async componentDidMount() {
    const userID = 1;
    const affirmations = await this.props.getAffirmationsByMonth(
      `https://mood-board-be.herokuapp.com/api/v1/users/${userID}/affirmations?date=2019-02`
    );

    this.setState({
      affirmations: affirmations
    });
  }

  render() {
    const { isLoading } = this.props;
    const monthText = 'Febuary';
    const affirmations = this.state.affirmations.map((affirmation, i) => {
      return (
        <li className="single-affirmation" id={i}>
          <FaCircle className="circle" />
          <span className="affirmation-text">
            {affirmation.date}: {affirmation.affirmation_text}
          </span>
        </li>
      );
    });

    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <div className="month-affirmations">
          <Logo text="Loading your affirmations..." />
          <h1 className="month">{monthText} Affirmations</h1>
          <ul className="affirmation-list">{affirmations}</ul>
          <button className="standard-btn light back-to-calendar-btn">
            calendar
          </button>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  affirmations: state.affirmations,
  isLoading: state.isLoading
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
