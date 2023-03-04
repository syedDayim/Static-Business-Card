import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css"
import "./styles/app.css"
import "./styles/topsection.css"
import "./styles/midsection.css"
import "./styles/footer.css"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
