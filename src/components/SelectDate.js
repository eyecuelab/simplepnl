import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview } from '../styles/components';

function SelectDate() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reportslist">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM DATE</Title>
      <PinkLine />
      <div className="SelectDate">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>I think I found the <span className="extraBold">date</span> row <span className="highlightedCell">below</span>.</h6>
        <h6>Can you double check by tapping on the <span className="extraBold">date</span> row and confirming?</h6>

        <hr />
        <div className="exampleTableDiv">
          <table className="exampleTable">
            <tbody>
              <tr>
                <td className="cell highlightedCell" />
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
              </tr>
              <tr>
                <td className="cell highlightedCell">Date</td>
                <td className="cell ">Reference Number</td>
                <td className="cell ">Payee</td>
                <td className="cell ">Address</td>
                <td className="cell ">Amount</td>
              </tr>
              <tr>
                <td className="cell highlightedCell">12/12/2019</td>
                <td className="cell ">0057299165236</td>
                <td className="cell ">Online payment from CHK 135</td>
                <td className="cell " />
                <td className="cell ">1000</td>
              </tr>
              <tr>
                <td className="cell highlightedCell">12/19/2019</td>
                <td className="cell ">E12789355X</td>
                <td className="cell ">ANA BANNANA RENTAL 092</td>
                <td className="cell ">NEW YORK, NY</td>
                <td className="cell ">-75.21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <Link to="/selectdescription">
          <ConfirmButton>CONFIRM!</ConfirmButton>
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

          .SelectDate {
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

export default SelectDate;
