import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Simulation from "./components/simulation/simulation";

const store = createStore(Simulation);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
