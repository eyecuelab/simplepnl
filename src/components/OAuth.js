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
    const { oauthReducer: { agreeToEula } } = this.props;
    if (isSignedIn === true) {
      return (
        <div>
          <Link to="/reports">
            <NextButton>
              Let&apos;s get started!
            </NextButton>
          </Link>
        </div>
      );
    } if (agreeToEula === true) {
      return (
        <div>
          <button type="button" id="loginButton" className="customGPlusSignIn">Sign in with Google</button>
          <style>
            {
              `
              #loginButton {
                background-color: white;
                text-align: center;
                margin: auto;
                padding: 0px;
                border: 0px;
                height: 50px;
                width: 270px;

                /* offset-x | offset-y | blur-radius | spread-radius | color */
                // -webkit-box-shadow: none !important;
                // box-shadow: none !important;

                -webkit-box-shadow: 0px 2px 5px 1px rgba(153, 215, 236, .7) !important;
                box-shadow: 0px 2px 5px 1px rgba(153, 215, 236, .7) !important;
              }

              .abcRioButton {
                -webkit-box-shadow: none !important;
                box-shadow: none !important;
              }

              .abcRioButton:hover {
                -webkit-box-shadow: none !important;
                box-shadow: none !important;
              }
              `
            }
          </style>
        </div>
      );
    }
    const hideLoginButtonForOAuthCheck = { display: 'none' };
    return (
      <div>
        <Link to="/eula">
          <NextButton>
            Let&apos;s get started!
            <span id="loginButton" style={hideLoginButtonForOAuthCheck}>loading</span>
          </NextButton>
        </Link>
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
  // ...state,
  oauthReducer: state.oauthReducer,

});

export default connect(mapStateToProps)(OAuth);
