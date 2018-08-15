import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Plot from "./components/plot";
import Status from "./components/status";
import Log from "./components/log";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Route path="/plot" component={Plot} />
          <Route path="/status" component={Status} />
          <Route path="/log" component={Log} />
        </div>
      </div>
    );
  }
}

export default App;
