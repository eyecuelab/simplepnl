import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import DescriptionColumn from './CsvPreviews/DescriptionColumn';
import { Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, MainContainer } from '../styles/components';

function SelectDescription() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM DESCRIPTION</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6 className="clickRow">Please click on the <span className="extraBold">DESCRIPTION</span> column below and hit confirm!</h6>
        <DescriptionColumn />
        <Link to="/selectamount">
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

export default SelectDescription;
