import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SerieApp } from "./SerieApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SerieApp />
  </StrictMode>
);
