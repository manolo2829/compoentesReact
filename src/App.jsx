import React from 'react'
import { Routes, Route } from "react-router-dom";
import FiltroBusqueda from './components/FiltroBusqueda/FiltroBusqueda';
/* ----------------------- IMPORTACION DE COMPONENTES ----------------------- */
import Home from './components/Home';
import NavBarResponsive from './components/navBarResponsive/NavBarResponsive';
import ReactSelectFiltro from './components/ReactSelect/ReactSelectFiltro';
import SideBarContainer from './components/sideBar/SideBarContainer';

const App = () => {
  return (

    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbarStyledComponents" element={<NavBarResponsive />} />
          <Route path="/filtroBusquedaAxios" element={<FiltroBusqueda />} />
          <Route path="/reactSelectFiltro" element={<ReactSelectFiltro />} />
          <Route path="/sidebar" element={<SideBarContainer />} />
          <Route path="/sidebar/contenido" element={<SideBarContainer />} />
          <Route path="/sidebar/panel" element={<SideBarContainer />} />
          <Route path="/sidebar/listas" element={<SideBarContainer />} />
          <Route path="/sidebar/estadisticas" element={<SideBarContainer />} />
          <Route path="/sidebar/comentarios" element={<SideBarContainer />} />

      </Routes>
    </div>
  )
}

export default App