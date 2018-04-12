import React, { Component } from 'react';

class InfoTitlePhoto extends Component {
  constructor(props) {
    super(props);
    this.iconsize = ''
  }

  componentWillMount() {
    this.handleIconSize(this.props.size);
  }

  handleIconSize = (size) => {
    switch (size) {
      case '86px':
        this.iconsize = '36px'
        break;
      case '63px':
        this.iconsize = '27px';
        break;
      default:
        break;
    }
  } 
  
  render() {
    return (
      <div className = 'InfoTitlePhoto-container' style = {{ width:this.props.size, height:this.props.size }}>
          <i className = 'material-icons' style = {{ fontSize: this.iconsize }}>{this.props.icon}</i>       
      </div>
    );
  }
}

export default InfoTitlePhoto;
