import React, { Component } from 'react';
import Outstanding from "../outstanding";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Aproved from "../aproved";
import Rejected from "../rejected";
import $ from 'jquery';
import init from 'jquery'
// import init from 'jquery'

class Moderat extends Component {
  componentDidMount(){
    $(document).ready(function () {
      $('.section').hide();
      $('#1').show();
      $('#option').change(function (){
        $('.section').hide();
        $('#'+$(this).val()).show();
        if($(this).val()==8){
          init();}
      });
    });
  }
  render() {
    return (
      <div className="">
      <div className="video-content">
         <div className="vedio-header">
            <h1>Administration</h1>
            <h2>Questions Moderator</h2>
        </div>
        <Tabs className="main-list desktop-option">
          <TabList>
            <Tab className="tab-list">Outstanding</Tab>
            <Tab className="tab-list">Aproved</Tab>
            <Tab className="tab-list">Rejected</Tab>
          </TabList>
      
          <TabPanel>
              <Outstanding/>
          </TabPanel>
          <TabPanel>
            <Aproved/>
          </TabPanel>
          <TabPanel>
            <Rejected/>
          </TabPanel>
        </Tabs>
          <div className="mobile-options">
            <i className="fa fa-angle-down option-arrow"/>
            <select id="option">
              <option selected value="1">Outstanding</option>
              <option value="2">Aproved</option>
              <option value="3">Rejected</option>
            </select>
            <div className="section" id="1">
              <Outstanding/>
            </div>
            <div className="section" id="2">
            <Aproved/>
            </div>
            <div className="section" id="3">
            <Rejected/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Moderat;
