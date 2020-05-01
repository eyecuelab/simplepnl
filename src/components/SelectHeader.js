import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import HeaderRow from './CsvPreviews/HeaderRow';
import { Title, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, MainContainer, MegQuestionsLocation } from '../styles/components';

function SelectHeader() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM HEADER</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>Please click on the <span className="extraBold">HEADER</span> column below and hit confirm!</h6>
        <HeaderRow />
        <Link to="/selectdate">
          <ConfirmButton>CONFIRM!</ConfirmButton>
        </Link>

      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
      <style>
        {
          `
          .extraBold {
            font-weight: 800;
          }

          `
        }
      </style>
    </MainContainer>
  );
}

export default SelectHeader;
