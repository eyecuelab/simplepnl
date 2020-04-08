import React from 'react';
import { Link } from 'react-router-dom';

function Reports(props){
  return (
    <div className="Reports">

      <div className="reportsHeader">PNL REPORTS</div>
      <div className="reportsPlus"><Link to="/newpnl"><div className="reportsPlusSign">+</div></Link></div>

      <div>It looks like you are ready to start! Click on the <span className="pink">pink plus button</span><div className="reportsMiniPlus"><Link to="/newpnl"><div className="reportsMiniPlusSign">+</div></Link></div> to start a new report!</div>

      <style>
        {
          `

          .Reports {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding: 20px 50px;
          }

          .reportsHeader {
            // padding-top: 20px;
            margin: 0px;
            font-size: 25px;
            font-weight: 900;
            color: #ea475b;
            text-align: left;
            border-bottom: 2px solid #ea475b;
          }

          .reportsPlus{
            position: relative;
            top: -32px;
            left: 90%;
            background-color: #ea475b;
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }

          .reportsMiniPlus {
            display: inline-block;
            position: relative;
            top: 5px;
            // left: 90%;
            background-color: #ea475b;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            color: white;
          }

          .reportsMiniPlusSign {
            position: relative;
            top: -4px;
            font-weight: 500;
            color: #ffffff;
            // font-size: 82px;
          }

          .reportsPlusSign {
            position: relative;
            top: -32px;
            font-weight: 200;
            color: #ffffff;
            font-size: 82px;
          }

          .pink {
            color: #ea475b;
          }

          `
        }
      </style>
    </div>
  );
}

export default Reports;
