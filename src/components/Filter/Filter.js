import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange, onClick }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
      <button type="button" onClick={onClick}>
        Clear
      </button>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
