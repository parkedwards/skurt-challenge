import React from 'react';
import EntryForm from './EntryForm';

const Lookup = ({ onFlightSubmit }) => {
  return (
    <div style={style}>
      <h2>Search your Flight</h2>
      <EntryForm onSubmit={onFlightSubmit} />
    </div>
  );
};

export default Lookup;

const style = {
  margin: '0 auto',
  width: '50%'
};
