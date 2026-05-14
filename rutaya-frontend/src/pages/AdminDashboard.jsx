import { Link } from "react-router-dom";

function AdminDashboard() {

  return (

    <div className="admin-dashboard">

      <div className="dashboard-overlay"></div>

      <div className="dashboard-content">

        <h1 className="dashboard-title">

          Panel Administrativo

        </h1>

        <p className="dashboard-subtitle">

          Selecciona qué deseas gestionar.

        </p>


        <div className="dashboard-grid">

          <Link
            to="/admin/lugares"
            className="dashboard-card"
          >

            <h3>
              Lugares
            </h3>

            <p>

              Gestiona lugares turísticos,
              restaurantes, hoteles y más.

            </p>

          </Link>


          <Link
            to="/admin/rutas"
            className="dashboard-card"
          >

            <h3>
              Rutas Inteligentes
            </h3>

            <p>

              Crea recorridos turísticos
              personalizados.

            </p>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
