import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  planetsData: [],
};

export const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    const fetchPlanetsApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      setPlanetsData(response.json());
    };

    fetchPlanetsApi();
  }, []);

  const value = { planetsData };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
