import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // row: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.newKey = 0;
  }

  //   handleClick(e) {
  //     console.log(e.currentTarget.className)
  //     const row = e.currentTarget.className.split(' ')
  //     console.log(row)
  //     const test = document.querySelector(`.${row[0]}`)
  //     test.style.color = 'green'
  //     this.setState({
  //       headerRow: row[0]
  //         // column:!this.state.column
  //     })
  // }

  // handleClick() {
  //     this.setState({
  //         row:!this.state.row
  //     })
  // }

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
                  // onClick={this.handleClick}
                  // className={this.state.row ? 'rowTrue': "rowFalse"}
                  id={`row_${i}`}
                  key={this.newKey++}
                >
                  {
                    row.data.map((column, j) => (
                      <td
                        id={`row_${i}-column_${j}`}
                          // className={`row_${i} column_${j}`}
                        style={rows}
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

const rows = {
  borderBottom: '1px solid rgba(0,0,0,.1)',
  padding: '5px',
  fontSize: '15px',
};

const mapStateToProps = (state) => ({
  csv: state.csvReducer.payload,
});

export default connect(mapStateToProps)(HeaderRow);
