import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import AmountColumn from './CsvPreviews/AmountColumn';
import { MainContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview } from '../styles/components';

import { makeSheetsApiPost } from '../actions';

function SelectAmount(props) {
  const handleNewSheet = () => {
    const { dispatch } = props;
    const { accessToken } = props;
    dispatch(makeSheetsApiPost(accessToken));
  };


  return (
    <MainContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reportslist">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM AMOUNT</Title>
      <PinkLine />
      <div className="SelectAmount">
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>I think I found the <span className="extraBold">amount</span> row <span className="highlightedCell">below</span>.</h6>
        <h6>Can you double check by tapping on the <span className="extraBold">amount</span> row and confirming?</h6>

        <hr />
        <AmountColumn />
        <Link to="/selectcategory">
          <ConfirmButton onClick={() => { handleNewSheet(props); }}>CONFIRM!</ConfirmButton>
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

          .SelectAmount {
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


const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  sheets: state.sheetsReducer,
});

export default connect(mapStateToProps)(SelectAmount);
