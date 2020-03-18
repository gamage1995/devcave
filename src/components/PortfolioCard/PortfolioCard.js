import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import './PortfolioCard.css'
import companyInfo from '../../assets/companyInfo.json'

export default class PortfolioCard extends Component {
    render() {
        return (
            <div className = "PCcover">
                <Row className ="PClogoCoverRow">
                    <div className ="PClogoCover">
                        <img src = {require('../../assets/projects/medifetch/Logomakr_6cz6KI.png')} className ="PClogo"/>
                    </div>
                </Row>
                <Row className = "PCbodyRow">
                    <div className = "PCbody">
                        <img src = {require('../../assets/projects/medifetch/med_1.png')} className ="PCmainImg"/>
                    </div>
                </Row>
                <Row className = "PCtextCoverRow">
                    {/* <div className = "PCtextCover">
                        <p className = "PCinfo">{companyInfo.Services[0].ServiceInfo}</p>
                    </div> */}
                    <Col sm="12">
                        <Row className="PCbtmtop">
                            <p className = "PCProjectInfo">{companyInfo.Projects[0].Info}</p>
                        </Row>
                        <Row className="PCbtmbtm">
                            <p className = "PCaction">Case Study -></p>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
