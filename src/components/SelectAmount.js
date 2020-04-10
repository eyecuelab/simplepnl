import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import { MainContainer, Title, PinkLine, CaretLeft, IndexLink, ConfirmButton } from '../styles/components.js';

function SelectAmount(props){
  const selectContainer = {
    backgroundColor: 'white',
    // height: '600px',
    borderRadius: '5px',
    color: '#6B6B6B'
  };

  return (
    <div style={selectContainer}>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to='/reportslist'>BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM AMOUNT</Title>
      <PinkLine></PinkLine>
      <div className="SelectAmount">
        <h5 className="h5select">Here's a preview of your CSV.</h5>
        <h6 className="h6select">I think I found the <span className="extraBold">amount</span> row <span className="highlightedCell">below</span>.</h6>
        <h6 className="h6select">Can you double check by tapping on the <span className="extraBold">amount</span> row and confirming?</h6>
        <hr/>

        <div className="exampleTableDiv">
          <table className="exampleTable">
            <tbody>
              <tr>
                <td className="cell "></td>
                <td className="cell "></td>
                <td className="cell "></td>
                <td className="cell "></td>
                <td className="cell highlightedCell"></td>
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
                <td className="cell "></td>
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

      <hr/>

        <Link to="/selectcategory">
          <ConfirmButton>CONFIRM!</ConfirmButton>
        </Link>
   
      <div className="MegQuestionsLocation">
        <MegQuestions />
      </div>

    </div>
      <style>
        {
          `
          .MegQuestionsLocation {
            position: absolute;
          }
          .extraBold {
            font-weight: 800;
          }

          .h5select {
            padding: 15px;
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

          .breadcrumb {
            padding: 0px;
            margin: 0px;
            background-color: white;
            font-size: 14px;
            font-weight: 700;
            color: black;
          }

          .breadcrumb li{
            padding: 0px 4px;
            position: relative;
            top: 10px;
          }

          .breadcrumb a {
            color: black;
          }

          .delta {
            color: #ea475b;
            font-size: 24px;

          }

          .SelectAmount {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding-left: 50px;
            padding-right: 50px;
            padding-bottom: 50px;
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



          `
        }
      </style>
    </div>
  );
}

export default SelectAmount;
