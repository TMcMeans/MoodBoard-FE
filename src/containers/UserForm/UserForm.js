import React, { Component } from 'react';

import Button from '../../components/Button/Button';
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
    const text = 'sign up'

    return (
      <div className="user-form">
        <Logo />
        <h1>{text}</h1>
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
          <Button text={text} />
        </form>
        <div className="user-login">
          <h2>Already a user?</h2>
          <Button text="i" />
        </div>
      </div>
    );
  }
}

export default UserForm;
