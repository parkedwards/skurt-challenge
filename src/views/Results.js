import React from 'react';
import { Link } from 'react-router';
import { DELAY_THRESHOLD } from '../utils/utilFunctions';

const Results = ({ isDelayed, timeDelayed }) => {
  if (!isDelayed) {
    return (
      <div>
        <h3>You're chillin and on time!</h3>
        <p>Your flight will land within {DELAY_THRESHOLD} minutes of schedule</p>
        <Link to='/' className='btn btn-success'>
          {'< '}Check Another Flight
      </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Flight Delayed by <span style={lateStyle}>{timeDelayed} minutes!</span></h2>
      <Link to='/' className='btn btn-success'>
        {'< '}Check Another Flight
      </Link>
    </div>
  );
};

const lateStyle = {
  color: 'red',
  fontWeight: 'bold'
};

export default Results;
