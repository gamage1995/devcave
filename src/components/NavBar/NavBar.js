import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

import logo from '../../assets/logo.png'
import './NavBar.css'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className = "navCover">
          <NavbarBrand href="/">
              <img alt = "logo" className = "navLogo"  src = {logo}></img>
          </NavbarBrand>
          {/*<NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navLink_" href="/components/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink_" href="/components/">PORTFOLIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink_" href="/components/">TEAM</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink_" href="/components/">CONTACT</NavLink>
              </NavItem>
            </Nav>
    </Collapse>*/}
        </Navbar>
      </div>
    );
  }
}