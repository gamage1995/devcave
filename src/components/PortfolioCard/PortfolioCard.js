import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import './PortfolioCard.css'
export default class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      
    render() {
        return (
            <div className = "PCcover">
                <Row className ="PClogoCoverRow">
                    <div className ="PClogoCover">
                        <img src={require(`../../assets/projects/images/${this.props.Logo}.png`)} alt="logo" className ="PClogo"/>
                    </div>
                </Row>
                <Row className = "PCbodyRow">
                    <div className = "PCbody">
                        <img src={require(`../../assets/projects/images/${this.props.Image}.png`)} alt="img" className ="PCmainImg"/>
                    </div>
                </Row>
                <Row className = "PCtextCoverRow">
                    {/* <div className = "PCtextCover">
                        <p className = "PCinfo">{companyInfo.Services[0].ServiceInfo}</p>
                    </div> */}
                    <Col sm="12">
                        <Row className="PCbtmtop">
                            <p className = "PCProjectInfo">{this.props.Info}</p>
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
