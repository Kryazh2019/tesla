import "core-js/es6/map";
import "core-js/es6/set";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import connect from "@vkontakte/vkui-connect";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import TeslaService from "./services/tesla-service";
import { TeslaServiceProvider } from "./components/tesla-service-context";

import store from "./store";

const teslaService = new TeslaService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TeslaServiceProvider value={teslaService}>
        <Router>
          <App />
        </Router>
      </TeslaServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
