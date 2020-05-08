/* global gapi */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NextButton } from '../styles/components';
import { setToken } from '../actions';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

// Array of API discovery doc URLs for APIs used by the quickstart:
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest', 'https://sheets.googleapis.com/$discovery/rest?version=v4'];

// Authorization scopes required by the API; multiple scopes can be included, separated by spaces:
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

class OAuth extends Component {
  constructor(props) {
    super(props);
    // const { isSignedIn } = this.props;
    this.state = {
      // isSignedIn: false,
      // access_token: null,
      // currentUser: "",
      // err: null,
    };
  }

  componentDidMount() {
    const successCallback = this.onSuccess.bind(this);
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        apiKey: `${API_KEY}`,
        client_id: `${CLIENT_ID}`,
        discoveryDocs: `${DISCOVERY_DOCS}`,
        scope: `${SCOPES}`,
      });
      this.auth2.then(() => {
        // this.setState({
        //   isSignedIn: this.auth2.isSignedIn.get(),
        // });
      });
    });

    window.gapi.load('signin2', () => {
      const opts = {
        width: 270,
        height: 50,
        longtitle: true,
        onsuccess: successCallback,
      };
      gapi.signin2.render('loginButton', opts);
    });
  }

  onSuccess() {
    // update local state:
    // this.setState({
    //   isSignedIn: true,
    //   err: null,
    // });

    // send to Redux store:
    const payload = {
      access_token: this.auth2.currentUser.get().getAuthResponse().access_token,
      currentUser: this.auth2.currentUser.get().getBasicProfile().getName(),
      err: null,
      isSignedIn: this.auth2.isSignedIn.get(),
    };
    const { dispatch } = this.props;
    dispatch(setToken(payload));
  }

  onLoginFailed(err) {
    // this.setState({
    //   isSignedIn: false,
    //   error: err,
    // });

    const payload = {
      access_token: 'error',
      currentUser: 'error',
      err,
      isSignedIn: 'error',
    };
    const { dispatch } = this.props;
    dispatch(setToken(payload));
  }

  getContent() {
    const { oauthReducer: { isSignedIn } } = this.props;
    if (isSignedIn) {
      return (
        <div>
          <Link to="/reports">
            <NextButton>
              Let&apos;s get started!
            </NextButton>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <button type="button" id="loginButton">Login with Google</button>
        <style>
          {
            `
              #loginButton {
                background-color: white;
                text-align: center;
                // margin-top: 50px;
                // padding: 0px;
                // margin-left: auto;
                margin: auto;
                padding: 0px;
                // padding-right: auto;
                border: 0px;
                height: 50px;
                width: 270px;

                border-radius: 5px;
              }
              `
          }
        </style>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(OAuth);
