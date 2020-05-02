import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReportItem from './ReportItem';
import MegQuestions from './MegQuestions';
import { MainContainer, ReportsHeader, MegQuestionsLocation, PinkLine, ReportsPlus, ReportsPlusSign } from '../styles/components';


import { makeDriveApiCall, makeSheetsFirstApiCall } from '../actions';


class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {
    const { dispatch } = this.props;
    const { accessToken } = this.props;
    dispatch(makeDriveApiCall(accessToken)).then(() => {
      dispatch(makeSheetsFirstApiCall(this.props));
    });
  }

  reportReturn() {
    const { reports: { reports } } = this.props;
    if (reports.length < 1) {
      return (
        <div className="reportsBodyPadding reportsBodyPaddingText">
          <h6>
            It looks like you are ready to start!
          </h6>
          <h5>
            Click on the <span className="pink">pink plus button</span><div className="reportsMiniPlus"><Link to="/newpnl"><span className="reportsMiniPlusSign"> + </span></Link></div> to start a new report!
          </h5>
        </div>
      );
    }
    return (
      <div className="reportsBodyPadding">
        {
          reports.map((report) => (
            <ReportItem
              name={report.name}
              spreadsheetId={report.id}
              kind={report.kind}
              percentage={report.percentage}
              mimeType={report.mimeType}
              key={report.id}
            />
          )
          )
      }
      </div>
    );
  }

  render() {
    return (
      <MainContainer>
        <ReportsHeader>REPORTS</ReportsHeader>
        <PinkLine />
        <ReportsPlus>
          <Link to="/newpnl">
            <ReportsPlusSign>+</ReportsPlusSign>
          </Link>
        </ReportsPlus>

        <div className="reportsDiv">
          {this.reportReturn()}
        </div>

        <MegQuestionsLocation>
          <MegQuestions />
        </MegQuestionsLocation>

        <style>
          {
          `
          .reportsDiv {
            background-color: #ffffff;
            border-radius: 5px;
            // overflow-y: scroll;
          }

          .reportsBodyPadding {
            padding: 0px 2rem;
          }

          .reportsBodyPaddingText {
            text-align: center;
          }

          .MegQuestionsLocation {
            position: absolute;
          }

          `
        }
        </style>
      </MainContainer>
    );
  }
}


// ...state,
const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  reports: state.reportsReducer,
});


export default connect(mapStateToProps)(Reports);
