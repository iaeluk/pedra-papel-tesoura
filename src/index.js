import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import ScoreContextProvider from "./contexts/ScoreContext";

ReactDOM.render(
  <React.StrictMode>
    <ScoreContextProvider>
      <App />
    </ScoreContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
