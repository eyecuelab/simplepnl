import React from 'react';
import { Link } from 'react-router-dom';

function SelectCategory(props){
  return (
    <div className="SelectCategory">

      <div>
        <ul className="breadcrumb">
          <div className="delta">◀︎</div>
          <li><Link to="/reportslist">BACK TO INDEX</Link></li>
          <li>/</li>
          <li><Link to="/selectamount">STEP 3</Link></li>
        </ul>
      </div>


      <div className="reportsHeader">Select Category</div>

      <h5 className="h5select">Now it's time to categorize your transactions!</h5>
      <h6 className="h6select">Select the most appropriate category for this transaction from the dropdown below.</h6>
      <p>(If you're not sure, you can ask me for help, or stop and come back any time.)</p>

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
              <td className="cell ">Date</td>
              <td className="cell ">Reference Number</td>
              <td className="cell ">Payee</td>
              <td className="cell ">Address</td>
              <td className="cell ">Amount</td>
            </tr>
            <tr>
              <td className="cell highlightedCell">12/12/2019</td>
              <td className="cell highlightedCell">0057299165236</td>
              <td className="cell highlightedCell">Online payment from CHK 135</td>
              <td className="cell highlightedCell"></td>
              <td className="cell highlightedCell">1000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr/>

      <form>
        <select type="select">
          <option value="* Skip">* Skip</option>
          <option value="* Income">* Income</option>
          <option value="* Other Expense: Ask My Accountant">* Other Expense: Ask My Accountant</option>
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
        <div className="confirmButtonDiv">
          <Link to="/reportslist">
            <button className="confirmButton">
              <span className="">Select</span>
            </button>
          </Link>
        </div>
      </form>







      <style>
        {
          `
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
    </div>
  );
}

export default SelectCategory;
