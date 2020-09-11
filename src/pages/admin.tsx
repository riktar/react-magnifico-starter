import React from 'react';
import {observer} from "mobx-react-lite";
import AdminTemplate from "../components/ui/templates/AdminTemplate";
import {Route, Switch, useRouteMatch} from "react-router";
import AdminDashboard from "./admin/dashboard";

const Admin: React.FC = observer(() => {
  let {path, url} = useRouteMatch();
  return (
    <AdminTemplate>
      <Switch>
        <Route exact path={'/admin'}>
          <AdminDashboard/>
        </Route>
        <Route exact path={`${path}/:topicId`}>
          <h3>Ciao peppe</h3>
        </Route>
      </Switch>
    </AdminTemplate>
  );
})

export default Admin;
