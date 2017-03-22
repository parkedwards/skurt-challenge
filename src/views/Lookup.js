import React from 'react';
import EntryForm from './EntryForm';

const Lookup = ({ onFlightSubmit }) => {
  return (
    <div>
      <h1>This is the lookup view!</h1>
      <EntryForm onSubmit={onFlightSubmit} />
    </div>
  );
};

export default Lookup;
