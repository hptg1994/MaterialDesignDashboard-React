import React, { Component } from "react";
import InfoCard_basicInfo from "../../components/Cards/DashBoardCard/InfoCard-basicInfo";
import InfoCard_GraphyAnalysis from '../../components/Cards/DashBoardCard/InfoCard-Graphy'
import InfoCard_largest from '../../components/Cards/DashBoardCard/InfoCard-largest'
import InfoCard_photo from '../../components/Cards/DashBoardCard/InfoCard-photo'
import { Row, Col, Container } from "reactstrap";
import Footer from './Footer'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleRenderPage = () => {
    const page = null;
    return (
      <div className="dashboardpage-container">
        <div className="dashboard-firstrow">
          <div className="dashboard-infocard-area">
            <div className="dashboard-infocard-4-container">
              <InfoCard_basicInfo type="space" />
            </div>
            <div className="dashboard-infocard-4-container">
              <InfoCard_basicInfo type="github" />
            </div>
            <div className="dashboard-infocard-4-container">
              <InfoCard_basicInfo type="revenue" />
            </div>
            <div className="dashboard-infocard-4-container">
              <InfoCard_basicInfo type="followers" />
            </div>
          </div>
        </div>

        <div className="dashboard-secondrow">
          <div className = 'dashboard-globalsales-area'>
            <div className="dashboard-globalsales-container">
              <InfoCard_largest type = 'global-sales' />
            </div>
          </div>
        </div>

        <section className = 'dashboard-analysisdata-container'>
          <div className="dashboard-analysisdata-area">
            <div className = 'dashboard-infocard-3-container'>
              <InfoCard_GraphyAnalysis type = 'analysis-dailysales' />
            </div>
            <div className = 'dashboard-infocard-3-container'>
              <InfoCard_GraphyAnalysis type = 'analysis-emailsubsciptions' />
            </div>
            <div className = 'dashboard-infocard-3-container'>
              <InfoCard_GraphyAnalysis type = 'analysis-completedtasks' />
            </div>
          </div>
        </section>
      
        <section className = 'dashboard-third-container'>
          <div className="dahboard-third-area">
            <div className="dashboard-third-title"> 
              <h2>News</h2>
            </div>
            <div className="dashboard-infocard-3-container">
              <InfoCard_photo type = 'property-manager' />
            </div>
            <div className="dashboard-infocard-3-container">
              <InfoCard_photo type = 'property-manager' />
            </div>
            <div className="dashboard-infocard-3-container">
              <InfoCard_photo type = 'property-manager' />
            </div>
          </div>
        </section>
      </div>
    );
  };

  render() {
    const webUrl = this.handleRenderPage();
    return <div className="dashboard-container">{webUrl}</div>;
  }
}

export default Dashboard;
