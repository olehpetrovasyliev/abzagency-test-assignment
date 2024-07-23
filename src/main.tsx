import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./scss/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./helpers/redux/store.ts";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
