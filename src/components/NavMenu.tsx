import React, { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Logo from 'static/img/LogoFullBlack.png';

const NavMenu: FC = () => {
  return (
    <Navbar bg="transparent" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            className="d-inline-block align-top"
            src={Logo}
            alt="LeCuay Logo"
            width="50"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="littleGardenMenu" />
        <Navbar.Collapse
          className="justify-content-center"
          id="littleGardenMenu"
        >
          <Nav activeKey="/">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Desarrollador" id="developerDropdown">
              <NavDropdown.Item disabled={true} href="/developer/projects">
                Proyectos
              </NavDropdown.Item>
              <NavDropdown.Item disabled={true} href="/developer/career">
                Trayectoria
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fotógrafo" id="photographerDropdown">
              <NavDropdown.Item disabled={true} href="/photographer/gallery">
                Galería
              </NavDropdown.Item>
              <NavDropdown.Item disabled={true} href="/photographer/series">
                Series
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#about">Sobre mí</Nav.Link>
            <Nav.Link href="/#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
