import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import DateColumn from './CsvPreviews/DateColumn';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview } from '../styles/components';

function SelectDate() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM DATE</Title>
      <PinkLine />
      <div className="SelectDate">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>Please click on the <span className="extraBold">DATE</span> column below and hit confirm!</h6>

        <hr />
        <DateColumn />
        <Link to="/selectdescription">
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

          .SelectDate {
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

export default SelectDate;
