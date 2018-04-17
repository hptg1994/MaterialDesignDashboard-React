import React, { Component } from 'react';
import InfoTitleArea from "./InfoTitleArea";

class InfoCard_GraphyAnalysis extends Component {
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

export default InfoCard_GraphyAnalysis;
