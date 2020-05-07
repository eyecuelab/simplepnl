import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import AmountColumn from './CsvPreviews/AmountColumn';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen } from '../styles/components';

import { makeSheetsApiPost } from '../actions';


function SelectAmount(props) {
  const handleNewSheet = () => {
    const { dispatch } = props;

    const { accessToken } = props;
    const { csvName } = props;
    const { csvAmount } = props;
    const csvAmountDebit = 'column_none';
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
        <CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX </Link>
        <CaretLeft>&#9664;</CaretLeft><Link to="/newpnl">STEP 1 </Link>
        <CaretLeft>&#9660;</CaretLeft>STEP 2
      </IndexLink>

      <Title>CONFIRM AMOUNT</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6 className="clickRow">Please click on the <span className="extraBold">AMOUNT</span> column below and hit confirm!</h6>
        <AmountColumn />
        <ConfirmButton onClick={() => { handleNewSheet(props); }}>SAVE!</ConfirmButton>
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

export default connect(mapStateToProps)(SelectAmount);
