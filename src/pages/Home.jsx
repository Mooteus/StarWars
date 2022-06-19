import React from 'react';
import Table from '../components/Table';
import SearchInput from '../components/SearchInput';
import FiltersInputs from '../components/FiltersInputs';

function Home() {
  return (
    <>
      <SearchInput />
      <FiltersInputs />
      <Table />
    </>
  );
}

export default Home;
