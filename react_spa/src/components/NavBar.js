import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import RunPage from "./RunPage";
import ReviewPage from "./ReviewPage";


function NavBar() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Run & Review App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/runpage">
                The Run
              </Nav.Link>
              <Nav.Link as={Link} to="/reviewpage">
                Reviews
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/runpage" element={<RunPage />} />
            <Route path="/reviewpage" element={<ReviewPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
