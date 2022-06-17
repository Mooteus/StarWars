import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';
import TableRow from './TableRow';

function Table() {
  const { filteredPlanets } = useContext(PlanetsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Perior</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>SurfaceWater</th>
          <th>Population</th>
          <th>Films</th>
          <th>Create</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <TableRow key={ planet.name } planetData={ planet } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
