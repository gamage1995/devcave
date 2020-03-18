import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PortfolioCard from '../PortfolioCard/PortfolioCard'

import './Portfolio.css';


export default class Portfolio extends Component {
    render() {
        return (
            <Row className = "POcover">
                <Col xs></Col>
                <Col xs="10">
                    <div>
                    <div className = "POTop">
                        <p className = "POheading">Our work,</p>
                    </div>
                    <div className = "POBottom"></div>
                            <Row>
                            <Col xs="12" sm ="12" md="6" lg ="6" xl="4">
                                <PortfolioCard/>
                            </Col>
                            <Col xs="12" sm ="12" md="6" lg ="6" xl="4">
                                <PortfolioCard/>
                            </Col>
                            <Col xs="12" sm ="12" md="6" lg ="6" xl="4">
                                <PortfolioCard/>
                            </Col>
                            </Row>
                </div>
                </Col>
                <Col xs></Col>
            </Row>
        )
    }
}
