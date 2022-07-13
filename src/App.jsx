import React from 'react'
import { Routes, Route } from "react-router-dom";
/* ----------------------- IMPORTACION DE COMPONENTES ----------------------- */
import Home from './components/Home';
import NavBarResponsive from './components/navBarResponsive/NavBarResponsive';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbarresponsive" element={<NavBarResponsive />} />

    </Routes>
  )
}

export default App