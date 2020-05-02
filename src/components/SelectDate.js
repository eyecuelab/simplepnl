import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import DateColumn from './CsvPreviews/DateColumn';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, ExtraBold } from '../styles/components';

function SelectDate() {
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM DATE</Title>
      <PinkLine />
      <SelectScreen>
        <div className="SelectDate">
          <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
          <h6 className="clickRow">Please click on the <ExtraBold>DATE</ExtraBold> column below and hit confirm!</h6>
          <DateColumn />
          <Link to="/selectdescription">
            <ConfirmButton>CONFIRM!</ConfirmButton>
          </Link>
        </div>
      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
    </MainContainer>
  );
}

export default SelectDate;
