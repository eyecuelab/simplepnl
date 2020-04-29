import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComboBox from '../../utils/ComboBox';
import PaginationOutlined from '../../utils/Pagination';
import { Table, CategoryCell, DisplayButton } from '../../styles/components';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryDisplay: 3,
    };
    this.newCategoryKey = 0;
    this.handleDisplayClick = this.handleDisplayClick.bind(this);
  }

  handleDisplayClick(columns) {
    this.setState({
      categoryDisplay: columns,
    });
  }

  csvReturn() {
    let spreadsheetValues;
    const { sheetsReducer } = this.props;
    const { thisSpreadsheetId } = this.props;
    if (sheetsReducer[thisSpreadsheetId]) {
      spreadsheetValues = sheetsReducer[thisSpreadsheetId].values;
    } else {
      // API CALL FOR VALUES NO IN REDUX WILL LIKELY BE DISPATCHED HERE:
      spreadsheetValues = [
        ['Loading3', 'Loading3', 'Loading3'],
        ['Loading4', 'Loading4', 'Loading4', 'Loading4'],
        ['Loading3', 'Loading3', 'Loading3'],
        ['Loading4', 'Loading4', 'Loading4', 'Loading4'],
        ['Loading3', 'Loading3', 'Loading3'],
        ['Loading4', 'Loading4', 'Loading4', 'Loading4'],
      ];
    }

    return (
      <div>
        <Table>
          <tbody>
            <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
            { spreadsheetValues.map((row, i) => {
              if (i < 2) {
                return false;
              }
              const { categoryDisplay } = this.state;
              if (categoryDisplay === 'all') {
                return (
                  <tr id={`row_${i}`} key={this.newCategoryKey++}>
                    { row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={this.newCategoryKey++}
                          >
                            {column}
                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        c
                        ategoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              } if (row.length === categoryDisplay) {
                return (
                  <tr id={`row_${i}`} key={this.newCategoryKey++}>
                    { row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={this.newCategoryKey++}
                          >
                            {column}
                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              }
              return false;
            }
            )}
          </tbody>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="displayOptions">
          <span className="displayText">Display: </span>
          <DisplayButton onClick={() => this.handleDisplayClick(3)}>Uncategorized</DisplayButton>
          <DisplayButton onClick={() => this.handleDisplayClick(4)}>Categorized</DisplayButton>
          <DisplayButton onClick={() => this.handleDisplayClick('all')}>All</DisplayButton>
        </div>
        {this.csvReturn()}
        <PaginationOutlined />
        <style>{
          `
          .displayOptions {
            // position: relative;
            // bottom: 60px;
            margin: 8px;
            text-align: center;
          }
          .displayText {
            font-weight: 600;
            color: #555555;
          }
          `
        }
        </style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  sheetsReducer: state.sheetsReducer,
});

export default connect(mapStateToProps)(Category);
