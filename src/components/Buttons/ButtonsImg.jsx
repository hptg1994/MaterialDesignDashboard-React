import React, { Component } from 'react';

class ButtonsImg extends Component {
  constructor(props) {
    super(props);
    this.className = '';
    this.icon = '';
  }

  componentWillMount() {
    this.handletypeofButtons(this.props.type)
  }

  handletypeofButtons = (type) => {
    switch(type) {
      case 'toggleExpandSidebar': 
        this.className = 'toggleExpandSidebar-buttons'
        this.icon = "more_vert";
        break;
      case 'search':
        this.className = 'search-buttons'
        this.icon = "search"
      default:
        return;
        
    }
  }

  render() {
    return (
      <button className = {this.className + " buttonsImg"} onClick = {this.props.onClick}>
        <i className = 'material-icons'> {this.icon} </i>
      </button>
    );
  }
}

export default ButtonsImg;
