import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Http404 from "./pages/http404";
import Home from "./pages/home";
import Admin from "./pages/admin";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact><Home/></Route>
        <Route path={'/admin'}><Admin/></Route>
        <Route path="*">
          <Http404/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default App
