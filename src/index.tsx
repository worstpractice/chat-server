import "normalize.css";
import * as React from "react";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { Root } from "./routes/Root";

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById("root")
);
