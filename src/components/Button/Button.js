import React from 'react';
import './Button.css';

export const Button = props => {
  const { text } = props;
  return <button className="standard-btn">{text}</button>;
};

export default Button;
