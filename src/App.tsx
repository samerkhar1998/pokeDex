import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/homePage/Home';
import Details from './pages/pokemonDetails/PokemonDetails';

function App() {
  return (
      <BrowserRouter> 
        <Routes>
          <Route index element={<Home />} />  
          <Route path="/details/:pokemonName" element={<Details />} />
        </Routes>  
      </BrowserRouter>
  );
}

export default App;
