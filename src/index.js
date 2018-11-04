import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";
const centralStore = createStore(reducer);

ReactDOM.render(
  <Provider store={centralStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
