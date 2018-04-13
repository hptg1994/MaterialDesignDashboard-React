import React, { Component } from "react";
import SidebarContent from "../Buttons/SidebarContent";
import UserProfile from '../SidebarItems/UserProfile';
import HeaderNavbar from '../Header/HeaderNavbar';
import Dashboard from '../Dashboard/Dashboard';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class MainWebFrame extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="WebPage-title-icon-container">
            <div className="MainLogo">
              {/* <img src="https://timcreative.github.io/material-dashboard-pro-react/static/media/logo-white.eec7c7f6.svg" alt="logo" /> */}
              <img src="#" alt="logo" />
            </div>
            <div className="MainTitle-container">
              <p>Material Dashboard</p>
            </div>
          </div>
          <UserProfile />
          <div className="sidebarcontent-container">
            <SidebarContent icon="dashboard" title="Dashboard" />
            <SidebarContent icon="insert_photo" title="Pages" navItems={["Timeline Page", "User Profile", "Login Page", 'Lock Screen Page']}/>
          </div>
        </div>
        <div className = 'main-area'>
          <HeaderNavbar />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default MainWebFrame;