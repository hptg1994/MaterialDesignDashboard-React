import React, { Component } from 'react';
import ButtonsImg from '../Buttons/ButtonsImg'

class HeaderNavbar extends Component {
  render() {
    return (
      <div className = 'header-navbar-container'>
        <div className="header-leftside">
          <div className ='header-expandsidebar-container'>
            <ButtonsImg type = 'toggleExpandSidebar' />
          </div>
          <div className="header-title-container">
            <p>DashBoard</p>
          </div>
        </div>
        <div className='header-rightside'>
          <div className="header-userprofile">
            <i className = 'material-icons'>person</i>
          </div>
          <div className="header-alert-buttons">
            <i className = 'material-icons'>notifications</i>
          </div>
          <div className="headerDashboard-buttons-container">
            <i className = 'material-icons'>dashboard</i>
          </div>
          <div className = 'header-searching'>
            <div className = 'header-search-buttons-container'>
              <ButtonsImg type = 'search'/>
            </div>
            <input className = 'header-searching' type = 'search' placeholder = 'Search'/> 
          </div>
        </div>
      </div>
    );
  }
}


export default HeaderNavbar;

