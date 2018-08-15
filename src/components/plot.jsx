import React, { Component } from "react";
import { getSMAs } from "./../services/fakeSMAService";

class Plot extends Component {
  state = {
    smas: getSMAs()
  };

  handlePlot = () => {
    console.log("Plot");
  };

  render() {
    return (
      <div>
        <h1>Plot</h1>
        <label htmlFor="sma">SMA</label>

        <select id="sma" className="form-control form-control-sm col-sm-3">
          {this.state.smas.map(sma => (
            <option key={sma.id}>
              {sma.sma} - {sma.title}
            </option>
          ))}
        </select>
        <button onClick={this.handlePlot} className="btn btn-primary">
          Plot
        </button>
      </div>
    );
  }
}

export default Plot;
