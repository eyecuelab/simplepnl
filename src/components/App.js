import React from "react";
import "./../App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Eula from "./Eula";
import Reports from "./Reports";
// import ReportsList from "./ReportsList";
import Demo from "./Demo";
import NewPnl from "./NewPnl";
import Help from "./Help";
import SelectDate from "./SelectDate";
import SelectDescription from "./SelectDescription";

function App() {
  return (
    <div className="container">
      <div className="appHeader">
        <Header />
      </div>
      <div className="appBody">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/eula" render={() => <Eula />} />
          <Route path="/newpnl" render={() => <NewPnl/> } />
          <Route path="/reports" render={() => <Reports />} />
          <Route path="/help" render={() => <Help />} />
          <Route path="/selectdate" render={() => <SelectDate />} />
          <Route path="/selectdescription" render={() => <SelectDescription /> } />
          
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
      `}</style>
    </div>
  );
}

export default App;
