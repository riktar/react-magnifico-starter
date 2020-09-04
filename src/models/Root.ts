import {createContext, useContext} from "react";
import {Instance, types} from "mobx-state-tree";
import {Counter} from "./Counter";

const RootModel = types.model({
  counter: Counter,
});

export const rootStore = (objToInject: object) => RootModel.create({
  counter: {
    count: 0
  }
}, objToInject);

// onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
