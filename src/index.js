import React from "react";
import { render } from "react-dom";

import "./css/styles.css";
import App from "./components/App";

import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);