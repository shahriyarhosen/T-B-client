import React from "react";
import ReactDOM from "react-dom/client";
// Import Router
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Redux Provider
import store from "./Store/index";
import { Provider } from "react-redux";

// Import House Context Provider
import HouseContextProvider from "./components/HouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HouseContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HouseContextProvider>
    </Provider>
  </React.StrictMode>
);
