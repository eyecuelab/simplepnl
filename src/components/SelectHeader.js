import React from 'react';
import { Link } from 'react-router-dom';

function SelectHeader(props){
  return (
    <div className="SelectHeader">

    <div>
    <ul className="breadcrumb">
    <div className="delta">◀︎</div>
    <li><Link to="/reportslist">BACK TO INDEX</Link></li>
    <li>/</li>
    <li><Link to="/selectheader">STEP 2</Link></li>
    </ul>
    </div>


    <div className="reportsHeader">Confirm Header</div>

    <h5>Here's a preview of your CSV.</h5>
    <h6>It looks like <span className="highlightedCell">THIS</span> is the header row, can you confirm by clicking on the header row?</h6>
    <hr/>

    <div className="exampleTableDiv">
    <table className="exampleTable">
    <tbody>
    <tr>
    <td className="cell "></td>
    <td className="cell "></td>
    <td className="cell "></td>
    <td className="cell "></td>
    <td className="cell "></td>
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
    <td className="cell "></td>
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

    <hr/>


    <div className="confirmButtonDiv">
      <Link to="/selectdate">
        <button className="confirmButton">
          <span className="">Confirm!</span>
        </button>
    </Link>
    </div>



    <style>
    {
      `
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

      .SelectHeader {
        color: #555555;
        background-color: white;
        border-radius: 5px;
        // overflow: hidden;
        min-height: 20vh;
        text-align: center;
        padding: 20px 50px;
      }

      .reportsHeader {
        // padding-top: 20px;
        margin: 0px;
        font-size: 25px;
        font-weight: 900;
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

export default SelectHeader;
