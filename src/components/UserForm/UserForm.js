import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

import './UserForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name, email } = this.state;
    const { type } = this.props;
    let text;
    let switchText;
    let formBtn;

    if (type === 'login') {
      text = 'log in';
      switchText = 'First time at MoodBoard? Sign up ';
      formBtn = (
        <Link to="/signup" className="login-link">
          here
        </Link>
      )
    } else if (type === 'signup') {
      text = 'sign up';
      switchText = 'Already a user? Log in ';
      formBtn = (
        <Link to="/" className="login-link">
          here
        </Link>
      )
    }

    return (
      <div className="user-form">
        <Logo />
        <h1 className="form-title">{text}!</h1>
        <form action="" className="user-info">
          <input
            name="name"
            type="text"
            placeholder="name"
            className="user-input"
            value={name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="email"
            className="user-input"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="user-input"
          />
          <Link to="/home">
            <button className="standard-btn light form-btn">
              {text}
            </button>
          </Link>
        </form>
        <h2 className="form-msg">
          {switchText}
          {formBtn}
        .</h2>
        <Link to='/info'><button className="info-btn">i</button></Link>
      </div>
    );
  }
}

export default UserForm;
