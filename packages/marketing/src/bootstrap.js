// mount app
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function ton start app
const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  );
};

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-only-marketing");
  if (devRoot) {
    mount(devRoot);
  }
}

// we're running through container, export mount function
export { mount };
