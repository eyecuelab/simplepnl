import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MegQuestions from './MegQuestions';
import Category from './CsvPreviews/Category';
import { CategoryContainer, Title, MegQuestionsLocation, PinkLine, CaretLeft, IndexLink, SelectPreview, SelectScreen, ExtraBold } from '../styles/components';

function SelectCategory({ location, sheetsReducer }) {
  const sheetId = useMemo(() => {
    const correctSpreadsheetId = location.spreadsheetId;
    // INFO FROM PROPS.LOCATION WHICH BOTH [SAVE] AND [LINK] SEND:
    if (correctSpreadsheetId === 'newSpreadsheet' && sheetsReducer?.sheets?.id) {
      // NEWLY SAVED SPREADSHEETID:
      return sheetsReducer.sheets.id;
    }
    return correctSpreadsheetId;
  }, [location, sheetsReducer]);

  return (
    <CategoryContainer>

      <IndexLink>
        <CaretLeft>&#9664;</CaretLeft><Link to="/reports">BACK TO INDEX </Link>
        <CaretLeft>&#9660;</CaretLeft>STEP 3
      </IndexLink>

      <Title>CONFIRM CATEGORY</Title>
      <PinkLine />
      <SelectScreen>
        <SelectPreview>Now it&apos;s time to categorize your transactions!</SelectPreview>
        <h6 className="clickRow"><ExtraBold>Select the most appropriate category for this transaction from the dropdown below.</ExtraBold> (If you&apos;re not sure, you can ask me for help, or stop and come back any time.)</h6>
        <Category
          thisSpreadsheetId={sheetId}
        />
      </SelectScreen>
      <MegQuestionsLocation>
        <MegQuestions />
      </MegQuestionsLocation>

      {/* <div className="temp">
        TEMP display of active spreadsheetId for dev use:
        <br />
        <a href={`https://docs.google.com/spreadsheets/d/${sheetId}`} target="_blank" rel="noopener noreferrer">{sheetId}</a>
      </div> */}


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


          `
        }
      </style>
    </CategoryContainer>
  );
}


const mapStateToProps = (state) => ({
  sheetsReducer: state.sheetsReducer,
});

// export default SelectCategory;
export default connect(mapStateToProps)(SelectCategory);
