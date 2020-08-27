import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HTTP404 from "./pages/HTTP404";
import routes from "./config/routes";

function Router() {
  const routeComponents = routes.map(({path, component}, key) => {
    return (<Route exact path={path} key={key}>{component}</Route>)
  })
  return (
    <BrowserRouter>
      <Switch>
        {routeComponents}
        <Route path="*">
          <HTTP404/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default Router
