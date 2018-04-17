import React, { Component } from 'react';
import InfoTitleArea from "./InfoTitleArea";

class InfoCard_largest extends Component {
  constructor(props) {
    super(props);
    this.className = '';
    this.icons = [];
    this.height = '';
    this.size = '';
    this.chartType = ''
    this.photo = ''
  }

  componentWillMount(){
    this.handleCardType(this.props.type)
  }

  handleCardType = (type) => {
    switch (type) {
      case 'global-sales': 
        this.icons = ['info_outline'];
        this.height = '372px';
        this.size = '63px';
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

export default InfoCard_largest;
