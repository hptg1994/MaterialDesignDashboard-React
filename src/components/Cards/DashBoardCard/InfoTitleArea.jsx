import React, { Component } from 'react';
import ChartGraph from '../../Charts/ChartGraph'

class InfoTitleArea extends Component {
  constructor(props) {
    super(props);
    this.iconsize = ''
    this.titleheight = {
      chartType : '160px',
      photo: '268px'
    }
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
    const style = () => {
      if(this.props.chartType){
        return { height: '160px', width:'100%' }
      } else if(this.props.photo) {
        return { height: '268px', width:'100%' }
      } else {
        return { width:this.props.size, height:this.props.size }
      }
    }

    return (
      <div className = 'InfoTitlePhoto-container' style = {style()} >
          {this.props.icon && <i className = 'material-icons' style = {{ fontSize: this.iconsize }}>{this.props.icon}</i> }
          {this.props.charttype && <ChartGraph type = {this.props.chartType} />}  
          {this.props.photo && <img src = {this.props.photo}/> }
      </div>
    );
  }
}

export default InfoTitleArea;
