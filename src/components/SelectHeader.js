import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import HeaderRow from './CsvPreviews/HeaderRow';
import { Title, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, MainContainer, MegQuestionsLocation, ExtraBold } from '../styles/components';

function SelectHeader(props) {
  const { history } = props;
  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM HEADER</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>Please click on the <ExtraBold>HEADER</ExtraBold> row (that includes
          a DATE, DESCRIPTION, & AMOUNT of some kind) below and hit confirm!
        </h6>
        <HeaderRow history={history} />
        <Link to="/selectdate">
          <ConfirmButton>CONFIRM!</ConfirmButton>
        </Link>

      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
    </MainContainer>
  );
}

export default SelectHeader;
