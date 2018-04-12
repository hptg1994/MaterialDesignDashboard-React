import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  
  render() {
    return (
      <div className="user-profile-container">
        <Navbar color="faded">
          <div className="user-info-container" onClick={this.toggleNavbar}>
            <div className="user-profile-image">
              <img src="#" />
            </div>
            <div className="user-profile-name">
              <p> User Name </p>
            </div>
          </div>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href={`/user/details`}>
                  <p>My Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/user/edit`}>
                  <p>Edit Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/user/settings`}>
                  <p>Setting</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default UserProfile;
