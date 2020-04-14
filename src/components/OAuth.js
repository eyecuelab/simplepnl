/* global gapi */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NextButton } from '../styles/components';
import { setToken } from '../actions';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

// Array of API discovery doc URLs for APIs used by the quickstart:
const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

// Authorization scopes required by the API; multiple scopes can be included, separated by spaces:
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

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
      console.log(`isSignedIn: ${this.auth2.isSignedIn.get()}`);


      this.auth2.then(() => {
        // this.setState({
        //   isSignedIn: this.auth2.isSignedIn.get(),
        // });
        console.log(`isSignedIn: ${this.auth2.isSignedIn.get()}`);
      });
    });

    window.gapi.load('signin2', () => {
      const opts = {
        width: 200,
        height: 50,
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
          <h4>You&apos;re all signed in:</h4>

          <Link to="/reports">
            <NextButton>
              Let&apos;s make some reports!
            </NextButton>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h6>Click below to sign in:</h6>
        <button type="button" id="loginButton">Login with Google</button>
        <style>
          {
            `
              #loginButton {
                padding: 0px;
                margin: 0px;
                border: 0px;
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
