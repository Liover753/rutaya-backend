import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import {
  obtenerLugarPorId,
  obtenerLugares,
}
from "../services/lugarService";


// ✅ LEAFLET
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";


// 🔥 FIX ICONOS
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


function DetalleLugar() {

  const { id } = useParams();

  const [lugar, setLugar] =
    useState(null);

  // 💬 COMMENTS
  const [comentario,
    setComentario] = useState("");

  const [comentarios,
    setComentarios] = useState([]);

  // ✨ RECOMENDADOS
  const [recomendados,
    setRecomendados] = useState([]);


  // =====================================
  // ✅ CARGAR LUGAR
  // =====================================

  useEffect(() => {

    obtenerLugarPorId(id)
      .then((data) => {

        setLugar(data);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      });

  }, [id]);


  // =====================================
  // 💬 CARGAR COMENTARIOS
  // =====================================

  useEffect(() => {

    const data =
      JSON.parse(
        localStorage.getItem(
          `comentarios_${id}`
        )
      ) || [];

    setComentarios(data);

  }, [id]);


  // =====================================
  // ✨ CARGAR RECOMENDADOS
  // =====================================

  useEffect(() => {

    if (!lugar) return;

    obtenerLugares()
      .then((data) => {

        const similares = data.filter(

          (item) =>

            item.id !== lugar.id &&

            item.categoria?.id ===
            lugar.categoria?.id

        );

        setRecomendados(
          similares.slice(0, 3)
        );
      });

  }, [lugar]);


  // =====================================
  // 💬 AGREGAR COMENTARIO
  // =====================================

  const agregarComentario = () => {

    if (!comentario.trim()) return;

    const nuevosComentarios = [

      ...comentarios,

      {
        texto: comentario,

        fecha:
          new Date()
            .toLocaleString(),
      },
    ];

    setComentarios(
      nuevosComentarios
    );

    localStorage.setItem(

      `comentarios_${id}`,

      JSON.stringify(
        nuevosComentarios
      )
    );

    setComentario("");
  };


  // =====================================
  // ✅ LOADING
  // =====================================

  if (!lugar) {

    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }


  // =====================================
  // 🔥 TÍTULO DINÁMICO
  // =====================================

  const tituloSeccion =

    lugar.categoria?.nombre ===
    "Restaurantes"

      ? "Experiencia gastronómica"

      : lugar.categoria?.nombre ===
        "Hoteles"

      ? "Información del hospedaje"

      : lugar.categoria?.nombre ===
        "Movilidades"

      ? "Servicio de transporte"

      : "Información turística";


  // =====================================
  // 🎨 BADGES
  // =====================================

  const categoriaClase =

    lugar.categoria?.nombre ===
    "Lugares Turísticos Culturales"

      ? "badge-cultura"

      : lugar.categoria?.nombre ===
        "Restaurantes"

      ? "badge-gastronomia"

      : "badge-naturaleza";


  return (
    <>
      <Navbar />

      <main className="container py-5 fade-up">

{/* 🔙 VOLVER */}

<div className="volver-wrapper">

  <Link
    to="/"
    className="btn-volver"
  >

    Volver a inicio

  </Link>

</div>


        {/* ===================================== */}
        {/* 🔥 CARD */}
        {/* ===================================== */}

        <div className="detalle-card">

          {/* 🔥 IMG */}
          <div className="img-wrapper">

            <img
              src={lugar.imagen}
              alt={lugar.nombre}
              className="detalle-img mb-4"
            />

          </div>


          {/* 🔥 BADGE */}
          <span
            className={`badge ${categoriaClase} mb-3`}
          >

            {lugar.categoria?.nombre ||
              "Turismo"}

          </span>


          {/* 🔥 TITLE */}
          <h1 className="fw-bold mb-3">

            {lugar.nombre}

          </h1>


          {/* 🔥 DESC */}
          <p className="text-muted fs-5 mb-4">

            {lugar.descripcion}

          </p>

          <hr />


          {/* 🔥 INFO */}
          <h4 className="mt-4 fw-semibold">

            {tituloSeccion}

          </h4>

          <p style={{ lineHeight: "1.8" }}>

            {lugar.historia ||
              lugar.descripcion}

          </p>


          {/* 🔥 UBICACIÓN */}
          <h5 className="mt-4 fw-semibold">

            Ubicación

          </h5>

          <p className="mb-4">

            {lugar.ubicacion}

          </p>


          {/* ===================================== */}
          {/* 🗺 MAPA */}
          {/* ===================================== */}

          <h5 className="mt-4 fw-semibold">

            Ubicación en el mapa

          </h5>

          <div
            style={{
              height: "400px",
              borderRadius: "20px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >

            <MapContainer
             key={lugar.id}
              center={[
                lugar.latitud,
                lugar.longitud,
              ]}
              zoom={15}
              style={{
                height: "100%",
                width: "100%",
              }}
            >

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[
                  lugar.latitud,
                  lugar.longitud,
                ]}
              >

                <Popup>

                  <strong>
                    {lugar.nombre}
                  </strong>

                  <br />

                  {lugar.ubicacion}

                </Popup>

              </Marker>

            </MapContainer>

          </div>


          {/* 🔥 GOOGLE MAPS */}
          <a
            className="btn btn-rutaya mt-4"

            href={`https://www.google.com/maps/search/?api=1&query=${lugar.latitud},${lugar.longitud}`}

            target="_blank"

            rel="noopener noreferrer"
          >

            Abrir en Google Maps

          </a>

        </div>

        {/* ===================================== */}
        {/* ✨ RECOMENDADOS */}
        {/* ===================================== */}

        <div className="mt-5">

          <h3 className="fw-bold mb-4">

            También podría interesarte

          </h3>

          <div className="row g-3 mt-2">

            {recomendados.map((item) => (

              <div
                className="col-md-4"
                key={item.id}
              >

                <div className="card lugar-card recomendados-card h-100">

                  {/* IMAGEN */}
                  <img
                    src={item.imagen}
                    className="lugar-img"
                    alt={item.nombre}
                  />


                  {/* BODY */}
                  <div className="card-body">

                    {/* BADGE */}
                    <span
                      className={`rutaya-badge ${
                        item.categoria?.nombre ===
                        "Lugares Turísticos Culturales"

                          ? "badge-cultura"

                          : item.categoria?.nombre ===
                            "Restaurantes"

                          ? "badge-restaurantes"

                          : item.categoria?.nombre ===
                            "Hoteles"

                          ? "badge-hoteles"

                          : item.categoria?.nombre ===
                            "Movilidades"

                          ? "badge-movilidades"

                          : "badge-naturaleza"
                      }`}
                    >

                      {item.categoria?.nombre}

                    </span>


                    {/* TITLE */}
                    <h5
                      className="fw-bold"
                      style={{
                        lineHeight: "1.4",
                        marginBottom: "12px",
                      }}
                    >

                      {item.nombre}

                    </h5>


                    {/* DESC */}
                    <p className="text-muted">

                      {item.descripcion}

                    </p>


                    {/* BOTÓN */}
                    <Link
                      to={`/lugar/${item.id}`}

                      className="btn btn-rutaya w-100"
                    >

                      Ver lugar

                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

          {/* ===================================== */}
          {/* 💬 COMMENTS */}
          {/* ===================================== */}

          <div className="mt-5">

            <h4 className="fw-bold mb-4">

              Comentarios y experiencias

            </h4>


            {/* INPUT */}
            <textarea
              className="form-control mb-3"

              rows="4"

              placeholder="Comparte tu experiencia turística..."

              value={comentario}

              onChange={(e) =>
                setComentario(
                  e.target.value
                )
              }
            />

            <button
              className="btn btn-rutaya"

              onClick={
                agregarComentario
              }
            >

              Publicar comentario

            </button>


            {/* LISTA */}
            <div className="mt-4">

              {comentarios.length === 0 ? (

                <p className="text-muted">

                  Aún no hay comentarios.

                </p>

              ) : (

                  comentarios.map(
                    (c, index) => (

                      <div
                        key={index}
                        className="comentario-card"
                      >

                        <div className="comentario-header">

                          <div className="comentario-avatar">
                            T
                          </div>

                          <div>

                            <strong>
                              Turista
                            </strong>

                            <div className="comentario-fecha">

                                {
                                  c.fecha &&
                                  !isNaN(new Date(c.fecha))
                                    ? new Date(c.fecha).toLocaleString()
                                    : "Hace unos momentos"
                                } 

                            </div>

                          </div>

                        </div>

                        <p className="comentario-texto">

                          {c.texto}

                        </p>

                      </div>
                  )
                )
              )}

            </div>

          </div>


      </main>

    </>
  );
}

export default DetalleLugar;


