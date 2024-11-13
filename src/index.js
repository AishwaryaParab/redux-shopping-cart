import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ConfigProvider } from "antd";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider theme={{token: {
      colorPrimary: "#36cfc9"
    }}}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
