import React from 'react';
// import { Link } from 'react-router-dom';

function Header(props){

  return (
    <div className="header">
      <div className="title">
        <span className="titleSimple">SIMPLE</span><span className="titlePNL">PNL</span>
        <span className="login">LOGIN</span>
      </div>
      <style>
        {`
          .header {
            padding-top:50px;
            color: white;
          }

          .title {
            text-align: left;
          }

          .titleSimple {
            font-weight: 900;
          }

          .titlePNL {
            font-weight: 300;
          }

          .login {
            float: right;
            font-weight: 600;
          }

          `}
        </style>
    </div>
  );
}

export default Header;
