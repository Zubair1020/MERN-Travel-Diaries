import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.style.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/theme/theme.style.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
