import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import AmountCreditColumn from './CsvPreviews/AmountCreditColumn';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, ExtraBold } from '../styles/components';
import { makeSheetsApiPost } from '../actions';

function SelectAmountCredit(props) {
  const handleNewSheet = () => {
    const { dispatch } = props;

    const { accessToken } = props;
    const { csvName } = props;
    const { csvAmount } = props;
    const { csvAmountDebit } = props;
    const { csvDate } = props;
    const { csvDescription } = props;
    const { csvHeader } = props;
    const { csvRawData } = props;
    const payload = {
      accessToken,
      csvName,
      csvAmount,
      csvAmountDebit,
      csvDate,
      csvDescription,
      csvHeader,
      csvRawData,
    };
    dispatch(makeSheetsApiPost(payload))
      .then(() => {
        props.history.push({
          pathname: '/selectcategory',
          spreadsheetId: 'newSpreadsheet',
        });
      });
  };

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
        <h6 className="clickRow">Please click on the <ExtraBold>CREDIT</ExtraBold> column below and hit confirm!</h6>
        <AmountCreditColumn />

        <Link to="/selectamount">
          <ConfirmButton onClick={() => { handleNewSheet(props); }}>CONFIRM!</ConfirmButton>
        </Link>

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
  csvAmountDebit: state.csvReducer.csvAmountDebit,
  csvDate: state.csvReducer.csvDate,
  csvDescription: state.csvReducer.csvDescription,
  csvHeader: state.csvReducer.csvHeader,
  csvName: state.csvReducer.csvName,
  csvRawData: state.csvReducer.csvRawData,
});

export default connect(mapStateToProps)(SelectAmountCredit);
