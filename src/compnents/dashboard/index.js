import React, { Component } from 'react';
// import Header from "../commoncomponent/header";
// import { NavLink } from "react-router-dom";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
             {/* <NavLink to={'/dashboard'}>
                      <div className="back-btn">
                          <div className="back-button">
                           <img src={require('../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
                 </NavLink> */}
          <div className="video-content">
                    <div className="vedio-header">
                        <h1>Administration</h1>
                        <h2>Dashboard</h2>
                    </div>
                    <div className="dashboard-content">
                       <div className="row">
                       <div className="col-sm-12">
                           <div className="cards">
                              <h5>How do you sell apple?</h5>
                              <p>ACTIVE QUESTIONS</p>
                           </div>
                           </div>
                           <div className="col-sm-6">
                           <div className="cards">
                              <h5>56</h5>
                              <p>QUESTIONS ASKED</p>
                           </div>
                           </div>
                           <div className="col-sm-6">
                           <div className="cards">
                              <h5>42</h5>
                              <p> QUESTIONS REJECTED</p>
                           </div>
                           </div>
                           
                           <div className="col-sm-6">
                           <div className="cards">
                              <h5>56</h5>
                              <p>QUESTIONS OUTSTANDING</p>
                           </div>
                           </div>
                           <div className="col-sm-6">
                           <div className="cards">
                              <h5>42</h5>
                              <p>QUESTIONS APROVED</p>
                           </div>
                           </div>
                       </div>
                    </div>
                       
                </div>
      </div>
    );
  }
}
export default Dashboard;
