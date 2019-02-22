import React from 'react';
import spinner from '../../assets/spinner.gif';
import './Spinner.css';

export const Spinner = ({ text }) => {
  return (
    <div className="spinner-wrapper">
      <img src={spinner} alt="Loading icon" className="spinner" />
      <h1>{text}</h1>
    </div>
  );
};
