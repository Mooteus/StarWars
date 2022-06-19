import React, { useState, useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

function FiltersInputs() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const { setFilters, filters } = useContext(PlanetsContext);

  const submitFilter = () => {
    const newFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    setFilters([...filters, newFilter]);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
