import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReportItem from './ReportItem';
import MegQuestions from './MegQuestions';
import { MainContainer, Title, MegQuestionsLocation, PinkLine } from '../styles/components';


import { makeDriveApiCall } from '../actions';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {
    const { dispatch } = this.props;
    const { accessToken } = this.props;
    dispatch(makeDriveApiCall(accessToken));
  }

  reportReturn() {
    const { reports: { reports } } = this.props;
    console.log(reports.length);
    if (reports.length < 1) {
      return (
        <div>
          It looks like you are ready to start! Click on the <span className="pink">pink plus button</span><div className="reportsMiniPlus"><Link to="/newpnl"><span className="reportsMiniPlusSign"> + </span></Link></div> to start a new report!
        </div>
      );
    }
    return (
      <div>
        {
          reports.map((report) => (
            <ReportItem
              name={report.name}
              id={report.id}
              kind={report.kind}
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
        <div className="reportsPadding">

          <Title>REPORTS</Title>
          <PinkLine />
          <div className="reportsPlus"><Link to="/newpnl"><div className="reportsPlusSign">+</div></Link></div>

          {this.reportReturn()}

          <MegQuestionsLocation>
            <MegQuestions />
          </MegQuestionsLocation>
        </div>

        <style>
          {
            `
            .reportsPadding {
              padding: 2rem;
            }

            .reportsMiniPlusSign {
              position: relative;
              top: -4px;
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
              margin-right: 6px;
            }

            .MegQuestionsLocation {
              position: absolute;
            }

            .reportsDemoSelector {
              position: absolute;
              left: 10px;

              float: left;
            }

            .reportsHeader {
              // padding-top: 20px;
              margin: 0px;
              font-size: 25px;
              font-weight: 700;
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

            .reportsPlusSign {
              position: relative;
              top: -32px;
              left: 6px;
              font-weight: 200;
              color: #e9f5fb;
              font-size: 82px;
            }

            .reportsPlus a:hover {
              text-decoration: none;
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
