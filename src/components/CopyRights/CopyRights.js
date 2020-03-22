import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './CopyRights.css'

export default class CopyRights extends Component {

    render() {
        return (
            <Row className="SFooter">
                <p>© 2020 DevCave.io. Handcrafted with Love.</p>
            </Row>
        )
    }
}