/* global gapi */

import React, {Component} from 'react';
import { connect } from 'react-redux';

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
      isSignedIn: false,
      access_token: null,
      googleUser: "",
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

  onSuccess() {
    console.log('Grool!');
    // access_token: this.auth2.currentUser.get().tc.access_token,
    // googleUser: this.auth2.currentUser.get().Pt.Ad,
    this.setState({
      googleUser: this.auth2.currentUser.get().Pt.Ad,
      access_token: this.auth2.currentUser.get().tc.access_token,
    });

    console.log(this.auth2.currentUser.get());
    console.log(`googleUser: ${this.auth2.currentUser.get().Pt.Ad}`);
    console.log(`access_token: ${this.auth2.currentUser.get().tc.access_token}`);

  }

  getContent() {
    if (this.state.isSignedIn) {
      return <p>hello user, you're signed in </p>
    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
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

export default OAuth;
