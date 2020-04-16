import React, { Component } from 'react';
import { connect } from 'react-redux';

class DateColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.dateKey = 0;
  }


  csvReturn() {
    const { csv } = this.props;
    return (
      <table style={table}>
        <tbody>
          {
                         csv.slice(0, 3).map((row, i) => (
                           <tr id={`row_${i}`} key={this.dateKey++}>
                             {
                                row.data.map((column, j) => (
                                  <td id={`row_${i}-column_${j}`} style={rows} key={this.dateKey++}>{column}</td>
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

export default connect(mapStateToProps)(DateColumn);
