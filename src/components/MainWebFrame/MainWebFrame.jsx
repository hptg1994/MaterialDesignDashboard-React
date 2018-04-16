import React, { Component } from "react";
import HeaderNavbar from '../Header/HeaderNavbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Dashboard/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class MainWebFrame extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className = 'main-area'>
          <HeaderNavbar />
          <Dashboard />
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainWebFrame;
