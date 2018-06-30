import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./redux/reducers";
const logger = createLogger({
  // ...options
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
