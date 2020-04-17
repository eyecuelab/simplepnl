import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview } from '../styles/components';

import { makeSheetsApiPost } from '../actions';

function SelectAmount(props) {
  const handleNewSheet = () => {
    const { dispatch } = props;
    const { accessToken } = props;
    const test = 'test text';
    const payload = {
      test,
      accessToken,
    };
    dispatch(makeSheetsApiPost(payload));
  };


  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM AMOUNT</Title>
      <PinkLine />
      <div className="SelectAmount">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>I think I found the <span className="extraBold">amount</span> row <span className="highlightedCell">below</span>.</h6>
        <h6>Can you double check by tapping on the <span className="extraBold">amount</span> row and confirming?</h6>

        <hr />
        <div className="exampleTableDiv">
          <table className="exampleTable">
            <tbody>
              <tr>
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
                <td className="cell highlightedCell" />
              </tr>
              <tr>
                <td className="cell ">Date</td>
                <td className="cell ">Reference Number</td>
                <td className="cell ">Payee</td>
                <td className="cell ">Address</td>
                <td className="cell highlightedCell">Amount</td>
              </tr>
              <tr>
                <td className="cell ">12/12/2019</td>
                <td className="cell ">0057299165236</td>
                <td className="cell ">Online payment from CHK 135</td>
                <td className="cell " />
                <td className="cell highlightedCell">1000</td>
              </tr>
              <tr>
                <td className="cell ">12/19/2019</td>
                <td className="cell ">E12789355X</td>
                <td className="cell ">ANA BANNANA RENTAL 092</td>
                <td className="cell ">NEW YORK, NY</td>
                <td className="cell highlightedCell">-75.21</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <Link to="/reports">
          <ConfirmButton onClick={() => { handleNewSheet(props); }}>CONFIRM!</ConfirmButton>
        </Link>
      </div>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
      <style>
        {
          `
          .extraBold {
            font-weight: 800;
          }

          .exampleTableDiv {
            // position: fixed;
            // float: left;
            left: 0px;
          }

          .exampleTable {
            margin: auto;
          }

          .cell {
            border: 1px ridge black;
            padding: 3px;
            min-height: 19px;
            background-color: white;
          }

          .highlightedCell {
            background-color: #C0FFC0;
          }

          .SelectAmount {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding: 20px 50px;
          }

          `
        }
      </style>
    </MainContainer>
  );
}


const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  sheets: state.sheetsReducer,
});

export default connect(mapStateToProps)(SelectAmount);
