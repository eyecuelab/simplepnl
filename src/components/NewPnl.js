import React from 'react';
import { Link } from 'react-router-dom';
import { MainContainer, Title, PinkLine, CaretLeft, IndexLink, NextButton } from '../styles/components';
import Importer from './Importer';

function NewPnl() {
  const firstColumn = {
    backgroundColor: 'white',
    height: '70px',
    border: '1px solid #B9B9B9',
    borderRadius: '5px',
    marginLeft: '2rem',
    marginRight: '2rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    textAlign: 'center',
  };

  const secondColumn = {
    backgroundColor: 'white',
    height: '200px',
    border: '1px dashed #B9B9B9',
    borderRadius: '5px',
    marginLeft: '2rem',
    marginRight: '2rem',
    textAlign: 'center',
  };

  const reportName = {
    padding: '1.5rem',
    fontWeight: '700',
    color: '#D7D6D6',
  };

  // const dragDrop = {
  //   padding: '5rem',
  //   fontWeight: '700',
  //   color: '#D7D6D6',
  //   marginTop: '1rem',
  // };


  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reportslist">BACK TO INDEX</Link></IndexLink>
      <Title>NEW PNL REPORT</Title>
      <PinkLine />
      <div style={firstColumn}>
        <p style={reportName}>NAME OF THE REPORT</p>
      </div>
      <div style={secondColumn}>
        <Importer />
        <Link to="/selectheader"><NextButton>Next!</NextButton></Link>
      </div>
    </MainContainer>

  );
}

export default NewPnl;
