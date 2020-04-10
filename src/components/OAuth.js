import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// function NotSignedIn() {
//     return (
//       <div>
//         <p>You are not signed in. Click here to sign in.</p>
//         <button id="loginButton">Login with Google</button>
//       </div>
//     )
//   }
  
//   function Members() {
//     return (
//       <p>hello user, you're signed in </p>
//     )
//   }

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

class OAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: false,
        }
   }

  componentDidMount() {
    const successCallback = this.onSuccess.bind(this);
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: `${CLIENT_ID}`,
      });

      this.auth2.then(() => {
        this.setState({
            isSignedIn: this.auth2.isSignedIn.get(),
        });
      });
    })
  
      window.gapi.load('signin2', function() {
        var opts = {
          width: 200,
          height: 50,
          onSuccess: this.successCallback
        }
        gapi.signin2.render('loginButton', opts)
      })
  }

  onSuccess() {
    this.setState({
      isSignedIn: true
    })
  }
  
    getContent() {
        if (this.state.isSignedIn) {
          return <p>hello user, you're signed in </p>
        } else {
          return (
            <div>
              <p>You are not signed in. Click here to sign in.</p>
              <button id="loginButton">Login with Google</button>
            </div>
          )
        }
      
      }
      
      render() {
        return (      
          <div>
              {/* <Route exact path="/" render={this.authCheck.bind(this, Home)}/> */}
              {this.getContent()}           
          </div>
        );
      }
}

export default OAuth;