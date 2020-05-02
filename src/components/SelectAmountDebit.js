import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import AmountColumnPreview from './CsvPreviews/AmountColumnPreview';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, ExtraBold } from '../styles/components';


function SelectAmountDebit() {
  return (
    <MainContainer>
      <IndexLink>
        <CaretLeft>&#9664;
        </CaretLeft><Link to="/reportslist">BACK TO INDEX </Link>
        <CaretLeft>&#9664;
        </CaretLeft><Link to="/newpnl">STEP 1 </Link>
        <CaretLeft>&#9660;
        </CaretLeft>STEP 2
      </IndexLink>
      <Title>CONFIRM AMOUNT</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6 className="clickRow">Does it look like there is <ExtraBold>ONE &#39;Amount&#39;</ExtraBold> column, or <ExtraBold>TWO [a Debit & Credit]</ExtraBold> in the header row?</h6>
        <AmountColumnPreview />

        <Link to="/selectamount">
          <ConfirmButton>Just 1 Amount column!</ConfirmButton>
        </Link>

        <ConfirmButton>Both a Debit AND a Credit column.</ConfirmButton>

      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
    </MainContainer>
  );
}


const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  sheetsReducer: state.sheetsReducer,
  csvAmount: state.csvReducer.csvAmount,
  csvDate: state.csvReducer.csvDate,
  csvDescription: state.csvReducer.csvDescription,
  csvHeader: state.csvReducer.csvHeader,
  csvName: state.csvReducer.csvName,
  csvRawData: state.csvReducer.csvRawData,
});

export default connect(mapStateToProps)(SelectAmountDebit);
