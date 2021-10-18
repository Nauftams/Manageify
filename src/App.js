import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./component/navbar/NavbarComp";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SidebarComp from "./component/sidebar/SidebarComp";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
        <Container fluid>
          <Row>
            <Col md={4}>
              <div className="my-sidebar">
                <SidebarComp />
              </div>
            </Col>
            <Col md={8}>
              <div>
                <h1>Hello 2</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
