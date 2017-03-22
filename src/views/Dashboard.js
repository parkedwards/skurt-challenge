import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import $ from 'jquery';

const APP_ID = '91b929e6';
const API_KEY = '2eebba75c50ce13c31b9ef0b331fb93a';
const URL = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/tracks/AA/100/dep/2017/3/22?appId=91b929e6&appKey=2eebba75c50ce13c31b9ef0b331fb93a&utc=false&includeFlightPlan=false&maxPositions=2';

const parseFlightCode = (flightCode) => {
  let airlineCode = '';
  let flightNum = '';

  for (let i = 0; i < flightCode.length; i++) {
    if (isNaN(flightCode[i])) airlineCode += flightCode[i];
    else flightNum += flightCode[i];
  }
  return `${airlineCode}/${flightNum}`;
};

const getURL = (flightCode, date) => {
  const parsedFlightCode = parseFlightCode(flightCode);
  return `https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/tracks/${parsedFlightCode}/dep/2017/3/22?appId=${APP_ID}&appKey=${API_KEY}&utc=false&includeFlightPlan=false&maxPositions=2`;
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDelayed: false,
      timeDelayed: 0,
      test: null
    };
    this.onFlightSubmit = this.onFlightSubmit.bind(this);
  }

  onFlightSubmit(flightCode) {
    $.ajax({
      url: getURL(flightCode),
      dataType: 'JSONP',
      jsonCallback: 'callback',
      type: 'GET',
      success: function (data) {
        console.log(data);
      }
    });

  }

  render() {
    return (
      <div>
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
