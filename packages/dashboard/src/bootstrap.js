// mount app
import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// mount function to start app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-only-dashboard");
  if (devRoot) {
    mount(devRoot);
  }
}

// we're running through container, export mount function
export { mount };
