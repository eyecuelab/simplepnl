import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import { Title, QuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, MainContainer } from '../styles/components';


function SelectHeader() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reportslist">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM HEADER</Title>
      <PinkLine />
      <div className="SelectHeader">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>I think I found the <span className="extraBold">header</span> row <span className="highlightedCell">below</span>.</h6>
        <h6>Can you double check by tapping on the <span className="extraBold">header</span> row and confirming?</h6>

        <hr />
        <div className="exampleTableDiv">
          <table className="exampleTable">
            <tbody>
              <tr>
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
                <td className="cell " />
              </tr>
              <tr>
                <td className="cell highlightedCell">Date</td>
                <td className="cell highlightedCell">Reference Number</td>
                <td className="cell highlightedCell">Payee</td>
                <td className="cell highlightedCell">Address</td>
                <td className="cell highlightedCell">Amount</td>
              </tr>
              <tr>
                <td className="cell ">12/12/2019</td>
                <td className="cell ">0057299165236</td>
                <td className="cell ">Online payment from CHK 135</td>
                <td className="cell " />
                <td className="cell ">1000</td>
              </tr>
              <tr>
                <td className="cell ">12/19/2019</td>
                <td className="cell ">E12789355X</td>
                <td className="cell ">ANA BANNANA RENTAL 092</td>
                <td className="cell ">NEW YORK, NY</td>
                <td className="cell ">-75.21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <Link to="/selectdate">
          <ConfirmButton>CONFIRM!</ConfirmButton>
        </Link>
        <QuestionsLocation>
          <MegQuestions />
        </QuestionsLocation>
      </div>
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

          .SelectHeader {
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

export default SelectHeader;
