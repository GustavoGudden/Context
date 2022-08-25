import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AutoProvider } from "./provider/auth";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutoProvider>
      <App />
    </AutoProvider>
  </React.StrictMode>
);
