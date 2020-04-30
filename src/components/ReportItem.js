import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../images/editIcon.png';
import linkIcon from '../images/linkIcon.png';

function ReportItem(props) {
  const { name } = props;
  const { spreadsheetId } = props;
  const { percentage } = props;
  const reportId = (`report${spreadsheetId}`);


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
        <span>
          <Link to={{
            pathname: '/selectcategory',
            spreadsheetId,
          }}
          >
            <img className="editIcon" src={editIcon} alt="Edit icon" />
          </Link>

          <a href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}`} target="_blank" rel="noopener noreferrer">
            <img className="linkIcon" src={linkIcon} alt="Edit icon" />
          </a>


        </span>


      </div>


      <style>
        {
          `
          .ReportItem {
            width: 100%;
            text-align: center;
            padding-bottom: 15px;
            // margin: auto;
            background-color: white;
            border-radius: 5px;
          }

          .reportItemHeader {
            text-align: left;

            font-weight: 600;
            color: #222222;
          }

          .reportItemStatusBar {
            background-color: #555555;
            border-radius: 20px;
            display: inline-block;
            width: 85%;
            text-align: left;
            margin-bottom: 5px;

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
            // width: 80%;
            // text-align: right;
          }

          .editIcon {
            width: 26px;
            margin-left: 20px;
          }

          .linkIcon {
            width: 26px;
            margin-left: 20px;
          }

          `
        }
      </style>
    </div>
  );
}

export default ReportItem;
