import moment from 'moment';
import { APP_ID, API_KEY } from './config';

// Delay threshold in minutes
// adjust to change the flagging logic
export const DELAY_THRESHOLD = 10;


// Helper function to parse the user's inputted flight code
// Accounts for both 2- and 3- letter airline codes
const parseFlightCode = (flightCode) => {
  let airlineCode = '';
  let flightNum = '';

  for (let i = 0; i < flightCode.length; i++) {
    if (isNaN(flightCode[i])) airlineCode += flightCode[i];
    else flightNum += flightCode[i];
  }
  return `${airlineCode}/${flightNum}`;
};


// Composes fetch URL based on user's input + current date
// Uses APP_ID + API_KEY from config object as credentials
export const composeURL = (flightCode) => {
  const parsedFlightCode = parseFlightCode(flightCode);
  const currDate = moment().format('YYYY/M/D');
  return `https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/${parsedFlightCode}/arr/${currDate}?appId=${APP_ID}&appKey=${API_KEY}&utc=false`;
};


// Helper function to parse the API response object
// Returns the difference in time (scheduled - estimated) IN MINUTES
const parseResponse = (obj) => {
  const { flightStatuses } = obj;
  const len = flightStatuses.length;
  const lastFlight = flightStatuses[len - 1];

  const {
    estimatedGateArrival,
    scheduledGateArrival } = lastFlight.operationalTimes;

  const scheduled = new Date(scheduledGateArrival.dateLocal); // scheduled time
  const estimated = new Date(estimatedGateArrival.dateLocal); // estimated time
  const diffMs = (scheduled - estimated); // diff in miliseconds
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

  return diffMins;
};

// Exported helper function that processes the time difference
// And returns a new version of the app state
export const responseReducer = (responseObj, newState = {
  isDelayed: false,
  timeDelayed: 0
}) => {
  let diffMins = parseResponse(responseObj);

  if (diffMins > DELAY_THRESHOLD) {
    return {
      isDelayed: true,
      timeDelayed: diffMins
    };
  }

  return {
    isDelayed: false,
    timeDelayed: diffMins
  };
};
