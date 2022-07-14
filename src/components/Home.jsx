import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";



const Home = () => {
  return (
    <div className="bg-light">
      <BgDiv>
        <h1>Componentes de React</h1>
        <div className="container-lg">
          <div className="row">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>NavBar Responsive Animacion Hambuerguesa</Accordion.Header>
                <Accordion.Body>
                  Menu responsivo con un icono Hamburguesa. Esta hecho con styled components y tiene una animacion al precionar el menu.
                  <br />
                  <NavLink to='navbarStyledComponents'>NavBarResponsiveAnimacionHambuerguesa</NavLink>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Filtro de busqueda con bootstrap y axios</Accordion.Header>
                <Accordion.Body>
                  Filtro creeado con bootstrap y axios.
                  <br />
                  <NavLink to='filtroBusquedaAxios'>FIltor de busqueda</NavLink>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>filtro de busqueda con react-select</Accordion.Header>
                <Accordion.Body>
                  Filtro creeado con bootstrap, axios y react-select.
                  <br />
                  <NavLink to='reactSelectFiltro'>Filtor de busqueda</NavLink>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>SideBar con react</Accordion.Header>
                <Accordion.Body>
                  SideBar creado con sass
                  <br />
                  <NavLink to='sidebar'>Filtor de busqueda</NavLink>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </BgDiv>

    </div>
  )
}

export default Home;


const BgDiv = styled.div `
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    
`