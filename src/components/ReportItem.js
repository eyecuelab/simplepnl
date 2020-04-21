import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../images/editIcon.png';

function ReportItem(props) {
  const percent = ((Math.round(Math.random() * 64)) + 33);
  const reportId = (`report${percent}`);
  const { name } = props;
  const { percentage } = props;

  return (
    <div className="ReportItem">

      <div className="reportItemHeader">
        <span>{name}</span>
      </div>
      <div className="reportItemStatusBar">
        <div className="reportItemStatus" id={reportId}>
          <span>{`${percentage}% COMPLETE`}</span>
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
            width: ${percentage}%;
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
