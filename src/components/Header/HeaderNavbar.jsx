import React, { Component } from "react";
import ButtonsImg from "../Buttons/ButtonsImg";

class HeaderNavbar extends Component {
  render() {
    return (
      <header className="header-navbar">
        <div className="header-navbar-container">
          <div className="header-expandsidebar-container">
            <ButtonsImg type="toggleExpandSidebar" />
          </div>

          <div className="header-title-container">
            <p>DashBoard</p>
          </div>
          <div className="header-rightpart">
            <div className="header-searching-container">
              <div className="header-searching">
                <input className="header-searching" type="search" placeholder="Search" />
              </div>
            </div>
            <div className="header-search-buttons-container">
              <ButtonsImg type="search" />
            </div>
            <div className="header-iconbuttons">
              <i className="material-icons">dashboard</i>
            </div>
            
            <div className="header-iconbuttons">
              <i className="material-icons">notifications</i>
            </div>

            <div className="header-iconbuttons">
              <i className="material-icons">person</i>
            </div>
            
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderNavbar;
