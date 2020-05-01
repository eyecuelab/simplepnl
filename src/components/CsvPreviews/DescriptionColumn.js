import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvDescription } from '../../actions';
import { Table, Cell } from '../../styles/components';

class DescriptionColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.newDescriptionKey = 0;
  }

  handleClick(event) {
    const cell = event.currentTarget.className.split(' ');
    const column = cell[1];
    const { dispatch } = this.props;
    dispatch(setCsvDescription(column));

    const tableCells = document.querySelectorAll('.tableCell');
    tableCells.forEach((everyCell) => {
      everyCell.style.backgroundColor = '#ffffff'; // eslint-disable-line no-param-reassign
    });

    const selectedCells = document.querySelectorAll(`.${column}`);
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
            Whoops forgot to upload a CSV...
            <br /> We better add a check for that!
          </h5>
          <hr />
        </div>
      );
    }

    return (
      <Table>
        <tbody>
          {
            csv.slice(0, 3).map((row, i) => (
              <tr
                id={`row_${i}`}
                key={this.newDescriptionKey++}
              >
                {
                  row.data.map((column, j) => (
                    <Cell
                      id={`row_${i}-column_${j}`}
                      role="presentation"
                      className={`row_${i} column_${j} tableCell`}
                      key={this.newDescriptionKey++}
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
    return (
      <div>
        {this.csvReturn()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  csv: state.csvReducer.csvRawData,
  csvDescription: state.csvDescription,
});

export default connect(mapStateToProps)(DescriptionColumn);
