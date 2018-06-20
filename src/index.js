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

const store = createStore(
  rootReducer,
  applyMiddleware(thunk), // lets us dispatch() functions
  // If getting error store.getState does not exists, make sure setups is done like this https://github.com/reduxjs/redux-thunk
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
