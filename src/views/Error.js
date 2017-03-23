import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div>
      <h3>Invalid Input.  Please Try Again</h3>
      <Link to='/' className='btn btn-danger'>
        {'< '}Check Another Flight
      </Link>
    </div>
  );
};

export default Error;