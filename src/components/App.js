import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import Loading from './Loading';
import Home from './Home';
import Eula from './Eula';
import Privacy from './Privacy';
import Reports from './Reports';
import NewPnl from './NewPnl';
import Help from './Help';
import SelectDate from './SelectDate';
import SelectDescription from './SelectDescription';
import SelectHeader from './SelectHeader';
import SelectAmount from './SelectAmount';
import SelectAmountDebit from './SelectAmountDebit';
import SelectAmountCredit from './SelectAmountCredit';
import SelectAmount1or2 from './SelectAmount1or2';
import SelectCategory from './SelectCategory';
// import Demo from './Demo';

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => (
  <Route
    path={path}
    {...rest}
    render={(props) => (loggedIn ? (
      <Comp {...props} />
    ) : (
      <Redirect to={{ pathname: '/' }} />
    ))}
  />
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSignedIn: props.isSignedIn,
      // currentUser: props.currentUser,
      // err: props.err,
      // access_token: props.access_token,
    };
  }


  render() {
    const { oauthReducer: { isSignedIn } } = this.props;

    return (
      <div className="container">
        <div className="appHeader">
          <Header />
          <Loading />
        </div>
        <div className="appBody">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/eula" component={Eula} />
            <Route exact path="/privacy" component={Privacy} />
            <ProtectedRoute path="/newpnl" loggedIn={isSignedIn} component={NewPnl} />
            <ProtectedRoute path="/reports" loggedIn={isSignedIn} component={Reports} />
            <ProtectedRoute path="/help" loggedIn={isSignedIn} component={Help} />
            <ProtectedRoute path="/selectheader" loggedIn={isSignedIn} component={SelectHeader} />
            <ProtectedRoute path="/selectdate" loggedIn={isSignedIn} component={SelectDate} />
            <ProtectedRoute path="/selectdescription" loggedIn={isSignedIn} component={SelectDescription} />
            <ProtectedRoute path="/selectamount1or2" loggedIn={isSignedIn} component={SelectAmount1or2} />
            <ProtectedRoute path="/selectamount" loggedIn={isSignedIn} component={SelectAmount} />
            <ProtectedRoute path="/selectamountdebit" loggedIn={isSignedIn} component={SelectAmountDebit} />
            <ProtectedRoute path="/selectamountcredit" loggedIn={isSignedIn} component={SelectAmountCredit} />
            <ProtectedRoute path="/selectcategory" loggedIn={isSignedIn} component={SelectCategory} />
          </Switch>

          {/* <Demo /> */}

        </div>
        <style>{`
            body {
              background: url(background.png);
              background-size: cover;
            }
            .appBody {
              // overflow: auto;
            }
            `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(App);
