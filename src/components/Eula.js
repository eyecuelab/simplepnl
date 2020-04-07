import React from 'react';
import MegHeader from "./MegHeader";
import EulaText from "./EulaText";

function Eula(props){
  return (
    <div className="Eula">

      <MegHeader />

      <h2>End-User Agreement</h2>

        <EulaText />

        <div className="EulaButtonDiv">
          <button className="EulaButton">
            <span className="EulaButtonReady">Ready to </span>
            <span className="EulaButtonGo">GO!</span>
          </button>
        </div>

      <style>
        {`

          .Eula {
            padding-top: 25px;
            color: #222222;
            background-color: white;
            border-radius: 1vw;
            overflow: hidden;
            height: 80vh;
          }


          .EulaButtonDiv {
            text-align: center;
            margin: 10px;
          }

          .EulaButton {
            background-color: #ea475b;
            color: #ffffff;
            padding: 10px;
          }

          .EulaButtonReady {
            font-size: 1rem;
            font-weight: 100;
          }

          .EulaButtonGo {
            font-size: 1rem;
            font-weight: 900;
          }





          `}
        </style>
      </div>
    );
  }

  export default Eula;
