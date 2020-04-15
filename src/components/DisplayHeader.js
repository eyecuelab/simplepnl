import React, { Component } from 'react';
import { connect } from 'react-redux';


class DisplayHeader extends Component {
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
    }

    csvReturn() {
        const {csv} = this.props
        return(
            <table style={table}>
                <tbody>
                     {
                      csv.slice(0, 3).map((row, i) =>(
                               <tr key={i}>
                                   {
                                       row.data.map((column,j) =>
                                   <td style={rows} key={j}>{column}</td>
                                       )
                                
                                   }
                               </tr>
                            ))
                         }
                    </tbody>
                </table>
        )
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
    marginBottom: '50px'
}

const rows = {
    borderBottom: '1px solid rgba(0,0,0,.1)',
    padding: '5px',
    fontSize: '15px'
}

const mapStateToProps = (state) => ({
    csv: state.csvReducer.payload
});

export default connect(mapStateToProps)(DisplayHeader)