import React from 'react';

const EntryForm = ({ onSubmit }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      onSubmit(input.value);
      input.value = '';
    }}>
      
      <input ref={(node) => {
        input = node;
      }} placeholder="Enter Flight Number" />
      <button type="submit">Find Flight Info</button>
      
    </form>
  );
};

export default EntryForm;
