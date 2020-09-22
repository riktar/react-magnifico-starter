import {types} from "mobx-state-tree";
import Dashboard from "./Dashboard";

const App = types
  .model({
    dashboard: Dashboard
  })


export default App
