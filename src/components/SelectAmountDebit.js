import React from 'react';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import AmountDebitColumn from './CsvPreviews/AmountDebitColumn';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, ExtraBold } from '../styles/components';


function SelectAmountDebit() {
  return (
    <MainContainer>

      <IndexLink>
        <CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX </Link>
        <CaretLeft>&#9664;</CaretLeft><Link to="/newpnl">STEP 1 </Link>
        <CaretLeft>&#9660;</CaretLeft>STEP 2
      </IndexLink>

      <Title>CONFIRM AMOUNT</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6 className="clickRow">Please click on the <ExtraBold>DEBIT</ExtraBold> column below and hit confirm!</h6>
        <AmountDebitColumn />

        <Link to="/selectamountcredit">
          <ConfirmButton>Confirm!</ConfirmButton>
        </Link>

      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
    </MainContainer>
  );
}

export default SelectAmountDebit;
