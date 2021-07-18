import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// provider is going to track the store which is the global state which allows us to access
// that store from anywhere inside the app, we do not need to be in a parent or child component
// we can access that state from anywhere

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
