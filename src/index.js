import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";

import App from "./components/App";
import { ToyStoreProvider } from "./components/toystore-service-context";
import ToyStoreService from "./services/toystore-service";

ReactDOM.render(
  <Provider store={store}>
    <ToyStoreProvider value={new ToyStoreService()}>
      <Router>
        <App />
      </Router>
    </ToyStoreProvider>
  </Provider>,
  document.querySelector("#root")
);
