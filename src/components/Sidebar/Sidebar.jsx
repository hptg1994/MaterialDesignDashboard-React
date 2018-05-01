import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import SidebarContent from "../Buttons/SidebarContent";
import UserProfile from '../SidebarItems/UserProfile';
import HeaderNavbar from '../Header/HeaderNavbar';

class Sidebar extends Component {
  render() {
    return (
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
          <NavLink to={`/dashboard`} className = 'sidebarcontent-detail' activeClassName="selected">
            <SidebarContent icon="dashboard" title="Dashboard" />
          </NavLink>
          <SidebarContent icon="insert_photo" title="Pages" navItems={["Timeline Page", "User Profile", "Login Page", 'Lock Screen Page']}/>
          <SidebarContent icon="insert_photo" title="Components" navItems={["Buttons", "Grid System", "Panels", 'Sweet Alert']}/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
