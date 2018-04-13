import React, { Component } from 'react';
import ChartGraph from '../../Charts/ChartGraph'

class InfoTitleArea extends Component {
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
      <div className = 'InfoTitlePhoto-container' style = {this.props.charttype? { marginLeft:'15px', marginRight:'15px' }:{ width:this.props.size, height:this.props.size } } >
          {this.props.icon && <i className = 'material-icons' style = {{ fontSize: this.iconsize }}>{this.props.icon}</i> }
          {this.props.charttype && <ChartGraph type = {this.props.charttype} />}  
      </div>
    );
  }
}

export default InfoTitleArea;
