import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import ReportItem from './ReportItem';
import { ReportsContainer, ReportsHeader, ReportsPlus, ReportsPlusSign } from '../styles/components';

function ReportsList() {
  return (
    <ReportsContainer>
      <ReportsHeader>PNL Reports</ReportsHeader>
      <ReportsPlus>
        <Link to="/newpnl">
          <ReportsPlusSign>+</ReportsPlusSign>
        </Link>
      </ReportsPlus>

      <p>PAGE MERGED INTO REPORTS</p>
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />

      <div className="MegQuestionsLocation">
        <MegQuestions />
      </div>

      <style>
        {
          `
          .MegQuestionsLocation {
            position: absolute;
          }

          `
        }
      </style>
    </ReportsContainer>
  );
}

export default ReportsList;
