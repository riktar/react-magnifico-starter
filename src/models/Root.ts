import {types} from "mobx-state-tree";
import Counter from "./Counter";
import Layout from "./Layout";

console.log(window.innerWidth > 0)

// Root Model
export const RootModel = types.model({
  counter: Counter,
  layout: Layout
});

// Initial Snapshot
export const snapshot = {
  counter: {
    count: 0
  },
  layout: {
    sidebar: {
      open: (window.innerWidth > 700),
      width: (window.innerWidth > 700) ? 200 : 80,
      openedWidth: 200,
      collapsedWidth: 80,
      responsive: '80vw',
    }
  }
}
