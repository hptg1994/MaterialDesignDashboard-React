import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavLink } from "reactstrap";
import { Link } from 'react-router-dom'

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

  NavItemTitle = (titleString) => {
    let TitleHead = '';
    if(titleString === undefined ||titleString.length === 0 ){
      return;
    }
    let titleArray = titleString.split(' ');
    titleArray.forEach((title) => {
      TitleHead += title[0];
    })
    return TitleHead;
  }
  
  render() {

    const navItem = this.props.navItems === undefined? <div/> : this.props.navItems.map((item) => {
      const Title = this.NavItemTitle(item);
      return(
        <NavItem key = {item} >
          <NavLink to={`/${item}`} className = 'sidebarcontent-detail' >
            {Title + ' ' +item}
          </NavLink>
        </NavItem>
      )
    });
  
    return (
       <div className = 'sidebarContent-container'  onClick={this.toggleNavbar} >
        <div className="sidebarContent-textarea">
          <Navbar color="faded">
            <div className = 'sidebar-title-icon-container'>
              <div className="materialicons-container" >
                <i className="material-icons">{this.props.icon}</i>
              </div>
              <NavbarBrand className="mr-auto sidebar-title-container ">{this.props.title}</NavbarBrand>
            </div>
            { this.props.navItems &&
              <div className = 'material-icons-arrowcontainer'>
                <i className="material-icons">arrow_drop_down</i>
              </div>
            }
              <Collapse isOpen={!this.state.collapsed}>
            <div className = 'sidebar-collapse-area'>
                <Nav>
                  { navItem }
                </Nav>
            </div>
              </Collapse>
          </Navbar>
        </div>
      </div>
    );
  } 
}

export default SidebarContent;
