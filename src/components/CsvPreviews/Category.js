import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchCategory from './SearchCategory'

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
      <table style={table}>
        <tbody>
          {
                  csv.slice(0, 8).map((row, i) => (
                    <tr id={`row_${i}`} key={this.newCategoryKey++}>
                      {
                        row.data.map((column, j) => (
                          <td id={`row_${i}-column_${j}`} style={rows} key={this.newCategoryKey++}>{column}</td>
                        ))
                          
                      }
                      <SearchCategory />
                    </tr>
                  ))
                }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h6>`DEV NOTE: nix Category.js and revert to SelectCategory.js component w/api call.`</h6>
        {this.csvReturn()}
      </div>
    );
  }
}

const table = {
  marginBottom: '50px',
};

const rows = {
  borderBottom: '1px solid rgba(0,0,0,.1)',
  padding: '5px',
  fontSize: '13px',
};

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
});

export default connect(mapStateToProps)(Category);
