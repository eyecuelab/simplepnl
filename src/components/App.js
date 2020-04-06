import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";


function App() {
  return (
    <div className="App">

    <div className="appHeader">
      <Header />
    </div>

    <div className="appBody">

      <Switch>
        <Route exact path="/" render={() => (<Home />)} />

        <Route path="/x" render={() => <Home />} />
      </Switch>
    </div>

    <style>{`
      html {
        background: url(background.png);
        background-size: cover;
      }



      .App {
        overflow: hidden;
      }
      `}</style>

    </div>
  );
}

export default App;
