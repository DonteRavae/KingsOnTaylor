import React from "react";
//React
import ReactDOM from "react-dom";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//Components
import App from "./App";
//Styles
import "./index.css";
//Utilities
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
