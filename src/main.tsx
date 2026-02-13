import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import RootLayout from "./layout.tsx";
import Question from "./pages/question.tsx";
import Invitation from "./pages/invitation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/question" element={<Question />} />
          <Route path="/invitation" element={<Invitation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
