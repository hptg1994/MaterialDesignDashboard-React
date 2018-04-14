import React, { Component } from 'react';
import InfoTitleArea from "./InfoTitleArea";

class InfoCard extends Component {
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
      case 'space':   
        this.icons = ["content_copy"];
        this.height = '128px';
        this.size = '86px'
        break;
      case 'github':
        this.icons = ['info_outline'];
        this.height = '128px';
        this.size = '86px'
        break;
      case 'revenue':
        this.icons = ['store'];
        this.height = '128px';
        this.size = '86px'
        break;
      case 'followers':
        this.icons = ["accessibility"];
        this.height = '128px';
        this.size = '86px'
        break;
      case 'global-sales': 
        this.icons = ['info_outline'];
        this.height = '372px';
        this.size = '63px';
        break;
      case 'analysis-completedtasks':
        this.chartType = 'dotline';
        this.height = '262px'; 
        break;
      case 'analysis-dailysales': 
        this.chartType = 'dotline';
        this.height = '262px';  
        break;
      case 'analysis-emailsubsciptions':
        this.chartType = 'barchart'
        this.height = '262px';
        break;
      case 'property-manager':
        this.photo = '#';
        this.height = '409px';      
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

export default InfoCard;
