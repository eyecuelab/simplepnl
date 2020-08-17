import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../images/editIcon.png';
import linkIcon from '../images/linkIcon.png';
import {
  ReportsContainer,
  ReportItemHeader,
  ReportStatusBar,
  ReportStatus,
  EditReport,
  EditReportIcon,
  ReportLinkIcon,
} from '../styles/components';

function ReportItem(props) {
  const { name } = props;
  const { spreadsheetId } = props;
  const { percentage } = props;
  const reportId = `report${spreadsheetId}`;

  return (
    <ReportsContainer>
      <ReportItemHeader>
        <span>{name}</span>
      </ReportItemHeader>
      <ReportStatusBar>
        <ReportStatus id={reportId}>
          <span>{`${percentage}% COMPLETE`}</span>
        </ReportStatus>
      </ReportStatusBar>
      <EditReport>
        <span>
          <Link
            to={{
              pathname: '/selectcategory',
              spreadsheetId,
            }}
          >
            <EditReportIcon src={editIcon} alt="Edit icon" />
          </Link>

          <a href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}`} target="_blank" rel="noopener noreferrer">
            <ReportLinkIcon src={linkIcon} alt="link to spreadsheet icon" />
          </a>
        </span>
      </EditReport>

      <style>
        {`

          #${reportId} {
            width: ${percentage}%;
            min-width: 130px;
            font-size: .8em;
          }

          `}
      </style>
    </ReportsContainer>
  );
}

export default ReportItem;
