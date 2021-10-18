import React from "react";
import { Container, Navbar, Form, FormControl, Button, Image } from "react-bootstrap";
import "./Navbar.css";
import Logo from "./clockLogo.png";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#" className="title">
          <Image className="me-2" src={Logo} width="45px" height="45px"></Image> Manageify
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
