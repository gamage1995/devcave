import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Team.css";
import companyInfo from "../../assets/companyInfo.json";
export default class Team extends Component {
  state = [
    { data: companyInfo.Team[0], image: require('../../assets/Team/Chameera.png')},
    { data: companyInfo.Team[1], image: require('../../assets/Team/Charuka.png')},
    { data: companyInfo.Team[2], image: require('../../assets/Team/Donishka.png')},
    { data: companyInfo.Team[3], image: require('../../assets/Team/Nirmal.png')},
    { data: companyInfo.Team[4], image: require('../../assets/Team/Charith.png')},
    { data: companyInfo.Team[5], image: require('../../assets/Team/Janith.png')},

  ];

  render() {
    const service = this.state.map(s => (
      <Col xs="12" sm="6" lg="4">
        <div class="team-member">
          <div class="team-img">
            <img
              src={s.image}
              alt="team member"
              class="img-responsive"
            />
          </div>
          <div class="team-hover">
            <div class="desk">
              <h4>Hi There !</h4>
              <p class="description">{s.data.Description}</p>
            </div>
            <div class="s-link">
              <a href="#"></a>
              <a href={s.data.LinkedIn} target="_blank">
                <img
                  src={require("../../assets/linkedin.png")}
                  alt="team member"
                />
              </a>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="team-title">
          <h5>{s.data.Name}</h5>
    {/*<span>{s.data.Title}</span>*/}
        </div>
      </Col>
    ));
    return (
      <Row className="SEcover noMarginR">
        <Col xs></Col>
        <Col xs="10">
          <div>
            <div className="SETop">
              <p className="SEheading">Meet Our Team,</p>
            </div>
            <div className="SEBottom"></div>
            <Row>{service}</Row>
          </div>
        </Col>
        <Col xs></Col>
      </Row>
    );
  }
}
