import React from "react";
import { Switch, Route } from "react-router-dom";
import ReviewTable from "./reviewTable";
import LiveTable from "./liveTable";
import ClosedTable from "./closedTable";
import ReportedTable from "./reportedTable";
import RejectedTable from "./rejectedTable";

const Table = () => {
  return (
    <Switch>
      <Route exact path="/internships" component={ReviewTable} />
      <Route exact path="/internships/live" component={LiveTable} />
      <Route exact path="/internships/closed" component={ClosedTable} />
      <Route exact path="/internships/reported" component={ReportedTable} />
      <Route exact path="/internships/rejected" component={RejectedTable} />
    </Switch>
  );
};

export default Table;
