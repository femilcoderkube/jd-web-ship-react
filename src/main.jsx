import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/style.css"; // Import global CSS
import "./css/home.css";
import "./css/terms.css";
import "./css/about.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
