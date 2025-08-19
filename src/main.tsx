import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import AddTodo from "./pages/addTodo.tsx";
import Home from "./pages/home.tsx";
import Reports from "./pages/reports.tsx";
import MainLayout from "./pages/mainLayout.tsx";
import { Timer } from "lucide-react";
import Account from "./pages/account.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
