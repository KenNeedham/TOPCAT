import React, { Component } from "react";
import _ from "lodash";
import { getStatuses } from "./../services/fakeMetadataService";
import Table from "./common/table";

class Status extends Component {
  state = {
    statuses: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "sma", order: "asc" }
  };

  columns = [
    { path: "sma", label: "SMA" },
    { path: "ssma", label: "SSMA" },
    { path: "dataset", label: "Dataset" },
    { path: "updated", label: "Updated" }
  ];

  async componentDidMount() {
    const statuses = await getStatuses();
    this.setState({ statuses });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getData = () => {
    return _.orderBy(
      this.state.statuses,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
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
      </div>
    );
  }
}

export default Status;
