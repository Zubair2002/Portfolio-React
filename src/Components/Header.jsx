import React from "react";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../Assets/Images/image-2.jpg";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" varient="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
