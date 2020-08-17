import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReportItem from './ReportItem';
import MegQuestions from './MegQuestions';
import {
  MainContainer,
  ReportsHeader,
  MegQuestionsLocation,
  PinkLine,
  ReportsPlus,
  ReportsPlusSign,
} from '../styles/components';

import { getDriveFolder, makeDriveApiCall, makeSheetsFirstApiCall } from '../actions';

function Reports(props) {
  const { folderId } = props;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { dispatch } = props;
    const { accessToken } = props;
    if (folderId === undefined) {
      dispatch(makeDriveApiCall(accessToken)).then(() => {
        dispatch(getDriveFolder(accessToken)).then(() => {
          dispatch(makeSheetsFirstApiCall(props));
        });
      });
    } else {
      dispatch(makeDriveApiCall(accessToken)).then(() => {
        dispatch(makeSheetsFirstApiCall(props));
      });
    }
  }, [folderId]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const reportReturn = () => {
    const {
      reports: { reports },
    } = props;
    if (reports.length < 1) {
      return (
        <div className="reportsBodyPadding reportsBodyPaddingText">
          <p>It looks like you are ready to start!</p>
          <div>
            Click on the
            <span className="pink">pink plus button</span>
            <div className="reportsMiniPlus">
              <Link to="/newpnl">
                <span className="reportsMiniPlusSign"> +</span>
              </Link>
            </div>{' '}
            to start a new report.
          </div>
        </div>
      );
    }
    return (
      <div className="reportsBodyPadding">
        {reports.map((report) => (
          <ReportItem
            name={report.name}
            spreadsheetId={report.id}
            kind={report.kind}
            percentage={report.percentage}
            mimeType={report.mimeType}
            key={report.id}
          />
        ))}
      </div>
    );
  };

  return (
    <MainContainer>
      <ReportsHeader>REPORTS</ReportsHeader>
      <PinkLine />
      <ReportsPlus>
        <Link to="/newpnl">
          <ReportsPlusSign>+</ReportsPlusSign>
        </Link>
      </ReportsPlus>

      <div className="reportsDiv">{reportReturn()}</div>

      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>

      <style>
        {`
          .reportsDiv {
            background-color: #ffffff;
            border-radius: 5px;
            min-height: 551px;
            max-height: 593px;
            overflow-y: auto;
            overflow-x: hidden;
          }

          .reportsBodyPadding {
            height: 100%;
            padding: 0px 80px;
          }

          .reportsBodyPaddingText {
            text-align: center;
            font-size: 16px;

            padding-top: 30%;
            // or
            // position: absolute;
            // top: 50%;
            // left: 50%;
            // transform: translate(-50%, -50%);
          }

          .reportsMiniPlusSign {
            position: relative;
            top: -4px;
            left: 0px;
            font-weight: 500;
            color: #ffffff;
            // font-size: 82px;
          }

          .reportsMiniPlus {
            display: inline-block;
            position: relative;
            top: 5px;
            background-color: #ea475b;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            margin-right: 3px;
          }

          `}
      </style>
    </MainContainer>
  );
}

const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  reports: state.reportsReducer,
  folderId: state.folderReducer.folderId,
});

export default connect(mapStateToProps)(Reports);
