import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PurchaseProvider } from "./context/PurchaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PurchaseProvider>
      <App />
    </PurchaseProvider>
  </React.StrictMode>
);
