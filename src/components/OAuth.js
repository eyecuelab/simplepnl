/* global gapi */

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NextButton } from '../styles/components.js';
import { setToken } from "./../actions";



const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

// Array of API discovery doc URLs for APIs used by the quickstart:
const DISCOVERY_DOCS = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";

// Authorization scopes required by the API; multiple scopes can be included, separated by spaces:
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

class OAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: this.props.isSignedIn,
      // access_token: null,
      // currentUser: "",
      err: null,
    };
  };

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
        console.log("TRIGGER on init");
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
        console.log(`isSignedIn: ${this.auth2.isSignedIn.get()}`);
      });
    })

    window.gapi.load('signin2', function() {
      var opts = {
        width: 200,
        height: 50,
        onsuccess: successCallback

      }
      gapi.signin2.render('loginButton', opts)
    })
  }

  onSuccess(props) {
    // update local state:
    this.setState({
      isSignedIn: true,
      err: null
    })

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
    this.setState({
      isSignedIn: false,
      error: err,
    });
  }

  getContent() {
    if (this.props.isSignedIn) {
      return <div>
        <h4>You're all signed in:</h4>

        <Link to="/reports">
          <NextButton>
            Let's see them reports!
          </NextButton>
        </Link>
      </div>

    } else {
      return (
        <div>
          <h6>Click below to sign in:</h6>
          <button id="loginButton">Login with Google</button>
          <style>
            {
              `
              #loginButton {
                margin: 0px;
                padding: 0px;
                border: 0px;
                border-radius: 5px;
              }
              `
            }
          </style>
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

OAuth = connect(mapStateToProps)(OAuth);

export default OAuth;
