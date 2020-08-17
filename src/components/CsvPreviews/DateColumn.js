import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvDate } from '../../actions';
import { Table2, Cell } from '../../styles/components';

class DateColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateColumnSelected: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.newDateKey = 0;
  }

  handleClick(event) {
    const cell = event.currentTarget.className.split(' ');
    const column = cell[1];

    this.setState({
      dateColumnSelected: column,
    });

    const { dispatch } = this.props;
    dispatch(setCsvDate(column));
  }

  handleOnMouseOver(event) {
    const cell = event.currentTarget.className.split(' ');
    const column = cell[1];

    const tableCells = document.querySelectorAll('.tableCell');
    tableCells.forEach((everyCell) => {
      everyCell.style.backgroundColor = '#ffffff'; // eslint-disable-line no-param-reassign
    });

    const selectedCells1 = document.querySelectorAll(`.${column}`);
    selectedCells1.forEach((selectedCell1) => {
      selectedCell1.style.backgroundColor = '#999999'; // eslint-disable-line no-param-reassign
    });

    const { dateColumnSelected } = this.state;
    const selectedCells2 = document.querySelectorAll(`.${dateColumnSelected}`);
    selectedCells2.forEach((selectedCell2) => {
      selectedCell2.style.backgroundColor = '#ea475b'; // eslint-disable-line no-param-reassign
    });
  }

  csvReturn() {
    const { csv } = this.props;
    if (!csv) {
      return (
        <div>
          <h5>
            Whoops forgot to upload a CSV...
            <br /> We better add a check for that!
          </h5>
          <hr />
        </div>
      );
    }

    return (
      <Table2>
        <tbody>
          {csv.slice(0, 3).map((row, i) => (
            <tr id={`row_${i}`} key={this.newDateKey++}>
              {row.data.map((column, j) => (
                <Cell
                  id={`row_${i}-column_${j}`}
                  role="presentation"
                  className={`row_${i} column_${j} tableCell`}
                  key={this.newDateKey++}
                >
                  <button
                    type="button"
                    style={{ border: 'none', backgroundColor: 'white', padding: '0px' }}
                    className={`row_${i} column_${j} tableCell`}
                    onClick={this.handleClick}
                    onKeyPress={this.handleClick}
                    onMouseOver={this.handleOnMouseOver}
                    onFocus={this.handleOnMouseOver}
                  >
                    {column}
                  </button>
                </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table2>
    );
  }

  render() {
    return <div>{this.csvReturn()}</div>;
  }
}

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  csvDate: state.csvDate,
});

export default connect(mapStateToProps)(DateColumn);
