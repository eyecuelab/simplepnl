import React from "react";
import { Link } from 'react-router-dom';

import Input from '@material-ui/core/Input';
import TextField from "@material-ui/core/TextField";

function NewPnl() {
  const pnlContainer = {
    backgroundColor: "white",
    height: "600px",
    borderRadius: "5px",
    // textAlign: 'center',
    color: "#6B6B6B",
  };

  const index = {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    color: "#222222",
    fontWeight: "700",
  };

  const pnlTitle = {
    paddingLeft: "2rem",
    fontSize: "25px",
    color: "#ea475b",
  };

  const pinkLine = {
    color: "#ea475b",
    marginTop: "1rem",
    marginBottom: "3rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    border: "0",
    borderTop: "1px solid #ea475b",
  };

  const firstColumn = {
    backgroundColor: "white",
    height: "70px",
    border: "1px solid #B9B9B9",
    borderRadius: "5px",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginBottom: "1rem",
    textAlign: "center"
  };

  const secondColumn = {
    backgroundColor: "white",
    height: "200px",
    border: "1px dashed #B9B9B9",
    borderRadius: "5px",
    marginLeft: "2rem",
    marginRight: "2rem",
    textAlign: "center"
  };

  const reportName = {
    padding: '1.5rem',
    fontWeight: '700',
    color: '#D7D6D6'
  }

  const dragDrop = {
    padding: '5rem',
    fontWeight: '700',
    color: '#D7D6D6',
  }

  return (
    <div style={pnlContainer}>
      <p style={index}><Link to="/reportslist">BACK TO INDEX</Link></p>
      <h1 style={pnlTitle}>NEW PNL REPORT</h1>
      <div style={pinkLine}></div>
      <div style={firstColumn}>
        <p style={reportName}>NAME OF THE REPORT</p>
      </div>
      <div style={secondColumn}>
        <p style={dragDrop}>DRAG AND DROP BANK STATEMENTS HERE</p>
      </div>
    </div>
  );
}

export default NewPnl;
