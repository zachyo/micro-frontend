// mount app
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// mount function ton start app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // listens to itself for navigation and passes the pathname to container
  // defaultHistory = createBrowserHistory which is for dev mode in isolation
  // createMemoryHistory is for production or dev in container
  const history = defaultHistory || createMemoryHistory({
    initialEntries : [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    // gets navigated pathname from container and passes it to itself
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history?.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-only-auth");
  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

// we're running through container, export mount function
export { mount };
