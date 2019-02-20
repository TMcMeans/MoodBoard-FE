import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './Info.css';

class Info extends Component {
  render(){
    return(
      <div>
        <h1 className ="info-heading"> Welcome to MoodBoard. </h1>
        <p className = "info-paragraph"> MoodBoard is a daily journaling tool, record of personal reflections, and long-term reference for a user’s projected mood on any given day. </p>
      </div>

    );
  }
}




export default withRouter(Info);
