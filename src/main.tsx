import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/globals.css"; // SEMPRE primeiro (Tailwind)
import "./index.css";          // ajustes
import "./App.css";            // opcional

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
