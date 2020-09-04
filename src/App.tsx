import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Http404 from "./pages/http404";
import routes from "./config/routes";


const App = () => {
  const routeComponents = routes.map(({path, component}, key) => {
    return (<Route exact path={path} key={key}>{component}</Route>)
  })
  return (
    <BrowserRouter>
      <Switch>
        {routeComponents}
        <Route path="*">
          <Http404/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default App
