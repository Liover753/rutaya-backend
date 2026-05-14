import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rutas from "./pages/Rutas";
import DetalleLugar from "./pages/DetalleLugar";
import DetalleRuta from "./pages/DetalleRuta";

// ✅ ADMIN
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLugares from "./pages/AdminLugares";
import AdminRutas from "./pages/AdminRutas";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PÚBLICO */}
        <Route path="/" element={<Home />} />
        <Route path="/rutas" element={<Rutas />} />
        <Route path="/lugar/:id" element={<DetalleLugar />} />
        <Route path="/ruta/:id" element={<DetalleRuta />} />

        {/* 🔐 ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/lugares" element={<AdminLugares />} />
        <Route path="/admin/rutas" element={<AdminRutas />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
