import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IphoneProMax } from "./screens/IphoneProMax";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <IphoneProMax />
  </StrictMode>,
);
