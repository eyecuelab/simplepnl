import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function SelectDate() {
  const selectContainer = {
    backgroundColor: 'white',
    height: '600px',
    borderRadius: '5px',
    color: '#6B6B6B'
  };

  const caretLeft = {
    color: '#ea475b',
    fontSize: '25px'
  };

  const index = {
    paddingTop: '1rem',
    paddingLeft: '1rem',
    color: '#222222',
    fontWeight: '700',
    fontSize: '15px'
  };

  const selectTitle = {
      paddingLeft: '2rem',
      fontSize: '25px',
      color: '#ea475b'
  };

  const pinkLine = {
    color: '#ea475b',
    marginTop: '1rem',
    marginBottom: '3rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    border: '0',
    borderTop: '1px solid #ea475b',
  };

  const gridContainer = {
      paddingLeft: '2rem',
      paddingRight: '2rem'
  }

  const paper = {
      textAlign: 'center',
      fontSize: '13px'
  };

  return (
      
    <div style={selectContainer}>
        <h4 style={index}><span style={caretLeft}>&#9664;</span> BACK TO INDEX</h4>
        <h1 style={selectTitle}>CONFIRM DATE</h1>
        <div style={pinkLine}></div>
        <Grid style={gridContainer} container spacing={0}>
        <Grid item sm={1}>
          <Paper style={paper}>Date</Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper style={paper}>Reference Number</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper style={paper}>Payee</Paper>
        </Grid>
        <Grid item sm={2}>
          <Paper style={paper}>Address</Paper>
        </Grid>
        <Grid item sm={2}>
          <Paper style={paper}>Amount</Paper>
        </Grid>
      </Grid>
      <Grid style={gridContainer} container spacing={0}>
        <Grid item sm={1}>
          <Paper style={paper}>12/19/19</Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper style={paper}>0057299165236</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper style={paper}>Online payment CHK 135</Paper>
        </Grid>
        <Grid item sm={2}>
          <Paper style={paper}>Seattle</Paper>
        </Grid>
        <Grid item sm={2}>
          <Paper style={paper}>50.99</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SelectDate;