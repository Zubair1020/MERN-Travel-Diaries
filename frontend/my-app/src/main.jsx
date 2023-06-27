import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, reduxStore } from "./redux-store/redux-store.js";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/theme/theme.style.jsx";
import App from "./App.jsx";
import "./main.style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
