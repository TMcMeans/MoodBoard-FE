import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';

import './UserForm.css';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    };
  }

  render() {
    const { name, email } = this.state;
    const text = 'sign up';

    return (
      <div className="user-form">
        <Logo />
        <h1 className="form-title">{text}!</h1>
        <form action="" className="user-info">
          <input
            type="text"
            placeholder="name"
            className="user-input"
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="email"
            className="user-input"
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="password"
            className="user-input"
          />
          <button className="standard-btn light form-btn">{text}</button>
        </form>
        <h2>
          Already a user? Log in{' '}
          <Link to="/" className="login-link">
            here
          </Link>
          .
        </h2>
        <button className="info-btn">i</button>
      </div>
    );
  }
}

export default UserForm;
