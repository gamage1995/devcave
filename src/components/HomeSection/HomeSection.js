import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './HomeSection.css'
import NavBar from '../NavBar/NavBar'

export default class HomeSection extends Component {
    render() {
        return (
            // <Container>
            //     <Row>
            //     <Col>.col</Col>
            //     </Row>
            // </Container>
            <div className = "HScover">
                    <NavBar/>
                    <div className = "HStextCover">
                        <div>
                            <p className = "HStop">SIMPLIFIED</p>
                            <p className = "HSbottom">solutions<span className = "HSbottomDot">.</span></p>
                        </div> 
                    </div>
            </div>
        )
    }
}
