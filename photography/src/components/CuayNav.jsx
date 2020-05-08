import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CuayNav = () => {
  return (
    <NavBar className="position-fixed" bg="transparent" expand="md">
      <NavBar.Toggle className="border-0" aria-controls="navbarMenu" />
      <NavBar.Collapse id="navbarMenu">
        <Nav className="mr-auto">
          <Nav.Link href="/#">
            Home
          </Nav.Link>
          <Nav.Link href="/#about">
            Sobre mí
          </Nav.Link>
          <Nav.Link href="/#projects">
            Proyectos
          </Nav.Link>
          <Nav.Link className="active" href="#">
            Fotografía
          </Nav.Link>
          <Nav.Link href="/#contact">
            Contacto
          </Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
};

export default CuayNav;
