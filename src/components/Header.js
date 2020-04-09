import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){

  return (
    <div className="header">
      <div className="headerTitle">

        <Link to="/reports">
          <span className="headerTitleSimple">SIMPLE</span><span className="headerTitlePNL">PNL</span>
        </Link>

        <Link to="/eula">
          <span className="headerLogin">LOGIN</span>
        </Link>

      </div>
      <style>
        {`
          .header {
            padding-top:50px;
            color: white;
            font-size: 20px;
          }

          .headerTitle a {
            text-align: left;
            color: white;
          }

          .headerTitle a:hover {
            color: #e9f5fb;
            text-decoration: none;
          }

          .headerTitleSimple {
            font-weight: 800;
            color: white;
          }

          .headerTitlePNL {
            font-weight: 400;
            color: white;
          }

          .headerLogin {
            float: right;
            font-weight: 600;
            font-size: 14px;
            position: relative;
            top: 8px;
            color: white;
          }

          `}
        </style>
    </div>
  );
}

export default Header;
