import React from 'react';

function Reports(props){
  return (
    <div className="Reports">


      <div className="reportsHeader">PNL REPORTS</div>
      <div className="reportsPlus"><div className="reportsPlusSign">+</div></div>

      <p>.MAP component</p>
      <p>.MAP component</p>
      <p>.MAP component</p>
      <p>.MAP component</p>



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
            color: #ea457b;
            text-align: left;
            border-bottom: 2px solid #ea457b;
          }

          .reportsPlus{
            position: relative;
            top: -32px;
            left: 90%;
            background-color: #ea457b;
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }
          .reportsPlusSign {
            position: relative;
            top: -32px;
            font-weight: 200;
            color: #e9f5fb;
            font-size: 82px;
          }

          `
        }
      </style>
    </div>
  );
}

export default Reports;
