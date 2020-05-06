import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvHeader } from '../../actions';
import { Table, Cell, ProblemButton } from '../../styles/components';

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerRowSpan: 3,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMoreRowsClick = this.handleMoreRowsClick.bind(this);
    this.newHeaderKey = 0;
  }

  handleMoreRowsClick() {
    // console.log("props", this.props);
    const { headerRowSpan } = this.state;
    if (headerRowSpan === 3) {
      this.setState({
        headerRowSpan: 9,
      });
    } else {
      const { dispatch, history } = this.props;
      dispatch(setCsvHeader('row_none'));

      history.push('/selectdate');
    }
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
    const { headerRowSpan } = this.state;
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
            csv.slice(0, headerRowSpan).map((row, i) => (
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
                        onClick={this.handleClick}
                        onKeyPress={this.handleClick}
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
  csv: state.csvReducer.csvRawData,
  csvHeader: state.csvHeader,
});

export default connect(mapStateToProps)(HeaderRow);
