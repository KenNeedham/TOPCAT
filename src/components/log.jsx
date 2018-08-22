import React, { Component } from "react";
import ReactModal from "react-modal";
import _ from "lodash";
import { getLogs } from "./../services/fakeLogService";
import Table from "./common/table";

class Logs extends Component {
  state = {
    logs: [],
    log: {},
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "sma2", order: "asc" },
    showDetails: false
  };

  columns = [
    { path: "sma2", label: "SMA" },
    { path: "subproc", label: "Dataset" },
    { path: "timestamp", label: "Updated" },
    {
      key: "details",
      content: log => (
        <button onClick={() => this.showModal(log)} className="btn btn-link">
          Details
        </button>
      )
    }
  ];

  logCols = [
    { path: "equipno", label: "EquipNo" },
    { path: "lcscode", label: "LCS" },
    { path: "description", label: "Error" }
  ];

  async componentDidMount() {
    const logs = await getLogs();
    this.setState({ logs });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getData = () => {
    return _.orderBy(
      this.state.logs,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
  };

  showModal = log => {
    this.setState({ showDetails: true, log });
  };

  hideModal = () => {
    console.log("hide");
    this.setState({ showDetails: false });
  };

  getLog = () => {
    return this.state.log;
  };

  render() {
    const { timestamp, sma2, subproc, logentries } = this.state.log;

    return (
      <div>
        <Table
          columns={this.columns}
          data={this.getData()}
          sortColumn={this.state.sortColumn}
          onSort={this.handleSort}
        />
        <ReactModal
          isOpen={this.state.showDetails}
          contentLabel="Log Details"
          style={{
            content: {
              top: "10%",
              left: "10%",
              right: "10%",
              bottom: "10%",
              background: "#eee"
            }
          }}
        >
          <div className="modal-title">
            <div className="modal-body">
              {timestamp}
              <br />
              SMA: {sma2}
              <br />
              Dataset: {subproc}
              <br />
            </div>
            <Table
              columns={this.logCols}
              data={logentries}
              sortColumn="timestamp"
            />
          </div>
          <button onClick={this.hideModal}>Close</button>
        </ReactModal>
      </div>
    );
  }
}

export default Logs;
