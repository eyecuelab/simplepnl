import React from 'react';

function SelectDescription() {
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

  return (
      <div style={selectContainer}>
        <h4 style={index}><span style={caretLeft}>&#9664;</span> BACK TO INDEX</h4>
        <h1 style={selectTitle}>CONFIRM DESCRIPTION</h1>
        <div style={pinkLine}></div>
    </div>
  );
}

export default SelectDescription;