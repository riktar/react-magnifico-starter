import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import "./tailwind.output.css"
import {createStore, Provider} from "./models/Store";
import {RootModel, snapshot} from "./models/Root";
import {Windmill} from '@windmill/react-ui'

const store = createStore(RootModel, snapshot, {})

ReactDOM.render(
  <Provider value={store}>
    <Windmill>
      <App/>
    </Windmill>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
