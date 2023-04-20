import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Navhome extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">React-Numer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="RootOfEquation"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
              <NavDropdown.Item href="/False-Position">False-Position</NavDropdown.Item>
              <NavDropdown.Item href="/NewTon">NewTon-Raphson</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">fighting</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="LinarALgebraic"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Cramer">Cramer</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Final"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/LinearRe">LinearRegresstion</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
