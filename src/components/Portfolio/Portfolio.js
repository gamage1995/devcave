/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import { Projects } from '../../assets/projects';

import './Portfolio.css';

import "./Portfolio.css";

export default class Portfolio extends Component {
    render() {
        return (
            <Row className="POcover">
                <Col xs></Col>
                <Col xs="10">
                    <div>
                        <div className="POTop">
                            <p className="POheading">Our work,</p>
                        </div>
                        <div className="POBottom"></div>
                        <Row>
                            {Projects.map(item => {
                                return (
                                    <Col xs="12" sm="12" md="6" lg="6" xl="4">
                                        <PortfolioCard
                                            {...item}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
                <Col xs></Col>
            </Row>
    );
  }
}
