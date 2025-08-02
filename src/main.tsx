import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.ts";
import ThemeUpdater from "./components/theme/ThemeUpdater.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeUpdater>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              pauseOnFocusLoss
              theme="colored" // or "light" or "dark"
            />
          </ThemeUpdater>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
