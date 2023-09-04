import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "../asetss/Logo-house-deco.png";
import "./styles/Header.css";

function Header() {


  return (
    <Navbar expand="lg" className="bg-gris-medio">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo Cortinas House Deco"
            height="320"
            width="320"
            className="img-fluid mt-3 mx-5 logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end text-center"
        >
          <Nav className="ml-auto">
            <Nav.Link href="/" className="fs-4 px-3">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              className="fs-4 justify-content-end text-center mx-auto px-3"
            >
              <NavDropdown.Item href="/Cortina-Enrollable-Blackout">
                Cortina Enrollable Blackout
              </NavDropdown.Item>
              <NavDropdown.Item href="/Cortina-Sheer-Elegante">
                Cortina Sheer Elegance
              </NavDropdown.Item>
              <NavDropdown.Item href="/Panel-Japones">
                Panel Japonés
              </NavDropdown.Item>

              <NavDropdown.Item href="/Persianas-en-Madera-y-Aluminio">
                Persianas en Madera y Aluminio
              </NavDropdown.Item>
              <NavDropdown.Item href="/Peliculas-de-Control-Solar">
                Películas de Control Solar
              </NavDropdown.Item>
              <NavDropdown.Item href="/Toldos">Toldos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Nosotros" className="fs-4 px-3 ">
              Nosotros
            </Nav.Link>
            <Nav.Link href="/Contacto" className="fs-4 px-3">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
