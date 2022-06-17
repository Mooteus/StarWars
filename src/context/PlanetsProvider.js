import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FetchPlanets from '../services/planetsApi';

const INITIAL_STATE = {
  planetsData: [],
  filteredPlanets: [],
  nameFilter: '',
};

export const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanetsApi = async () => {
      const planets = await FetchPlanets();
      setPlanetsData(planets);
    };

    fetchPlanetsApi();
  }, []);

  useEffect(() => {
    const filterByName = () => {
      const planets = planetsData.filter(
        ({ name }) => name.toLowerCase().includes(nameFilter),
      );
      setFilteredPlanets(planets);
    };
    filterByName();
  }, [nameFilter, planetsData]);

  const value = { filteredPlanets, setNameFilter };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
