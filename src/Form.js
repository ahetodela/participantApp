import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Button, Jumbotron, Col, Row, Container } from 'reactstrap';

export default class Form extends React.Component {
  state = {
    fullName: "",
    fullNameError: "",
    
    emailAddress: "",
    emailAddressError: "",

    phoneNumber: "",
    phoneNumberError: "",

    trashCan: <span className="glyphicon glyphicon-trash" />,
    editIcon: <span className="glyphicon glyphicon-edit" />,
    
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      fullNameError: "",
      emailAddressError: "",
      phoneNumberError: ""
    };

    

    if (this.state.emailAddress.indexOf("@") === -1) {
      isError = true;
      alert("Please Enter a valid email address");
    }

    if(this.state.fullName.length ===0){
      isError =true;
      alert("Please Enter a name");
    }

    if(this.state.phoneNumber.length ===0){
      isError =true;
      alert("Please Enter A phone number");
    }

    if(this.state.phoneNumber.value==="" && this.state.fullName.value==="" && this.state.emailAddress.value===""){
      isError=true;
      alert("The fields cannot be empty");
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        fullName: "",
        fullNameError: "",
       
        emailAddress: "",
        emailAddressError: "",

        phoneNumber: "",
        phoneNumberError: ""
      });
    }
  };

  render() {
    return (

      <Container id="mainContainer"> 
        <Row>
          <Col sm="4"><h2>List of participants</h2></Col>
          
        </Row>

        <div id="formDetails">
            
            <form className="form-horizontal">

              
                <div id="formElements">
                  <h2></h2>      
                  <Row>
                      <Col xs="6" sm="3"><input type="text" placeholder="Full Name" name="fullName" id="fullName" value ={this.state.fullName} errorText={this.state.fullNameError} 
                          onChange={e => this.change(e)}
                      /></Col>
                      <Col xs="6" sm="3"><input type="email" placeholder="E-mail Address" name="emailAddress" id="emailAddress" value ={this.state.emailAddress} errorText={this.state.emailAddressError} 
                                  onChange={e => this.change(e)}
                              /></Col>
                      <Col sm="3"><input type="number" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" value ={this.state.phoneNumber} errorText={this.state.phoneNumberError} 
                                  onChange={e => this.change(e)}
                              /></Col>
                      <Col sm="3"><Button id="AddNew"onClick={e => this.onSubmit(e)} >Add new</Button>
                                </Col>


                  </Row>
                  <Row>
                    <label id= "trashCan" name="trashCan"  onChange={e => this.change(e)} 
                    value={this.state.trashCan}><span className="glyphicon glyphicon-trash"></span></label>

                    <label id= "editIcon" name="editIcon" onChange={e => this.change(e)} 
                    value={this.state.editIcon} ><span className="glyphicon glyphicon-edit"></span></label>
                  

                  </Row>

                  </div>
       
       
            </form>
        </div>
             

      </Container>
    );
  }
}
