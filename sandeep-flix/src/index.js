import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Main App component
import "./index.css"; // Global styles

// Render the App component into the root div in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // "root" div is defined in public/index.html
);
