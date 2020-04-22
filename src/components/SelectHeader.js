import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import HeaderRow from './CsvPreviews/HeaderRow';
import { Title, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, MainContainer, MegQuestionsLocation } from '../styles/components';

function SelectHeader() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM HEADER</Title>
      <PinkLine />
      <div className="SelectHeader">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>I think I found the <span className="extraBold">header</span> row <span className="highlightedCell">below</span>.</h6>
        <h6>Can you double check by tapping on the <span className="extraBold">HEADER</span> row and confirming?</h6>

        <hr />
        <HeaderRow />
        <Link to="/selectdate">
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

          .SelectHeader {
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

export default SelectHeader;
