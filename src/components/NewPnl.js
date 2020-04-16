import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import { MainContainer, Title, PinkLine, CaretLeft, IndexLink, NextButton, TextInput, MegQuestionsLocation } from '../styles/components';
import Importer from './Importer';

function NewPnl() {
  const importColumn = {
    backgroundColor: 'white',
    height: '200px',
    marginLeft: '2rem',
    marginRight: '2rem',
    textAlign: 'center',
    width: '90%',
  };


  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>NEW PNL REPORT</Title>
      <PinkLine />
      <TextInput placeholder="Name your file:" />
      <div style={importColumn}>
        <Importer />
        <Link to="/selectheader"><NextButton>Next!</NextButton></Link>
      </div>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
    </MainContainer>

  );
}

export default NewPnl;
