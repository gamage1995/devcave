import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import './Services.css'
import companyInfo from '../../assets/companyInfo.json'
export default class Services extends Component {

    state = [
        { data : companyInfo.Services[0] , image: require('../../assets/web.png')},
        { data : companyInfo.Services[1] , image: require('../../assets/mobile.png')},
        { data : companyInfo.Services[2] , image: require('../../assets/SEO.png')},
        { data : companyInfo.Services[3] , image: require('../../assets/graphic.png')},
    ]


    render() {
        const service = this.state.map((s) =>
            <Col xs="12" sm ="6" lg = "4">
                <div className = "SCcover">
                    <Row>
                        <div className ="SCimgCover">
                            <img src = {s.image} alt="image"/>
                        </div>
                    </Row>
                    <Row>
                        <div className = "SCtextCover">
                            <p className = "SChead">{s.data.ServiceName}</p>
                        </div>
                    </Row>
                    <Row>
                        <div className = "SCtextCover">
                            <p className = "SCinfo">{s.data.ServiceInfo}</p>
                        </div>
                    </Row>
                </div>
            </Col>
        );
        return (
            <Row className = "SEcover noMarginR">
                <Col xs></Col>
                <Col xs="10">
                    <div>
                    <div className = "SETop">
                        <p className = "SEheading">Stuff we are good at,</p>
                    </div>
                    <div className = "SEBottom"></div>
                        <Row>
                        {service}
                        </Row>
                    </div>
                </Col>
                <Col xs></Col>
            </Row>
        )
    }
}