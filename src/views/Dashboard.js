import React, { Component } from 'react';
import $ from 'jquery';

import {
  composeURL,
  responseReducer
} from '../utils/utilFunctions';

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isDelayed: false,
      timeDelayed: 0
    };
    this.onFlightSubmit = this.onFlightSubmit.bind(this);
  }

  onFlightSubmit (flightCode, browserHistory) {
    $.ajax({
      url: composeURL(flightCode),
      dataType: 'JSONP',
      jsonCallback: 'callback',
      type: 'GET'
    })
      .done((data) => {
        const { error, flightStatuses } = data;
        if (error || !flightStatuses.length) {
          browserHistory.push('error'); // error or no flights
        } else {
          // responseReducer() returns a copy of state to be used in setState
          this.setState(responseReducer(data), () => browserHistory.push('results'));
        }
      })
      .fail(() => {
        browserHistory.push('error');
      });
  }

  render () {
    return (
      <div style={style}>
        <img src={'../images/logo.png'} />

        {this.props.children && React.cloneElement(this.props.children, {
          onFlightSubmit: this.onFlightSubmit,
          isDelayed: this.state.isDelayed,
          timeDelayed: this.state.timeDelayed
        })}
      </div>
    );
  }
}

export default Dashboard;

const style = {
  textAlign: 'center'
};
