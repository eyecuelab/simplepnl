import React from 'react';

function NewPnl() {
    const pnlContainer = {
        backgroundColor: 'white',
        height: '500px',
        borderRadius: '5px',
        // textAlign: 'center',
        color: '#6B6B6B',
    };

    const index = {
        paddingTop: '1rem',
        paddingLeft: '25px',
    }

    const pnlTitle = {
        // paddingTop: '20px',
        paddingLeft: '25px',
        fontSize: '25px',
        color: '#ea475b'
    };

    const pinkLine = {
        color: '#ea475b',
        marginTop: '1rem',
        marginBottom: '1rem',
        marginLeft: '25px',
        marginRight: '25px',
        border: '0',
        borderTop: '1px solid #ea475b'
    }



    return (
      <div style={pnlContainer}>
          <p style={index}>Back to Index</p>
          <h1 style={pnlTitle}>NEW PNL REPORT</h1>
          <div style={pinkLine}></div>
      </div>
    );
}

export default NewPnl;