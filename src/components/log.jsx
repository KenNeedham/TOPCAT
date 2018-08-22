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
        <button onClick={this.showModal} className="btn btn-link">
          Details
        </button>
      )
    }
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

  showModal = e => {
    console.log("show", e);
    this.setState({ showDetails: true });
  };

  hideModal = () => {
    console.log("hide");
    this.setState({ showDetails: false });
  };

  getLog = sma2 => {
    return this.state.logs.find(l => l.sma2 === sma2);
  };

  render() {
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
          className="logDetails"
        >
          <div className="modal-title">
            Log details
            <div className="modal-body">Blah blah blah</div>
          </div>
          <button onClick={this.hideModal}>Close</button>
        </ReactModal>
      </div>
    );
  }
}

export default Logs;
