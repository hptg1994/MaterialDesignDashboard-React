import React, { Component } from "react";
import InfoCard from "../../components/Cards/DashBoardCard/InfoCard";
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
              <InfoCard type="space" />
            </div>
            <div className="dashboard-infocard-4-container">
              <InfoCard type="github" />
            </div>
            <div className="dashboard-infocard-4-container">
              <InfoCard type="revenue" />
            </div>
            <div className="dashboard-infocard-4-container">
              <InfoCard type="followers" />
            </div>
          </div>
        </div>

        <div className="dashboard-secondrow">
          <div className = 'dashboard-globalsales-area'>
            <div className="dashboard-globalsales-container">
              <InfoCard type = 'global-sales' />
            </div>
          </div>
        </div>

        <section className = 'dashboard-analysisdata-container'>
          <div className="dashboard-analysisdata-area">
            <div className = 'dashboard-infocard-3-container'>
              <InfoCard type = 'analysis-dailysales' />
            </div>
            <div className = 'dashboard-infocard-3-container'>
              <InfoCard type = 'analysis-emailsubsciptions' />
            </div>
            <div className = 'dashboard-infocard-3-container'>
              <InfoCard type = 'analysis-completedtasks' />
            </div>
          </div>
        </section>

        <section className = 'dashboard-manageListings-container'>
          <div className="dahboard-manageListings-area">
            <div className="dashboard-infocard-3-container">
              <InfoCard type = 'property-manager' />
            </div>
            <div className="dashboard-infocard-3-container">
              <InfoCard type = 'property-manager' />
            </div>
            <div className="dashboard-infocard-3-container">
              <InfoCard type = 'property-manager' />
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
