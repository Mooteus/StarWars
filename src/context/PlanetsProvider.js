import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FetchPlanets from '../services/planetsApi';

const INITIAL_STATE = {
  planetsData: [],
  filteredPlanets: [],
  nameFilter: '',
  filters: [],
};

export const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchPlanetsApi = async () => {
      const planets = await FetchPlanets();
      console.log(planets);
      setPlanetsData(planets);
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
      console.log(filters);
      filters.map(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          return setFilteredPlanets(filteredPlanets
            .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10)));
        case 'menor que':
          return setFilteredPlanets(filteredPlanets
            .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10)));
        case 'igual a':
          return setFilteredPlanets(filteredPlanets
            .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10)));
        default:
          return comparison;
        }
      });
    };

    filterTable();
  }, [filters]);

  const value = { filteredPlanets, setNameFilter, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
