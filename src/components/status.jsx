import React, { Component } from "react";
import { getStatuses } from "./../services/fakeMetadataService";
import Table from "./common/table";

class Status extends Component {
  state = {
    statuses: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "updated", order: "desc" }
  };

  columns = [
    {
      path: "sma",
      label: "SMA"
    },
    { path: "ssma", label: "SSMA" },
    { path: "dataset", label: "Dataset" },
    { path: "updated", label: "Updated" }
  ];

  render() {
    return (
      <div>
        {" "}
        <Table
          columns={this.columns}
          data={this.statuses}
          sortColumn={this.sortColumn}
          onSort={this.onSort}
        />
      </div>
    );
  }
}

export default Status;
