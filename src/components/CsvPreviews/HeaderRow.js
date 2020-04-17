import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCsvHeader } from '../../actions';

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.newKey = 0;
  }

  handleClick(event) {
    const cell = event.currentTarget.className.split(' ')
    const row = cell[0]
    const { dispatch } = this.props;
    dispatch(setCsvHeader(row));

    const tableCells = document.querySelectorAll(".tableCell")
    tableCells.forEach(everyCell => {
      everyCell.style.backgroundColor = '#ffffff';
    });

    const selectedCells = document.querySelectorAll(`.${row}`)
    selectedCells.forEach(selectedCell => {
      selectedCell.style.backgroundColor = '#99D7EC';
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

      <table>
        <tbody>
          {
            csv.slice(0, 3).map((row, i) => (
              <tr
                id={`row_${i}`}
                key={this.newKey++}
                >
                {
                  row.data.map((column, j) => (
                    <td
                      id={`row_${i}-column_${j}`}
                      onClick={this.handleClick}
                      className={`row_${i} column_${j} tableCell`}
                      // style={{backgroundColor: this.state.highlightColor}}
                      key={this.newKey++}
                      >{column}
                    </td>
                  ))

                }
              </tr>
            ))
          }
        </tbody>
      </table>

      //   <table style={table}>
      //     <tbody>
      //       {
      //           csv.slice(0, 4).map((row, i) => (
      //             <tr id={`row_${i}`} key={this.newKey++}>
      //               {
      //                 row.data.map((column, j) => (
      //                   <td onClick={() => this.onColumnClick(column, j)}
      //                       id={`row_${i}-column_${j}`}
      //                       className={this.state.selectedItemIndex== column.j? 'hover': null}
      //                       style={rows}
      //                       key={this.newKey++}>{column}</td>
      //                 ))

      //               }
      //             </tr>
      //           ))
      //         }
      //     </tbody>
      //   </table>
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

// const rows = {
//   borderBottom: '1px solid rgba(0,0,0,.1)',
//   padding: '5px',
//   fontSize: '15px',
// };

const mapStateToProps = (state) => ({
  csv: state.csvReducer.payload,
  csvHeader: state.csvHeader,
});

export default connect(mapStateToProps)(HeaderRow);
