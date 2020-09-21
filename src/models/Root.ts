import {types} from "mobx-state-tree";
import Counter from "./Counter";
import Layout from "./Layout";
import App from "./App";

// Root Model
export const RootModel = types.model({
  counter: Counter,
  layout: Layout,
  app: App
});

// Initial Snapshot
export const snapshot = {
  counter: {
    count: 0
  },
  layout: {
    sidebar: {
      open: (window.innerWidth > 700),
      width: (window.innerWidth > 700) ? 260 : 80,
      openedWidth: 260,
      collapsedWidth: 80,
      responsive: '80vw',
    }
  },
  app: {
    dashboard: {
      users: {}
    }
  }
}
