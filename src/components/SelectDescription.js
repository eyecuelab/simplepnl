import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import DescriptionColumn from './CsvPreviews/DescriptionColumn';
import { Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, MainContainer } from '../styles/components';

function SelectDescription() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM DESCRIPTION</Title>
      <PinkLine />
      <div className="SelectDescription">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>Please click on the <span className="extraBold">DESCRIPTION</span> column below and hit confirm!</h6>

        <hr />
        <DescriptionColumn />
        <Link to="/selectamount">
          <ConfirmButton>CONFIRM!</ConfirmButton>
        </Link>
      </div>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
      <style>
        {
          `
          .extraBold {
            font-weight: 800;
          }

          .SelectDescription {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding: 20px 50px;
          }


          `
        }
      </style>
    </MainContainer>
  );
}

export default SelectDescription;
