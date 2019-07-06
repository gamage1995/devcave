import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './ServiceCard.css'
import companyInfo from '../../assets/companyInfo.json'

export default class ServiceCard extends Component {
    render() {
        return (
            <div className = "SCcover">
                <Row>
                    <div className ="SCimgCover">
                        <img src = {require('../../assets/web.png')}/>
                    </div>
                </Row>
                <Row>
                    <div className = "SCtextCover">
                        <p className = "SChead">{companyInfo.Services[0].ServiceName}</p>
                    </div>
                </Row>
                <Row>
                    <div className = "SCtextCover">
                        <p className = "SCinfo">{companyInfo.Services[0].ServiceInfo}</p>
                    </div>
                </Row>
            </div>
        )
    }
}