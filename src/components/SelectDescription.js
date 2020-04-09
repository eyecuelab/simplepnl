import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';

function SelectDescription(props){
  const selectContainer = {
    backgroundColor: 'white',
    // height: '600px',
    borderRadius: '5px',
    color: '#6B6B6B'
  };

  const caretLeft = {
    color: '#ea475b',
    fontSize: '25px'
  }

  const index = {
    paddingTop: '1rem',
    paddingLeft: '1rem',
    color: '#222222',
    fontWeight: '700',
    fontSize: '15px'
  };

  const selectTitle = {
    paddingLeft: '2rem',
    fontSize: '25px',
    color: '#ea475b',
    fontWeight: '700'
  };

  const pinkLine = {
    color: '#ea475b',
    marginTop: '1rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    border: '0',
    borderTop: '1px solid #ea475b',
  };


  return (
    <div style={selectContainer}>
      <h4 style={index}><span style={caretLeft}>&#9664;</span><Link to="/reportslist"> BACK TO INDEX</Link></h4>
      <h1 style={selectTitle}>CONFIRM DESCRIPTION</h1>
      <div style={pinkLine}></div>

      <div className="SelectDescription">

        <h5 className="h5select">Here's a preview of your CSV.</h5>
        <h6 className="h6select">I think I found the <span className="extraBold">description</span> row <span className="highlightedCell">below</span>.</h6>
        <h6 className="h6select">Can you double check by tapping on the <span className="extraBold">description</span> row and confirming?</h6>
        <hr/>
        <div className="exampleTableDiv">
          <table className="exampleTable">
            <tbody>
              <tr>
                <td className="cell "></td>
                <td className="cell "></td>
                <td className="cell highlightedCell"></td>
                <td className="cell "></td>
                <td className="cell "></td>
              </tr>
              <tr>
                <td className="cell ">Date</td>
                <td className="cell ">Reference Number</td>
                <td className="cell highlightedCell">Payee</td>
                <td className="cell ">Address</td>
                <td className="cell ">Amount</td>
              </tr>
              <tr>
                <td className="cell ">12/12/2019</td>
                <td className="cell ">0057299165236</td>
                <td className="cell highlightedCell">Online payment from CHK 135</td>
                <td className="cell "></td>
                <td className="cell ">1000</td>
              </tr>
              <tr>
                <td className="cell ">12/19/2019</td>
                <td className="cell ">E12789355X</td>
                <td className="cell highlightedCell">ANA BANNANA RENTAL 092</td>
                <td className="cell ">NEW YORK, NY</td>
                <td className="cell ">-75.21</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr/>


        <div className="confirmButtonDiv">
          <Link to="/selectamount">
            <button className="confirmButton">
              <span className="">Confirm!</span>
            </button>
          </Link>
        </div>

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

          .confirmButtonDiv {
            text-align: center;
            margin: auto;
          }

          .confirmButton {
            background-color: #ea475b;
            color: #ffffff;
            // height: 40px;
            border-radius: 5px;
            padding: 10px 30px;
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

          .SelectDescription {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding: 20px 50px;
          }

          .reportsDescription {
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

export default SelectDescription;
