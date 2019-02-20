import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

class Info extends Component {
  render(){
    return(
      <div>
        <h1> Welcome to MoodBoard. </h1>
      </div>

    );
  }
}




export default withRouter(Info);
