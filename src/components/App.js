import React from "react";
import "./../App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Eula from "./Eula";
import Reports from "./Reports";
import ReportsList from "./ReportsList";
import Demo from "./Demo";
import NewPnl from "./NewPnl";
import SelectHeader from "./SelectHeader";
import SelectAmount from "./SelectAmount";
import SelectCategory from "./SelectCategory";

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
      `}</style>
    </div>
  );
}

export default App;
