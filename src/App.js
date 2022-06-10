import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PlanetsProvider } from './context/PlanetsProvider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </PlanetsProvider>
  );
}

export default App;
