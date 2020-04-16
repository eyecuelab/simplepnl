import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // reportName: null,
            // headerRow: null,
            // dateColumn: null,
            // descriptionColumn: null,
            // twoAmountCoulumns: false,
            // amountColumn: null,
            // creditColumn: null,
            // debitColumn: null,
        };
        this.newKey = 0;
    }

    // highlightClass = (id) => {
    //     this.setState({ selectedItemIndex: id });
    // };

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
              csv.slice(0, 4).map((row, i) => (
                <tr id={`row_${i}`} key={this.newKey++}>
                  {
                    row.data.map((column, j) => (
                      <td id={`row_${i}-column_${j}`} style={rows} key={this.newKey++}>{column}</td>
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
  csv: state.csvReducer.payload,
});

export default connect(mapStateToProps)(HeaderRow)
