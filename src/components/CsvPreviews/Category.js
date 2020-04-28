import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComboBox from '../../utils/ComboBox';
import PaginationOutlined from '../../utils/Pagination';
import { Table, CategoryCell } from '../../styles/components';

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
      spreadsheetValues = [['Loading', 'Loading', 'Loading']];
    }

    return (
      <Table>
        <tbody>
          <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
          { spreadsheetValues.map((row, i) => {
            if (row.length < 4) {
              return (
                <tr id={`row_${i}`} key={this.newCategoryKey++}>
                  { row.map((column, j) => (
                    <CategoryCell
                      id={`row_${i}-column_${j}`}
                      key={this.newCategoryKey++}
                    >
                      {column}
                    </CategoryCell>
                  ))}
                  <td><ComboBox rowId={i} spreadsheetId={thisSpreadsheetId} /></td>
                </tr>
              );
            }
            return false;
          }
          )}
        </tbody>
      </Table>
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

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  sheetsReducer: state.sheetsReducer,
});

export default connect(mapStateToProps)(Category);
