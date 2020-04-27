import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComboBox from '../../utils/ComboBox';
import PaginationOutlined from '../../utils/Pagination';
import { Table } from '../../styles/components';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.newCategoryKey = 0;
  }

  csvReturn() {
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
          {
                  csv.slice(0, 6).map((row, i) => (
                    <tr id={`row_${i}`} key={this.newCategoryKey++}>
                      {
                        row.data.map((column, j) => (
                          <td id={`row_${i}-column_${j}`} style={rows} key={this.newCategoryKey++}>{column}</td>
                        ))

                      }
                      <ComboBox />
                    </tr>
                  ))
                }
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <h6>`DEV NOTE: nix Category.js and revert to SelectCategory.js component w/api call.`</h6>
        {this.csvReturn()}
        <PaginationOutlined />
      </div>
    );
  }
}

const rows = {
  padding: '10px',
  fontSize: '20px',
};

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  sheetsReducer: state.sheetsReducer,
});

export default connect(mapStateToProps)(Category);
