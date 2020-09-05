import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import "./tailwind.output.css"
import {Provider, createStore} from "./models/Store";
import {RootModel, snapshot} from "./models/Root";

const store = createStore(RootModel, snapshot, {})

ReactDOM.render(
  <Provider value={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
