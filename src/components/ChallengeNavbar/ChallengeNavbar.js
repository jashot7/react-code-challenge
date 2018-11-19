import React, { Component } from "react";
import "./ChallengeNavbar.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import SearchBar from "../../components/SearchBar/SearchBar";

class ChallengeNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" className="fixed-top">
        <NavbarBrand href="/">Carousel</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink active href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="/">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
          <SearchBar />
        </Collapse>
      </Navbar>
    );
  }
}

export default ChallengeNavbar;
