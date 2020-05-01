import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Cell } from '../../styles/components';


class AmountColumnPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.newAmountKey = 0;
  }


  csvReturn() {
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
            csvRawData.slice(0, 3).map((row, i) => (
              <tr
                id={`row_${i}`}
                key={this.newAmountKey++}
              >
                {
                  row.data.map((column, j) => (
                    <Cell
                      id={`row_${i}-column_${j}`}
                      role="presentation"
                      className={`row_${i} column_${j} tableCell`}
                      key={this.newAmountKey++}
                    >
                      {column}
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
  csvRawData: state.csvReducer.csvRawData,
  csvAmount: state.csvAmount,
});

export default connect(mapStateToProps)(AmountColumnPreview);
