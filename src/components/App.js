import React from "react";
import logo from "./../logo.svg";
import "./../App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Eula from "./Eula";
import Demo from "./Demo";

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <Header />
      </div>
      <div className="appBody">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/eula" render={() => <Eula />} />
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
