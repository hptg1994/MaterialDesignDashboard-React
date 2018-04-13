import React, { Component } from 'react';
import InfoTitleArea from "./InfoTitleArea";

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.className = '';
    this.icons = [];
    this.height = '';
    this.size = '';
    this.
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
      case 'analysis-dailysales':
      case 'analysis-emailsubsciptions':
      case 'analysis-completedtasks':
        this.height = '262px';
        this.marginLR = '15px';
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
          <InfoTitleArea icon = {this.icons[0]} size = {this.size} chartType = ''/>
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
