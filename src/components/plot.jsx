import React, { Component } from "react";
import { getSMAs } from "./../services/fakeSMAService";
import Dropdown from "./common/dropdown";

class Plot extends Component {
  state = {
    smas: getSMAs()
  };

  handleSelect = v => {
    console.log("Select", v);
  };

  handlePlot = () => {
    console.log("Plot");
  };

  render() {
    return (
      <div>
        <Dropdown
          label="SMA"
          data={this.state.smas}
          onChange={this.handleSelect}
        />
        <button onClick={this.handlePlot} className="btn btn-primary">
          Plot
        </button>
      </div>
    );
  }
}

export default Plot;
