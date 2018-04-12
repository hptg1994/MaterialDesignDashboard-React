import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class SidebarContent extends Component {  
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

  NavItemTitle = (title) => {
    let titleHeader1 = '' 
    let titleHeader2 = '';
    const titleArray = title.spilt(' ');
    titleHeader1 = titleArray[0][0];
    titleHeader2 = titleArray[1][0];    
  }
  
  render() {

    const navItem = this.props.navItems === undefined? <div/> : this.props.navItems.map((item) => (
      <NavItem key = {item} >
        <NavLink href={`/${item}`} className = 'sidebarcontent-detail' >
          {item}
        </NavLink>
      </NavItem>
    ));
  
    return (
       <div className = 'sidebarContent-container'  onClick={this.toggleNavbar} >
        <Navbar color="faded">
          <div className = 'sidebar-title-icon-container'>
            <div className="materialicons-container" >
              <i className="material-icons">{this.props.icon}</i>
            </div>
            <NavbarBrand className="mr-auto sidebar-title-container ">{this.props.title}</NavbarBrand>
            </div>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              { navItem }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  } 
}

export default SidebarContent;
