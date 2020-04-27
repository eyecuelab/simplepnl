import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import Category from './CsvPreviews/Category';
import { CategoryContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, ConfirmButton, SelectPreview } from '../styles/components';


function SelectCategory(props) {
  const checkSpreadsheetSource = () => {
    let thisSpreadsheetId;
    // INFO FROM PROPS.LOCATION WHICH BOTH [SAVE] AND [LINK] SEND:
    const spreadsheetIdFromLocation = props.location.spreadsheetId;
    if (spreadsheetIdFromLocation === 'newSpreadsheet') {
    // INFO FROM [SAVE] OF NEW SHEET:
      if (props.sheetsReducer.sheets) {
        const spreadsheetIdFromReports = props.sheetsReducer.sheets.id;
        // NEWLY SAVED SPREADSHEETID:
        thisSpreadsheetId = spreadsheetIdFromReports;
      }
    } else {
    // SPREADSHEETID FROM REPORTS PAGE:
      thisSpreadsheetId = spreadsheetIdFromLocation;
    }
    return thisSpreadsheetId;
  };

  // console.log('checkSpreadsheetSource', checkSpreadsheetSource());


  // ROUTE FROM REPORTS:
  // ...


  return (
    <CategoryContainer>
      <IndexLink><CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX</Link></IndexLink>
      <Title>CONFIRM CATEGORY</Title>
      <PinkLine />
      <div className="SelectCategory">
        <SelectPreview>Now it&apos;s time to categorize your transactions!</SelectPreview>
        <h6><span className="extraBold">Select the most appropriate category for this transaction from the dropdown below.</span> (If you&apos;re not sure, you can ask me for help, or stop and come back any time.)</h6>

        <hr />
        <Category />
      </div>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>
      <ConfirmButton />

      <div className="temp">
        TEMP display of active spreadsheetId for dev use:
        <br />
        <a href={`https://docs.google.com/spreadsheets/d/${checkSpreadsheetSource()}`} target="_blank" rel="noopener noreferrer">${checkSpreadsheetSource()}</a>
      </div>


      <style>
        {
          `
          .temp {
            position: fixed;
            top: 2%;
            left: 2%;
            background-color: #e9f5fb;
            border-radius: 20px;
            padding: 20px;
            font-size: 11px;
            font-weight: 600;

          }

          .MegQuestionsLocation {
            position: absolute;
          }
          .extraBold {
            font-weight: 800;
          }

          .h5select {
            padding: 15px;
          }

          .SelectCategory {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding: 20px 50px;
          }

          .reportsHeader {
            // padding-top: 20px;
            margin: 0px;
            font-size: 25px;
            font-weight: 900;
            color: #ea475b;
            text-align: left;
            border-bottom: 2px solid #ea475b;
          }


          `
        }
      </style>
    </CategoryContainer>
  );
}


const mapStateToProps = (state) => ({
  ...state,
});

// export default SelectCategory;
export default connect(mapStateToProps)(SelectCategory);
