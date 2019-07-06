import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ServiceCard from '../ServiceCard/ServiceCard'
import './Services.css'
import companyInfo from '../../assets/companyInfo.json'

export default class Services extends Component {
    render() {
        return (
            <Row className = "SEcover">
                <Col xs></Col>
                <Col xs="10">
                    <div>
                    <div className = "SETop">
                        <p className = "SEheading">Stuff we are good at,</p>
                    </div>
                    <div className = "SEBottom"></div>
                            <Row>
                            <Col xs="12" sm ="6" lg = "4">
                                <ServiceCard/>
                            </Col>
                            <Col xs="12" sm ="6" lg = "4">
                                <ServiceCard/>
                            </Col>
                            <Col xs="12" sm ="6" lg = "4">
                                <ServiceCard/>
                            </Col>
                            <Col xs="12" sm ="6" lg = "4">
                                <ServiceCard/>
                            </Col>
                            <Col xs="12" sm ="6" lg = "4">
                                <ServiceCard/>
                            </Col>

                            </Row>
                </div>
                </Col>
                <Col xs></Col>
            </Row>
        )
    }
}