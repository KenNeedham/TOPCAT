import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Plot from "./components/plot";
import Status from "./components/status";
import Log from "./components/log";
import LogDetails from "./components/logDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/plot" component={Plot} />
            <Route path="/status" component={Status} />
            <Route path="/log/:id" component={LogDetails} />
            <Route path="/log" component={Log} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/plot" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
