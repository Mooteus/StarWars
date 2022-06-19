import React from 'react';
import PropTypes from 'prop-types';

function FilterOption({ optionValue }) {
  return (
    <option value={ optionValue }>{optionValue}</option>
  );
}

FilterOption.propTypes = {
  optionValue: PropTypes.string.isRequired,
};

export default FilterOption;
