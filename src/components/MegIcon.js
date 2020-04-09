import React from 'react';

function MegIcon() {
    return (
          <div className="megPictureDiv">
          <style>
            {`
              .megPictureDiv {
                margin: auto;
                background: url("meg.png");
                background-size: 300px 184px;
                background-position: -95px -195px;
                height: 100px;
                width: 100px;
                border-radius: 100%;
                margin-bottom: 20px;
              }
              `}
            </style>
          </div>
        );
      }

export default MegIcon;
