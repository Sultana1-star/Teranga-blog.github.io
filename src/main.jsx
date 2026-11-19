import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accueil from "./pages/Accueil";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accueil />
  </StrictMode>
);