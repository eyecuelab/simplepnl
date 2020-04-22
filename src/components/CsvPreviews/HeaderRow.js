import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvHeader } from '../../actions';

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.newHeaderKey = 0;
  }

  handleClick(event) {
    const cell = event.currentTarget.className.split(' ');
    const row = cell[0];
    const { dispatch } = this.props;
    dispatch(setCsvHeader(row));

    const tableCells = document.querySelectorAll('.tableCell');
    tableCells.forEach((everyCell) => {
      everyCell.style.backgroundColor = '#ffffff'; // eslint-disable-line no-param-reassign
    });

    const selectedCells = document.querySelectorAll(`.${row}`);
    selectedCells.forEach((selectedCell) => {
      selectedCell.style.backgroundColor = '#99D7EC'; // eslint-disable-line no-param-reassign
    });
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
            csv.slice(0, 3).map((row, i) => (
              <tr
                id={`row_${i}`}
                key={this.newHeaderKey++}
              >
                {
                  row.data.map((column, j) => (
                    <td
                      id={`row_${i}-column_${j}`}
                      role="presentation"
                      className={`row_${i} column_${j} tableCell`}
                      style={rows}
                      key={this.newHeaderKey++}
                    >
                      <button
                        type="button"
                        style={{ border: 'none', backgroundColor: 'white' }}
                        className={`row_${i} column_${j} tableCell`}
                        onClick={this.handleClick}
                        onKeyPress={this.handleClick}
                      >
                        {column}
                      </button>
                    </td>
                  ))

                }
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
  fontSize: '15px',
};

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  csvHeader: state.csvHeader,
});

export default connect(mapStateToProps)(HeaderRow);
