import React from 'react';
import { Link } from 'react-router-dom';
import MegHeader from './MegHeader';
import EulaText from './EulaText';


function Eula(props) {
  return (
    <div className="Eula">

      <MegHeader />

      <div><h2 className="eulaHeader">End-User Agreement</h2></div>

      <EulaText />

      <div className="EulaButtonDiv">
        <Link to="/reports">
          <button className="EulaButton">
            <span className="EulaButtonReady">Ready to </span>
            <span className="EulaButtonGo">GO!</span>
          </button>
        </Link>
      </div>

      <div className="eulaFadeDiv" />

      <style>
        {
          `

          .Eula {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            overflow: hidden;
            height: 80vh;
            text-align: center;


            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 120px 70px 1fr 100px 0px;
            grid-column-gap: 0px;
            grid-row-gap: 0px;





          }

          .eulaHeader {
            padding: 20px;
            font-size: 25px;
            margin: 0px;
          }

          .EulaButtonDiv {
            text-align: center;
            margin: auto;
          }

          .EulaButton {
            background-color: #ea475b;
            color: #ffffff;
            // height: 40px;
            border-radius: 5px;
            padding: 10px 30px;
          }

          .EulaButtonReady {
            font-size: 1rem;
            font-weight: 500;
          }

          .EulaButtonGo {
            font-size: 1rem;
            font-weight: 800;
          }

          .eulaFadeDiv {
            background-repeat: no-repeat;
            position: relative;
            bottom: 175px;
            width: 97.5%;
            height: 75px;
            background: linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,1) 100%);

            // background: -moz-linear-gradient(top,  rgba(137,255,241,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
            // background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(137,255,241,0)), color-stop(100%,rgba(0,0,0,1))); /* Chrome,Safari4+ */
            // background: -webkit-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* Chrome10+,Safari5.1+ */
            // background: -o-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* Opera 11.10+ */
            // background: -ms-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* IE10+ */
            // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0089fff1', endColorstr='#000000',GradientType=0 ); /* IE6-9 */

          }

          `
        }
      </style>
    </div>
  );
}

export default Eula;
