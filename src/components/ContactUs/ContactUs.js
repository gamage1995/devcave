import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "./ContactUs.css";

export default class ContactUs extends Component {
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
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="inputAddress"
                        placeholder="Message"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
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
                    <a className="socialMediaAnchor" href="#">
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
