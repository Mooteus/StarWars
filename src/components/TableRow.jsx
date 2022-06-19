import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planetData }) {
  const {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    climate,
    edited,
    url,
  } = planetData;

  return (
    <tr>
      <td>{name}</td>
      <td>{rotationPeriod}</td>
      <td>{orbitalPeriod}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{surfaceWater}</td>
      <td>{population}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
    </tr>
  );
}

TableRow.propTypes = {
  planetData: PropTypes.objectOf(Object).isRequired,
};

export default TableRow;
