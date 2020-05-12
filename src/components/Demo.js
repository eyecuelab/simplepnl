import React from 'react';
import { Link } from 'react-router-dom';

function Demo() {
  return (
    <div className="Demo">
      <h6>Demo</h6>
      <p><Link to="/">~ root</Link></p>
      <p><Link to="/eula">- EULA</Link></p>
      <p><Link to="/reports">- Reports</Link></p>
      <p><Link to="/newpnl">- New PNL</Link></p>
      <p><Link to="/selectheader">- Select Header</Link></p>
      <p><Link to="/selectdate">- Select Date</Link></p>
      <p><Link to="/selectdescription">- Select Description</Link></p>
      <p><Link to="/selectamount">- Select Amount</Link></p>
      <p><Link to="/selectcategory">- Select Category</Link></p>
      <p><Link to="/help">- Help</Link></p>

      <style>
        {
          `
          .Demo {
            position: absolute;
            bottom: 10px;
            left: 10px;

            width: 75px;
            height: 40px;
            overflow: hidden;

            font-style: italic;
            color: #555555;
            background-color: #00a1dc;
            border-radius: 5px;
            border: 3px dashed #ea475b;
            padding: 0px;
            margin: 10px;
          }

          .Demo p {
            margin: 4px;
          }

          .Demo:hover {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 175px;
            height: 320px;
            overflow: hidden;
            font-size: 12px;
            font-weight: 600;

            font-style: italic;
            color: #555555;
            background-color: #e9f5fb;
            border-radius: 5px;
            border: 5px dashed #ea475b;
            padding: 10px;
            margin: 10px;
          }


          `
        }
      </style>
    </div>
  );
}

export default Demo;
