import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="header" bg="dark" expand="lg">
        <Navbar.Brand className="brand" href="#home">
          AI Sensei
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="link" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="/exercises">
              Exercises
            </Nav.Link>
            <Nav.Link className="link" href="/dashboard">
              Dashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
