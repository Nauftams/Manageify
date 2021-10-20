import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./component/navbar/NavbarComp";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SidebarComp from "./component/sidebar/SidebarComp";
import Formulir from "./component/form/Formulir";
import Tabel from "./component/tabel/Tabel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [],
      task: "",
      target: "",
      no: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.no === "") {
      this.setState({
        total: [
          ...this.state.total,
          {
            no: this.state.no + 1,
            task: this.state.task,
            target: this.state.target,
          },
        ],
      });
    } else {
      const exceptChoosenData = this.state.total
        .filter((totals) => totals.no !== this.state.no)
        .map((filterData) => {
          return filterData;
        });

      this.setState({
        total: [
          ...exceptChoosenData,
          {
            no: this.state.no + 1,
            task: this.state.task,
            target: this.state.target,
          },
        ],
      });
    }
    this.setState({
      no: 0,
      task: "",
      target: "",
    });
  };

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
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <Tabel total={this.state.total} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
