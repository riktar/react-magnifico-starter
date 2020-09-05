import {types} from "mobx-state-tree";
import Counter from "./Counter";

// Root Model
export const RootModel = types.model({
  counter: Counter,
});

// Initial Snapshot
export const snapshot = {
  counter: {
    count: 0
  }
}
