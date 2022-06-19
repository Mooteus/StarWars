import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FetchPlanets from '../services/planetsApi';

const INITIAL_STATE = {
  planetsData: [],
  filteredPlanets: [],
  nameFilter: '',
  filters: [],
  columnFilterOptions: [],
};

export const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState([]);
  const [columnFilterOptions, setColumnFilterOptions] = useState([]);

  useEffect(() => {
    const fetchPlanetsApi = async () => {
      const planets = await FetchPlanets();
      setPlanetsData(planets);
      setColumnFilterOptions([
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ]);
    };

    fetchPlanetsApi();
  }, []);

  useEffect(() => {
    const filterByName = () => {
      const planets = planetsData.filter(
        ({ name }) => name.toLowerCase().includes(nameFilter.toLowerCase()),
      );
      setFilteredPlanets(planets);
    };
    filterByName();
  }, [nameFilter, planetsData]);

  useEffect(() => {
    const filterTable = () => {
      let planets = planetsData;
      if (filters.length < 1) return setFilteredPlanets(planetsData);

      filters.forEach(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          planets = planets
            .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
          break;
        case 'menor que':
          planets = planets
            .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
          break;
        case 'igual a':
          planets = planets
            .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
          break;
        default:
          return false;
        }

        setFilteredPlanets(planets);
      });
    };

    filterTable();
  }, [filters]);

  const value = {
    filteredPlanets,
    setNameFilter,
    filters,
    setFilters,
    columnFilterOptions,
    setColumnFilterOptions };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
