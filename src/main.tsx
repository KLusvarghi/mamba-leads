import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { SystemLeadsActivitieProvider } from "./context/leadsActivities.tsx";

createRoot(document.getElementById("root")!).render(
  <SystemLeadsActivitieProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </SystemLeadsActivitieProvider>,
);
