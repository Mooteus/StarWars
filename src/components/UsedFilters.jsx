import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlanetsContext } from '../context/PlanetsProvider';

function UsedFilters({ column, comparison, value }) {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { columnFilterOptions, setColumnFilterOptions } = useContext(PlanetsContext);

  const deleteFilter = (columnReference) => {
    const newFilters = filters.filter((filter) => filter.column !== columnReference);
    setFilters(newFilters);
    setColumnFilterOptions([...columnFilterOptions, columnReference]);
  };
  return (
    <div data-testid="filter">
      <span>{`${column} ${comparison} ${value}`}</span>
      <button
        type="button"
        onClick={ () => deleteFilter(column) }
      >
        Delete
      </button>
    </div>
  );
}

UsedFilters.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default UsedFilters;
