import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from './../images/editIcon.png';

function ReportItem(props){

  let year = ((Math.round(Math.random()*5))+2015);
  let month = ((Math.round(Math.random()*12)));

  let percent = ((Math.round(Math.random()*64))+33);
  let reportId = ('report' + percent);

  return (
    <div className="ReportItem">

      <div className="reportItemHeader">
        <span>{`SimplePNL-${year}-${month}`}</span>
      </div>
      <div className="reportItemStatusBar">
        <div className="reportItemStatus" id={reportId}>
        <span>{`${percent}% COMPLETE`}</span>
        </div>
      </div>
      <div className="reportItemEdit">
        <span><Link to="/selectcategory"><img className="editIcon" src={editIcon} alt="Edit icon" /></Link></span>



      </div>


      <style>
        {
          `
          .ReportItem {
            width: 100%;
            text-align: left;
            padding-bottom: 20px;
          }

          .reportItemHeader {
            font-weight: 600;
            color: #222222;
          }

          .reportItemStatusBar {
            background-color: #555555;
            border-radius: 20px;
            display: inline-block;
            width: 82%;
          }

          .reportItemStatus {
            background-color: #ea475b;
            color: #ffffff;
            font-weight: 600;
            padding: 10px;
            border-radius: 20px;
            display: inline-block;
          }

          #${reportId} {
            width: ${percent}%;
            min-width: 130px;
            font-size: .8em;
          }

          .reportItemEdit {
            display: inline-block;
            background-color: white;
            margin-left: 10%;
            width: 8%;
          }

          .editIcon {
            width: 30px;
          }

          `
        }
      </style>
    </div>
  );
}

export default ReportItem;
