import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      setPlanetsData(results);
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
