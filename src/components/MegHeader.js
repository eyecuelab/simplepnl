import React from 'react';
// import { Link } from 'react-router-dom';

function MegHeader(props){

  return (
    <div className="megHeader">
      <div className="megPictureDiv">
        <div className="megBubble">I'm Meg!
        </div>
      </div>

      <style>
        {`
          .megHeader {
            color: #222222;
            // background-color: white;
            overflow: hidden;
            // border-radius: 1vw;
          }

          .megPictureDiv {
            margin: auto;
            background: url(meg.png);
            background-size: 300px 184px;
            background-position: -100px -195px;
            height: 100px;
            width: 100px;
            border-radius: 100%;
          }

          .megBubble {
            background-color: white;
            position: relative;
            left: 75px;
            top: 10px;
            border-radius: 100%;
            color: #F95D7B;
            border: 3px solid #e9f5fb;
            padding: 10%;
            transform: rotateZ(15deg);
          }


          `}
        </style>


      </div>
    );
  }

  export default MegHeader;
