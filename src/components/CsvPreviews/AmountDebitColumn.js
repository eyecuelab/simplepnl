import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvAmountDebit } from '../../actions';
import { Table2, Cell } from '../../styles/components';

class AmountDebitColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDebitColumnSelected: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.newAmountKey = 0;
  }

  handleClick(event) {
    const cell = event.currentTarget.className.split(' ');
    const column = cell[1];

    this.setState({
      amountDebitColumnSelected: column,
    });

    const { dispatch } = this.props;
    dispatch(setCsvAmountDebit(column));
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

    const { amountDebitColumnSelected } = this.state;
    const selectedCells2 = document.querySelectorAll(`.${amountDebitColumnSelected}`);
    selectedCells2.forEach((selectedCell2) => {
      selectedCell2.style.backgroundColor = '#ea475b'; // eslint-disable-line no-param-reassign
    });
  }

  csvReturn() {
    const { csvRawData } = this.props;
    if (!csvRawData) {
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
          {csvRawData.slice(0, 3).map((row, i) => (
            <tr id={`row_${i}`} key={this.newAmountKey++}>
              {row.data.map((column, j) => (
                <Cell
                  id={`row_${i}-column_${j}`}
                  role="presentation"
                  className={`row_${i} column_${j} tableCell`}
                  key={this.newAmountKey++}
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
  csvRawData: state.csvReducer.csvRawData,
  csvAmount: state.csvAmount,
});

export default connect(mapStateToProps)(AmountDebitColumn);
