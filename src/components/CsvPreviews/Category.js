import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComboBox from '../../utils/ComboBox';
import PaginationOutlined from '../../utils/Pagination';
import { Table, Row } from '../../styles/components';

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
      <Table>
        <tbody>
          <tr><td>Date</td><td>Description</td><td>Amount</td><td>Category</td></tr>
          { spreadsheetValues.map((row, i) => {
            if (row.length < 4) {
              return (
                <tr id={`row_${i}`} key={this.newCategoryKey++}>
                  { row.map((column, j) => (
                    <Row
                      id={`row_${i}-column_${j}`}
                      key={this.newCategoryKey++}
                    >
                      {column}
                    </Row>
                  ))}
                  <td><ComboBox /></td>
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
