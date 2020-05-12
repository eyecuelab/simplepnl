import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MegQuestions from './MegQuestions';
import { MainContainer, Title, PinkLine, CaretLeft, IndexLink, NextButton, TextInput, MegQuestionsLocation } from '../styles/components';
import Importer from './Importer';
import { setCsvName } from '../actions';


function NewPnl(props) {
  const importColumn = {
    backgroundColor: 'white',
    color: '#999999',
    fontWeight: '600',
    height: '200px',
    textAlign: 'center',
    width: '100%',
    padding: '0px 0px',
  };

  let formReportName = null;
  function handleFormUpdate(event) {
    event.preventDefault();

    const reportName = formReportName.value;
    const { dispatch } = props;
    dispatch(setCsvName(reportName));

    const confirmCsvUploaded = () => (props.csvReducer.csvRawData ? (
      props.history.push('/selectheader')
    ) : (
      alert("Don't forget to upload a csv!")
    ));
    confirmCsvUploaded();
  }

  return (
    <MainContainer>
      <IndexLink>
        <CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX </Link>
        <CaretLeft>&#9660;</CaretLeft>STEP 1
      </IndexLink>


      <Title>NEW PNL REPORT</Title>
      <PinkLine />
      <form className="formClass" onSubmit={handleFormUpdate}>
        <TextInput
          placeholder="Name of Report (eg: '2020-04' or '2020-Q1')"
          required
          ref={(input) => { formReportName = input; }}
        />
        <div style={importColumn} className="importerDiv">
          <Importer />


          <NextButton type="submit">Next!</NextButton>
        </div>
      </form>

      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
      <style>
        {
          `
          .importerDiv {
            // border: 9px solid #ea475b;
          }

          .formClass {
            height: 603px;
            padding: 0px 80px;
          }
          `
        }
      </style>
    </MainContainer>

  );
}

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  csvReducer: state.csvReducer,
});

export default connect(mapStateToProps)(NewPnl);
