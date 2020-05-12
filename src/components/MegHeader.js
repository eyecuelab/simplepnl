import React from 'react';
// import { Link } from 'react-router-dom';

function MegHeader() {
  return (
    <div className="megHeader">
      <div className="megPictureDiv">
        <div className="megBubble" />
      </div>

      <style>
        {`
          .megHeader {

            color: #222222;
            overflow: hidden;
            text-align: center;
            padding-top: 80px;
          }

          .megPictureDiv {
            margin: auto;
            background: url("meg.png");
            background-size: 300px 184px;
            background-position: -100px -195px;
            height: 100px;
            width: 100px;
            border-radius: 100%;
            // margin-top: 20px;
          }

          .megBubble {
            background: url("Im-Meg-Speech-Bubble-01.png");
            // background-size: 60px 60px;
            background-size: cover;

            width: 100px;
            height: 50px;
            // background-position: -100px -195px;
            // background-color: white;
            position: relative;
            left: 75px;
            top: 10px;
            // border-radius: 100%;
            // color: #ea475b;
            // border: 3px solid #e9f5fb;
            padding: 10px;
            font-weight: 600;
            font-style: italic;
            transform: rotateZ(15deg);
          }


          `}
      </style>


    </div>
  );
}

export default MegHeader;
