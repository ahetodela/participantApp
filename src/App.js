import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import orderBy from 'lodash/orderBy';

injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
    editIdx: -1
    
  };


   handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  

  render() {
    return (
      <MuiThemeProvider>
        <Container id="AppContainer">

        <Jumbotron fluid id ="jumbo">
          <Container fluid id="jumbotronContainer">
            <h3 id="jumboHeader">Nord Software</h3>
          </Container>
        </Jumbotron>
        
        <div className="App">
          <Row>
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]

              })}
          />
          </Row>
          <Row />

          <Row>

          <Table
            
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            

            data={this.state.data}
            header={[
              {
                name: "Full name",
                prop: "fullName"
              },
              
             
              {
                name: "E-mail Address",
                prop: "emailAddress"
              },

              {
                name: "Phone Number",
                prop: "phoneNumber"

              }

              

            ]}
          />
          </Row>
        </div>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
