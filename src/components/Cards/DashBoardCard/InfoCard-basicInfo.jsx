import React, { Component } from 'react';
import InfoTitleArea from "./InfoTitleArea";

class InfoCard_basicInfo extends Component {
  constructor(props) {
    super(props);
    this.className = '';
    this.icons = [];
    this.height = '128px'
    this.size = '';
    this.chartType = ''
    this.photo = ''
  }

  componentWillMount(){
    this.handleCardType(this.props.type)
  }

  handleCardType = (type) => {
    switch (type) {
      case 'space':   
        this.icons = ["content_copy"];
        this.size = '86px'
        break;
      case 'github':
        this.icons = ['info_outline'];
        this.size = '86px'
        break;
      case 'revenue':
        this.icons = ['store']; 
        this.size = '86px'
        break;
      case 'followers':
        this.icons = ["accessibility"]; 
        this.size = '86px'
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className = 'InfoCard-container' style = {{ height: this.height }}>
        <div className = 'infoCard-TitlePhoto-Container'>
          <InfoTitleArea icon = {this.icons[0]} size = {this.size} chartType = {this.chartType} photo = {this.photo}/>
        </div>
        <div className = 'infoCard-main' style = {{ height: '71%' }}> 
        </div>
        <div className = 'info-footer' style = {{ height: '29%'}} >
        </div>
      </div>
    );
  }
}

export default InfoCard_basicInfo;
