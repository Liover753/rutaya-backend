import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

// ✅ LEAFLET
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";


// 🔥 FIX ICONOS LEAFLET
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});


function DetalleRuta() {

  const { id } = useParams();

  const [ruta, setRuta] = useState(null);


  // =====================================
  // ✅ CARGAR RUTA
  // =====================================

  useEffect(() => {

    fetch("https://rutaya-backend-production.up.railway.app/rutas")

      .then((res) => res.json())

      .then((data) => {

        const rutaEncontrada = data.find(
          (r) => r.id === Number(id)
        );

        setRuta(rutaEncontrada);

      })

      .catch((error) =>
        console.error("Error:", error)
      );

  }, [id]);


  // =====================================
  // ✅ LOADING
  // =====================================

  if (!ruta) {

    return (
      <>
        <Navbar />

        <div className="container py-5 text-center">

          <div
            className="spinner-border text-success"
            role="status"
          ></div>

          <p className="mt-3">
            Cargando experiencia turística...
          </p>

        </div>
      </>
    );
  }


  // =====================================
  // 🔥 ORDENAR RECORRIDO
  // =====================================

  const detallesOrdenados =
    ruta?.detalles?.sort(
      (a, b) => a.orden - b.orden
    );


  // =====================================
  // 🗺 COORDENADAS
  // =====================================

  const posiciones =
    detallesOrdenados.map((detalle) => ([

      detalle.lugar?.latitud,

      detalle.lugar?.longitud,

    ]));


  return (
    <>
      <Navbar />

      <main className="container py-5 fade-up">

        {/* ===================================== */}
        {/* 🔥 HEADER */}
        {/* ===================================== */}

        <div className="detalle-card mb-5">

          <h1 className="fw-bold">
            {ruta.nombre}
          </h1>

          <p className="text-muted fs-5">

            {ruta.descripcion}

          </p>


          {/* 🔥 BADGES */}
          <div className="d-flex gap-3 mt-3 flex-wrap">

            <span className="rutaya-badge">

              ⏱ {ruta.duracionHoras} horas

            </span>

            <span className="rutaya-badge">

              📏 {ruta.distanciaKm} km

            </span>

            <span className="rutaya-badge">

              🎯 {ruta.dificultad}

            </span>

          </div>

        </div>


        {/* ===================================== */}
        {/* 🗺 MAPA */}
        {/* ===================================== */}

        <div className="detalle-card mb-5">

          <h3 className="mb-4">

            Recorrido turístico inteligente

          </h3>

          <div
            style={{
              height: "500px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >

            <MapContainer
              center={posiciones[0]}
              zoom={12}
              style={{
                height: "100%",
                width: "100%",
              }}
            >

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />


              {/* 🔥 MARKERS */}
              {detallesOrdenados.map((detalle) => (

                <Marker
                  key={detalle.id}

                  position={[
                    detalle.lugar?.latitud,
                    detalle.lugar?.longitud,
                  ]}
                >

                  <Popup>

                    <strong>
                      {detalle.lugar?.nombre}
                    </strong>

                    <br />

                    {detalle.lugar?.ubicacion}

                  </Popup>

                </Marker>

              ))}


              {/* 🔥 RECORRIDO */}
              <Polyline
                positions={posiciones}
              />

            </MapContainer>

          </div>

        </div>


        {/* ===================================== */}
        {/* 🧭 RECORRIDO */}
        {/* ===================================== */}

        <h3 className="mb-4">

          Lugares incluidos en la experiencia

        </h3>

        <div className="timeline">

          {detallesOrdenados.map(
            (detalle, index) => (

              <div
                key={detalle.id}

                className="timeline-item fade-up"

                style={{
                  animationDelay:
                    `${index * 0.15}s`,
                }}
              >

                {/* 🔥 NÚMERO */}
                <div className="timeline-number">

                  {index + 1}

                </div>


                {/* 🔥 CARD */}
                <div className="timeline-content">

                  <img
                    src={detalle.lugar?.imagen}

                    alt={detalle.lugar?.nombre}

                    className="timeline-img"
                  />


                  <div className="timeline-text">

                    <h5 className="fw-bold">

                      {detalle.lugar?.nombre}

                    </h5>


                    <p className="text-muted">

                      {detalle.lugar?.descripcion}

                    </p>


                    <small>

                      📍 {detalle.lugar?.ubicacion}

                    </small>

                    <br />


                    <small>

                      ⏱ Tiempo estimado:
                      {" "}
                      {detalle.tiempoEstimadoMinutos}
                      {" "}
                      min

                    </small>


                    <p className="mt-2">

                      {detalle.observaciones}

                    </p>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </main>
    </>
  );
}

export default DetalleRuta;

