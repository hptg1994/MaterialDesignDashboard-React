import React, { Component } from "react";
import InfoCard_basicInfo from "../../components/Cards/DashBoardCard/InfoCard-basicInfo";
import InfoCard_GraphyAnalysis from "../../components/Cards/DashBoardCard/InfoCard-Graphy";
import InfoCard_largest from "../../components/Cards/DashBoardCard/InfoCard-largest";
import InfoCard_photo from "../../components/Cards/DashBoardCard/InfoCard-photo";
import { Row, Col, Container } from "reactstrap";
import Footer from "./Footer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="dashboard-container">
        <div className="dashboard-cardRow">
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

        <section className="dashboard-cardRow">
          <div className="dashboard-globalsales-container">
            <InfoCard_largest type = 'global-sales' />
          </div>
        </section>

        <section className = 'dashboard-cardRow'>
          <div className = 'dashboard-infocard-3-container'>
            <InfoCard_GraphyAnalysis type = 'analysis-dailysales' />
          </div>
          <div className = 'dashboard-infocard-3-container'>
            <InfoCard_GraphyAnalysis type = 'analysis-emailsubsciptions' />
          </div>
          <div className = 'dashboard-infocard-3-container'>
            <InfoCard_GraphyAnalysis type = 'analysis-completedtasks' />
          </div>
        </section>

        <section className = 'dashboard-cardRow'>
          <div className="dashboard-infocard-3-container">
            <InfoCard_photo type = 'Bigger' />
          </div>
          <div className="dashboard-infocard-3-container">
            <InfoCard_photo type = 'Bigger' />
          </div>
          <div className="dashboard-infocard-3-container">
            <InfoCard_photo type = 'Bigger' />
          </div> 
        </section>
      </section>
    );
  }
}

export default Dashboard;
