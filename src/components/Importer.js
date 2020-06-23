import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSVReader } from 'react-papaparse';
import { loadCSV } from '../actions';

class Importer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnDrop = (data) => {
    // console.log(data);
    const payload = {
      csvRawData: data,
    };
    const { dispatch } = this.props;
    dispatch(loadCSV(payload));
  };

  handleOnError = (err) => {
    console.log(err);
  };

  //   handleOnError = (err, file, inputElem, reason) => {
  //     console.log(err);
  //   };

  handleOnRemoveFile = (data) => {
    console.log(data);
  };

  render() {
    return (
      <CSVReader
        style={importer}
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Drag CSV file here (or click) to upload.</span>
      </CSVReader>
    );
  }
}

const importer = {
  marginBottom: '50px',
  border: '0',
  fontWeight: '500',
  color: '#999999',
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Importer);
