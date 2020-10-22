import React from "react";
import ReactDOM from "react-dom";
import App from "@app/components/app";
import store from "@app/store";
import { Provider, connect } from "unistore/react";

import "@app/styles";

const root = document.querySelector("#app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
