import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchCategory from './SearchCategory';
import PaginationOutlined from './Pagination';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.newCategoryKey = 0;
  }

  csvReturn() {
    let spreadsheetValues;
    const { sheetsReducer } = this.props;
    const { thisSpreadsheetId } = this.props;
    if (sheetsReducer[thisSpreadsheetId]) {
      spreadsheetValues = sheetsReducer[thisSpreadsheetId].values;
    } else {
      spreadsheetValues = [['loading', 'loading', 'loading', 'loading']];
    }

    const { csv } = this.props;
    if (!csv) {
      return (
        <div>
          <h5>
            Whoops forgot to upload a CSV...<br /> We better add a check for that!
          </h5>
          <hr />
        </div>
      );
    }

    return (
      <table style={table}>
        <tbody>
          <tr><td>Date</td><td>Description</td><td>Amount</td><td>Category</td></tr>
          { spreadsheetValues.map((row, i) => {
            if (row.length < 4) {
              return (
                <tr id={`row_${i}`} key={this.newCategoryKey++}>
                  { row.map((column, j) => (
                    <td id={`row_${i}-column_${j}`} style={rows} key={this.newCategoryKey++}>{column}</td>
                  ))}
                  <td><SearchCategory /></td>
                </tr>
              );
            }
            return false;
          }
          )}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.csvReturn()}
        <PaginationOutlined />
      </div>
    );
  }
}

const table = {
  marginBottom: '50px',
};

const rows = {
  padding: '10px',
  fontSize: '13px',
};

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  sheetsReducer: state.sheetsReducer,
});

export default connect(mapStateToProps)(Category);
