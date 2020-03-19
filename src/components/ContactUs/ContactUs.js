import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "./ContactUs.css";

export default class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      email: "",
      name: "",
    };
  }

  handleClick = () => {
    var body = this.state.message;
    var subject = 'Message from : '+ this.state.name+' ('+this.state.email+')';
    window.open('mailto:devace.io@gmail.com?subject='+subject+'&body='+body,  "_blank");

  }

  handleMessageChange = (e) => {
    this.setState({message: e.target.value});
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <Row className="CUcover">
        <Col xs></Col>
        <Col xs="10">
          <div>
            <div className="CUTop">
              <p className="CUheading">
                Don't be a stranger<br></br>
                <span className="CUheading2">just say hello...</span>
              </p>
            </div>
            <Row>
              <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <div className="formDiv">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          onChange={this.handleNameChange}
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          onChange={this.handleEmailChange}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="inputAddress"
                        placeholder="Message"
                        onChange={this.handleMessageChange}
                      />
                    </div>
                    <button onClick={this.handleClick} type="submit" class="btn btn-primary">
                      Sign in
                    </button>
                  </form>
                </div>
              </Col>

              <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <div className="socialMediaDiv">
                  <div className="socialMediaRow">
                    <img
                      src={require("../../assets/email.png")}
                      alt="email"
                    ></img>
                    <span className="info">devcave.io@gmail.com</span>
                  </div>
                  <div className="socialMediaRow">
                    <img
                      src={require("../../assets/phone.png")}
                      alt="mobile"
                    ></img>
                    <span className="info">
                      +94 77 410 2800, +94 77 554 3531
                    </span>
                  </div>
                  {/*<div className="socialMediaRow">
                    <img
                      src={require("../../assets/location.png")}
                      alt="location"
                    ></img>
                  </div>*/}
                  <div className="socialMediaRow">
                    <a className="socialMediaAnchor" href="https://www.facebook.com/devCave.io">
                      <img
                        src={require("../../assets/facebook.png")}
                        alt="facebook"
                      ></img>
                    </a>
                    <a className="socialMediaAnchor" href="https://www.linkedin.com/company/devcave">
                      <img
                        src={require("../../assets/linkedin.png")}
                        alt="linkedin"
                      ></img>
                    </a>
                    <a className="socialMediaAnchor" href="#">
                      <img
                        src={require("../../assets/youtube.png")}
                        alt="youtube"
                      ></img>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs></Col>
      </Row>
    );
  }
}
