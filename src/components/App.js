import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
    return (
      <div className="container">
        <div className="appHeader">
          <Header />
        </div>
        <div className="appBody">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/eula" render={() => <Eula />} />
            <Route path="/newpnl" render={() => <NewPnl />} />
            <Route path="/reports" render={() => <Reports />} />
            <Route path="/help" render={() => <Help />} />
            <Route path="/selectdate" render={() => <SelectDate />} />
            <Route path="/selectdescription" render={() => <SelectDescription />} />
            <Route path="/reportslist" render={() => <ReportsList />} />
            <Route path="/selectheader" render={() => <SelectHeader />} />
            <Route path="/selectamount" render={() => <SelectAmount />} />
            <Route path="/selectcategory" render={() => <SelectCategory />} />
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
