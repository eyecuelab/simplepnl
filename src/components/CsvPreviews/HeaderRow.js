import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvHeader, shrinkCsvToHeader } from '../../actions';

import { Table, Cell, ProblemButton } from '../../styles/components';

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerRowSpan: 3,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleMoreRowsClick = this.handleMoreRowsClick.bind(this);
    this.newHeaderKey = 0;
  }

  handleMoreRowsClick() {
    const { headerRowSpan } = this.state;
    if (headerRowSpan === 3) {
      this.setState({
        headerRowSpan: 9,
      });
    } else {
      const { dispatch, history } = this.props;
      dispatch(setCsvHeader('row_none'));
      dispatch(shrinkCsvToHeader('row_none'));
      history.push('/selectdate');
    }
  }


  handleButtonClick(event) {
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
    const { headerRowSpan } = this.state;
    const { csvRawData } = this.props;
    if (!csvRawData) {
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
            csvRawData.slice(0, headerRowSpan).map((row, i) => (
              <tr
                id={`row_${i}`}
                key={this.newHeaderKey++}
              >
                {
                  row.data.map((column, j) => (
                    <Cell
                      id={`row_${i}-column_${j}`}
                      role="presentation"
                      className={`row_${i} column_${j} tableCell`}
                      key={this.newHeaderKey++}
                    >
                      <button
                        type="button"
                        style={{ border: 'none', backgroundColor: 'white', padding: '0px' }}
                        className={`row_${i} column_${j} tableCell`}
                        onClick={this.handleButtonClick}
                        onKeyPress={this.handleButtonClick}
                      >
                        {column}
                      </button>
                    </Cell>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }

  render() {
    const { headerRowSpan } = this.state;

    return (
      <div>
        {this.csvReturn()}

        <ProblemButton
          onClick={this.handleMoreRowsClick}
          onKeyPress={this.handleMoreRowsClick}
        >
          {headerRowSpan === 3 ? 'Wait, what header?' : 'Still nothing? No problem. Click here!'}
        </ProblemButton>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  csvRawData: state.csvReducer.csvRawData,
  csvHeader: state.csvHeader,
});

export default connect(mapStateToProps)(HeaderRow);
