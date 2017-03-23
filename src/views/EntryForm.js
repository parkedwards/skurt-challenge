import React from 'react';
import { browserHistory } from 'react-router';

const EntryForm = ({ onSubmit }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      onSubmit(input.value, browserHistory);
      input.value = '';
    }}>
      
      <div className='form-group'>
        <input
          ref={(node) => { input = node; }}
          placeholder='Enter Flight Number'
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <button type='submit' className='btn btn-warning'>Find Flight Info</button>
      </div>
      
    </form>
  );
};

export default EntryForm;
