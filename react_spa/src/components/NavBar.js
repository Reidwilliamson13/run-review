import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Run & Review App</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/runpage">
              The Run
            </NavLink>
            <NavLink className="nav-link" to="/reviewpage">
              Reviews
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
