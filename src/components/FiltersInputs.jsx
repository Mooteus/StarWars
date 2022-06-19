import React, { useState, useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

import FilterOption from './FilterOption';

function FiltersInputs() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const {
    setFilters,
    filters,
    columnFilterOptions,
    setColumnFilterOptions,
  } = useContext(PlanetsContext);

  const removeUsedFilter = async () => {
    const removeFilter = columnFilterOptions
      .filter((option) => option !== columnFilter);
    setColumnFilterOptions(removeFilter);
    setColumnFilter(removeFilter[0]);
  };

  const submitFilter = () => {
    const newFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    setFilters([...filters, newFilter]);
    removeUsedFilter();
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column-filter"
        value={ columnFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        { columnFilterOptions.map((option) => (
          <FilterOption key={ option } optionValue={ option } />
        )) }
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ ({ target }) => setValueFilter(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ submitFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FiltersInputs;
