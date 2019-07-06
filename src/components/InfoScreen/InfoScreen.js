import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './InfoScreen.css'
import companyInfo from '../../assets/companyInfo.json'

export default class InfoScreen extends Component {
    render() {
        return (
            <div className = "IScover">
                    <div className = "IStextCover">
                        <Row>
                         <Col xs md lg></Col>
                         <Col xs = "10" md = "10" lg = "9">
                            <div>
                                <p className = "IStop">{companyInfo.ISTop}<span className = "ISbottomDot">.</span></p>
                                <p className = "ISbottom">{companyInfo.ISBottom}<span className = "ISbottomDot">.</span></p>
                            </div> 
                         </Col>
                         <Col xs md lg></Col>
                        </Row>
                    </div>
            </div>
        )
    }
}
