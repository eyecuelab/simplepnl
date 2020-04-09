import React from 'react';
import { Link } from 'react-router-dom';

function MegQuestions(props){

  return (
    <div className="MegQuestions">

      <Link to="/help">
        <div className="megPictureDiv">
          <div className="megBubble">Click on me if you have any questions!
          </div>
        </div>
      </Link>

      <style>
        {
          `
          .MegQuestions {
            color: #222222;
            text-align: center;
            position: absolute;
            left: -70px;
            top: -35px;
          }

          .MegQuestions a:hover {
            text-decoration: none;
          }


          .megPictureDiv {
            margin: auto;
            background: url("meg.png");
            background-size: 225px 138px;
            background-position: -75px -145px;
            height: 70px;
            width: 70px;
            border-radius: 100%;
            margin-top: 20px;
            // transform: rotateZ(15deg);
          }

          .megBubble {
            color: white;
            position: relative;
            left: 40px;
            top: 35px;
            padding: 10px;
            font-weight: 600;
            font-style: italic;
            font-size: 12px;
            width: 300px;
          }
          `
        }
      </style>
    </div>
  );
}

export default MegQuestions;
