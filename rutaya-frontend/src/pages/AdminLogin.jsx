import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../services/authService";

function AdminLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await loginAdmin(form);

      // ✅ Guardar sesión simple
      localStorage.setItem("admin", JSON.stringify(data));

      // ✅ Redireccionar
      navigate("/admin/dashboard");

    } catch (err) {

      setError("Usuario o contraseña incorrectos");

    }
  };

      return (

        <div className="admin-login-page">

          <div className="admin-overlay"></div>

          <form
            className="admin-login-card"
            onSubmit={handleSubmit}
          >

            <h1 className="admin-logo">
              RUTAYA
            </h1>

            <h2 className="admin-title">
              Panel Administrativo
            </h2>

            <p className="admin-subtitle">

              Gestiona lugares turísticos,
              rutas inteligentes y contenido.

            </p>

            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={form.username}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit">

              Iniciar sesión

            </button>

            {error && (

              <p className="login-error">

                {error}

              </p>

            )}

          </form>

        </div>
      );
}

export default AdminLogin;
