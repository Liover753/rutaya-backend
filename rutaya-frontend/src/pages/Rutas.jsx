import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { obtenerRutas } from "../services/rutaService";
import { Link } from "react-router-dom";

function Rutas() {
  const [rutas, setRutas] = useState([]);

useEffect(() => {
  obtenerRutas().then(data => {
    console.log("RUTAS:", data);
    setRutas(data);
  });
}, []);

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="fw-bold">Rutas inteligentes</h1>
        <p className="text-muted">
          Experiencias recomendadas para conocer Ayacucho de forma organizada.
        </p>

        {rutas.length === 0 ? (
          <div className="alert alert-info mt-4">
            Aún no hay rutas registradas.
          </div>
        ) : (
          <div className="row g-4 mt-3">
            {rutas.map((ruta) => (
              <div className="col-md-6" key={ruta.id}>
                <div className="card ruta-card h-100">

                  {/* IMAGEN */}
                  <img
                    src={`/src/assets/images/${ruta.imagen}`}
                    className="ruta-img"
                    alt={ruta.nombre}
                  />

                  {/* BODY */}
                  <div className="card-body">

                    <h4 className="fw-bold">
                      {ruta.nombre}
                    </h4>

                    <p className="text-muted">
                      {ruta.descripcion}
                    </p>

                    <p>
                      <strong>Duración:</strong>
                      {" "}
                      {ruta.duracionHoras} horas
                    </p>

                    <Link
                      to={`/ruta/${ruta.id}`}
                      className="btn btn-rutaya"
                    >
                      Ver ruta

                    </Link>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Rutas;