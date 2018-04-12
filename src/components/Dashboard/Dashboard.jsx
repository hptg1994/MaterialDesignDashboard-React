import React, { Component } from "react";
import InfoCard from "../../components/Cards/DashBoardCard/InfoCard";
import { Row, Col, Container } from "reactstrap";

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
            <div className="dashboard-infocard-container">
              <InfoCard type="space" />
            </div>
            <div className="dashboard-infocard-container">
              <InfoCard type="github" />
            </div>
            <div className="dashboard-infocard-container">
              <InfoCard type="revenue" />
            </div>
            <div className="dashboard-infocard-container">
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
      </div>
    );
  };

  render() {
    const webUrl = this.handleRenderPage();
    return <div className="dashboard-container">{webUrl}</div>;
  }
}

export default Dashboard;
