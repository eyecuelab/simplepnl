import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import Home from './Home';
import Eula from './Eula';
import Reports from './Reports';
import ReportsList from './ReportsList';
import Demo from './Demo';
import NewPnl from './NewPnl';
import Help from './Help';
import SelectDate from './SelectDate';
import SelectDescription from './SelectDescription';
import SelectHeader from './SelectHeader';
import SelectAmount from './SelectAmount';
import SelectCategory from './SelectCategory';

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
    const { isSignedIn } = this.props;

    return (
      <div className="container">
        <div className="appHeader">
          <Header />
        </div>
        <div className="appBody">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/eula" component={Eula} />
            <ProtectedRoute path="/newpnl" loggedIn={isSignedIn} component={NewPnl} />
            <ProtectedRoute path="/reports" loggedIn={isSignedIn} component={Reports} />
            <ProtectedRoute path="/help" loggedIn={isSignedIn} component={Help} />
            <ProtectedRoute path="/selectheader" loggedIn={isSignedIn} component={SelectHeader} />
            <ProtectedRoute path="/selectdate" loggedIn={isSignedIn} component={SelectDate} />
            <ProtectedRoute path="/selectdescription" loggedIn={isSignedIn} component={SelectDescription} />
            <ProtectedRoute path="/selectamount" loggedIn={isSignedIn} component={SelectAmount} />
            <ProtectedRoute path="/selectcategory" loggedIn={isSignedIn} component={SelectCategory} />
            <ProtectedRoute path="/reportslist" loggedIn={isSignedIn} component={ReportsList} />
          </Switch>

          <Demo />

        </div>
        <style>{`
            body {
              background: url(background.png);
              background-size: cover;
            }
            .appBody {
              overflow: auto;
              max-height: 80vh;
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
