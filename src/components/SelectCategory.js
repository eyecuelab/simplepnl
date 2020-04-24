import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import Category from './CsvPreviews/Category';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview } from '../styles/components';


function SelectCategory(props) {
  const checkSpreadsheetSource = () => {
    let thisSpreadsheetId;
    // INFO FROM PROPS.LOCATION WHICH BOTH [SAVE] AND [LINK] SEND:
    const spreadsheetIdFromLocation = props.location.spreadsheetId;
    if (spreadsheetIdFromLocation === 'newSpreadsheet') {
    // INFO FROM [SAVE] OF NEW SHEET:
      if (props.sheetsReducer.sheets) {
        const spreadsheetIdFromReports = props.sheetsReducer.sheets.id;
        // NEWLY SAVED SPREADSHEETID:
        thisSpreadsheetId = spreadsheetIdFromReports;
      }
    } else {
    // SPREADSHEETID FROM REPORTS PAGE:
      thisSpreadsheetId = spreadsheetIdFromLocation;
    }
    return thisSpreadsheetId;
  };

  console.log('checkSpreadsheetSource', checkSpreadsheetSource());


  // ROUTE FROM REPORTS:
  // ...


  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM CATEGORY</Title>
      <PinkLine />
      <div className="SelectCategory">
        <SelectPreview>Now it&apos;s time to categorize your transactions!</SelectPreview>
        <h6><span className="extraBold">Select the most appropriate category for this transaction from the dropdown below.</span> (If you&apos;re not sure, you can ask me for help, or stop and come back any time.)</h6>

        <hr />
        <Category />
        {/* <form>
          <select type="select">
            <option value="Personal">(x) Non-Business Related</option>
            <option value="Income">($) Income</option>
            <option value="Other Expense: Ask My Accountant">(?) Other Expense: Ask My Accountant</option>
            <option value="Cost of Goods Sold: Equipment Rental">Cost of Goods Sold: Equipment Rental</option>
            <option value="Cost of Goods Sold: Job/Project Costs & Materials">Cost of Goods Sold: Job/Project Costs & Materials</option>
            <option value="Cost of Goods Sold: Packaging & Labels">Cost of Goods Sold: Packaging & Labels</option>
            <option value="Cost of Goods Sold: Shipping & Delivery">Cost of Goods Sold: Shipping & Delivery</option>
            <option value="Cost of Goods Sold: Subcontractors">Cost of Goods Sold: Subcontractors</option>
            <option value="Cost of Goods Sold: Merchant Service Fees">Cost of Goods Sold: Merchant Service Fees</option>
            <option value="Equity: Owner Contribution">Equity: Owner Contribution</option>
            <option value="Equity: Owner Draw - Personal Transactions">Equity: Owner Draw - Personal Transactions</option>
            <option value="Expenses: Advertising & Marketing">Expenses: Advertising & Marketing</option>
            <option value="Expenses: Advertising & Marketing:Events & Networking">Expenses: Advertising & Marketing:Events & Networking</option>
            <option value="Expenses: Advertising & Marketing:Printing & Stationary">Expenses: Advertising & Marketing:Printing & Stationary</option>
            <option value="Expenses: Advertising & Marketing:Website & Social Media">Expenses: Advertising & Marketing:Website & Social Media</option>
            <option value="Expenses: Auto, Parking & Tolls">Expenses: Auto, Parking & Tolls</option>
            <option value="Expenses: Bank Charges & Fees">Expenses: Bank Charges & Fees</option>
            <option value="Expenses: Business Licenses & Permits">Expenses: Business Licenses & Permits</option>
            <option value="Expenses: Contract Labor/Admin/Bookkeeper/Accountant">Expenses: Contract Labor/Admin/Bookkeeper/Accountant</option>
            <option value="Expenses: Software, Dues, & Subscriptions">Expenses: Software, Dues, & Subscriptions</option>
            <option value="Expenses: Business Insurance ">Expenses: Business Insurance </option>
            <option value="Expenses: Interest Paid">Expenses: Interest Paid</option>
            <option value="Expenses: Local Taxes">Expenses: Local Taxes</option>
            <option value="Expenses: Meals & Meetings">Expenses: Meals & Meetings</option>
            <option value="Expenses: Rent & Lease">Expenses: Rent & Lease</option>
            <option value="Expenses: Repairs & Maintenance">Expenses: Repairs & Maintenance</option>
            <option value="Expenses: Supplies- Office, Shop, Small Tools & Equipment">Expenses: Supplies- Office, Shop, Small Tools & Equipment</option>
            <option value="Expenses: Travel">Expenses: Travel</option>
            <option value="Expenses: Travel:Airfare & Transit">Expenses: Travel:Airfare & Transit</option>
            <option value="Expenses: Travel:Lodging">Expenses: Travel:Lodging</option>
            <option value="Expenses: Travel:Meals & Entertainment">Expenses: Travel:Meals & Entertainment</option>
            <option value="Expenses: Phone & Internet">Expenses: Phone & Internet</option>
            <option value="Fixed Assets: Machinery & Equipment">Fixed Assets: Machinery & Equipment</option>
            <option value="Fixed Assets: Vehicles Purchased">Fixed Assets: Vehicles Purchased</option>
          </select>

          <Link to="/reports">
            <ConfirmButton>SELECT</ConfirmButton>
          </Link>
        </form> */}
      </div>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>

      <div className="temp">
        TEMP display of active spreadsheetId for dev use:
        <br />
        <a href={`https://docs.google.com/spreadsheets/d/${checkSpreadsheetSource()}`} target="_blank" rel="noopener noreferrer">${checkSpreadsheetSource()}</a>
      </div>


      <style>
        {
          `
          .temp {
            position: fixed;
            top: 2%;
            left: 2%;
            background-color: #e9f5fb;
            border-radius: 20px;
            padding: 20px;
            font-size: 11px;
            font-weight: 600;

          }

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
            padding-top: 54px
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

          .SelectCategory {
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
    </MainContainer>
  );
}


const mapStateToProps = (state) => ({
  ...state,
});

// export default SelectCategory;
export default connect(mapStateToProps)(SelectCategory);
