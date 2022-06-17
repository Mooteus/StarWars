import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

function SearchInput() {
  const { setNameFilter } = useContext(PlanetsContext);

  const onHandleChange = ({ target }) => {
    const { value } = target;
    setNameFilter(value);
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ onHandleChange }
    />
  );
}

export default SearchInput;
