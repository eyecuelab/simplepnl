// import React from 'react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import HeaderRow from './CsvPreviews/HeaderRow';
import { setCsvHeader, shrinkCsvToHeader } from '../actions';

import { Title, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview, SelectScreen, MainContainer, MegQuestionsLocation, ExtraBold, ProblemSpan } from '../styles/components';

function SelectHeader(props) {
  const [headerDisplay, setHeaderDisplay] = useState(3);
  const { dispatch, history } = props;

  const handleNewHeader = () => {
    const { csvHeader } = props;
    dispatch(shrinkCsvToHeader(csvHeader));
    props.history.push({
      pathname: '/selectdate',
    });
  };

  function handleHeaderDisplayClick() {
    if (headerDisplay === 3) {
      setHeaderDisplay(9);
    } else {
      dispatch(setCsvHeader('row_none'));
      dispatch(shrinkCsvToHeader('row_none'));
      history.push('/selectdate');
    }
  }

  return (
    <MainContainer>

      <IndexLink>
        <CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX </Link>
        <CaretLeft>&#9664;</CaretLeft><Link to="/newpnl">STEP 1 </Link>
        <CaretLeft>&#9660;</CaretLeft>STEP 2
      </IndexLink>

      <Title>CONFIRM HEADER</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Here&apos;s a preview of your CSV.</SelectPreview>
        <h6>Please click on the <ExtraBold>HEADER</ExtraBold> row (that includes
          a DATE, DESCRIPTION, & AMOUNT of some kind) below and hit confirm!
        </h6>
        <HeaderRow history={history} headerDisplay={headerDisplay} />
        <ConfirmButton onClick={() => { handleNewHeader(props); }}>CONFIRM!</ConfirmButton>
        <br />


        {headerDisplay === 3
          ? (
            <ProblemSpan onClick={() => handleHeaderDisplayClick()}>
              {'Wait, what '}
              <ExtraBold>
                header?
              </ExtraBold>
            </ProblemSpan>
          )
          : (
            <ProblemSpan onClick={() => handleHeaderDisplayClick()}>
              {'Still '}
              <ExtraBold>
                {'no header? '}
              </ExtraBold>
              No problem. Click here!
            </ProblemSpan>
          )}
        <br />


      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
    </MainContainer>
  );
}


const mapStateToProps = (state) => ({
  csvHeader: state.csvReducer.csvHeader,
});

export default connect(mapStateToProps)(SelectHeader);
