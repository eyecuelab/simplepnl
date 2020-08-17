import React from 'react';
import { connect } from 'react-redux';

function Loading(props) {
  const { isLoadingReports } = props;
  const { isLoadingSheets } = props;

  const displayToggle = () => {
    if (isLoadingReports === true || isLoadingSheets === true) {
      return 'block';
    }
    return 'none';
  };

  return (
    <div className="loading">
      <div className="loadingBox">
        <div>
          <div className="loadingCell loadingCellA" />
          <div className="loadingCell loadingCellB" />
        </div>
        <div>
          <div className="loadingText">LOADING</div>
        </div>
        <div>
          <div className="loadingCell loadingCellB" />
          <div className="loadingCell loadingCellC" />
        </div>
      </div>

      <style>
        {`
          .loading {
            display: ${displayToggle()};
            position: fixed;
            left: 50%;
            top: 80px;
            transform: translate(-50%, -0%);

            width: 700px;
            height: 700px;

            background: rgba(255, 255, 255, .96);
            color: #222222;
            text-align: center;
            z-index: 1;
            border-radius: 5px;
          }

          .loadingBox {
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .loadingText {
            font-size: 12px;
            font-weight: 700;
          }

          .loadingCell {
            display: inline-block;
            width: 30px;
            height: 30px;
            margin: 0px 10px;
          }

          .loadingCellA {
            background: rgba(234, 71, 91, 1);
            animation: loadingCellScaleA 1.5s linear 0.00s infinite normal;
          }
          .loadingCellB {
            background: rgba(234, 71, 91, 1);
            animation: loadingCellScaleA 1.5s linear 0.25s infinite normal;
          }
          .loadingCellC {
            background: rgba(234, 71, 91, 1);
            animation: loadingCellScaleA 1.5s linear 0.50s infinite normal;
          }


          @keyframes loadingCellScaleA {
            0%   { opacity: 1;}
            25%   { opacity: 0.5; transform:matrix(0.50,0.00,0.00,0.50,0,0);}
            50%   { opacity: 1; transform:matrix(1.00,0.00,0.00,1.00,0,0);}
            100% { opacity: 1;}
          }

          `}
      </style>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoadingReports: state.reportsReducer.isLoading,
  isLoadingSheets: state.sheetsReducer.isLoading,
});

export default connect(mapStateToProps)(Loading);
