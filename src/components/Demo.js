import React from 'react';
import { Link } from 'react-router-dom';

function Demo(){
  return (
    <div className="Demo">
      <h5>Demo</h5>

      <h6><Link to="/">Home</Link></h6>
      <h6><Link to="/eula">EULA</Link></h6>
      <h6><Link to="/reports">Reports (none)</Link></h6>
      <h6><Link to="/newpnl">NewPnl</Link></h6>
      <h6><Link to="/reportslist">Reports (List)</Link></h6>
      <h6><Link to="/selectheader">SelectHeader</Link></h6>

      <style>
        {
          `
          .Demo {
            position: absolute;
            bottom: 0;
            left: 0;

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

          .Demo:hover {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 10%;
            height: 30%;
            overflow: hidden;

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
