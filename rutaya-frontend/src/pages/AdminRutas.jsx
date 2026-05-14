import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";


import {
  obtenerRutas,
  crearRuta,
  eliminarRuta,
} from "../services/rutaService";

import {
  obtenerLugares,
} from "../services/lugarService";

function AdminRutas() {

  // =====================================
  // STATES
  // =====================================

  const [rutas, setRutas] =
    useState([]);

  const [busqueda, setBusqueda] =
    useState("");

  const [lugares, setLugares] =
    useState([]);

  const [nuevaRuta, setNuevaRuta] =
    useState({

      nombre: "",
      descripcion: "",
      duracionHoras: "",
      distanciaKm: "",
      dificultad: "",
      imagen: "",
    });

    const [lugaresSeleccionados, setLugaresSeleccionados] = 
    useState([]);

  // =====================================
  // CARGAR RUTAS
  // =====================================

  const cargarRutas = async () => {

    const data =
      await obtenerRutas();

    setRutas(data);
  };


  // =====================================
  // CARGAR LUGARES
  // =====================================

  const cargarLugares = async () => {

    const data =
      await obtenerLugares();

    setLugares(data);
  };


  // =====================================
  // USE EFFECT
  // =====================================

  useEffect(() => {

    cargarRutas();

    cargarLugares();

  }, []);


  // =====================================
  // HANDLE CHANGE
  // =====================================

  const handleChange = (e) => {

    setNuevaRuta({

      ...nuevaRuta,

      [e.target.name]:
        e.target.value,
    });
  };


  // =====================================
  // CREAR RUTA
  // =====================================

const handleSubmit = async (e) => {
  e.preventDefault();

  const rutaCreada = await crearRuta(nuevaRuta);

  for (let i = 0; i < lugaresSeleccionados.length; i++) {
    await fetch("http://localhost:8080/ruta-detalles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orden: i + 1,
        tiempoEstimadoMinutos: 30,
        observaciones: "Punto incluido en el recorrido turístico.",
        ruta: {
          id: rutaCreada.id,
        },
        lugar: {
          id: lugaresSeleccionados[i],
        },
      }),
    });
  }

  cargarRutas();

  setNuevaRuta({
    nombre: "",
    descripcion: "",
    duracionHoras: "",
    distanciaKm: "",
    dificultad: "",
    imagen: "",
  });

  setLugaresSeleccionados([]);

  alert("Ruta creada con recorrido turístico.");
};

  const toggleLugar = (id) => {

  if (lugaresSeleccionados.includes(id)) {

    setLugaresSeleccionados(

      lugaresSeleccionados.filter(
        (lugarId) => lugarId !== id
      )
    );

  } else {

    setLugaresSeleccionados([
      ...lugaresSeleccionados,
      id,
    ]);
  }
};


  // =====================================
  // ELIMINAR RUTA
  // =====================================

  const handleEliminar = async (id) => {

    const confirmar = confirm(
      "¿Eliminar esta ruta?"
    );

    if (!confirmar) return;

    await eliminarRuta(id);

    cargarRutas();
  };

const rutasFiltradas = rutas.filter((ruta) =>

  ruta.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase())

  ||

  ruta.descripcion
    ?.toLowerCase()
    .includes(busqueda.toLowerCase())

  ||

  ruta.dificultad
    ?.toLowerCase()
    .includes(busqueda.toLowerCase())
);

  return (

    <>
      <Navbar />


      {/* ===================================== */}
      {/* HERO */}
      {/* ===================================== */}

      <section className="admin-hero">

        <div className="container text-center">

          <h1 className="hero-title">
            Administración de Rutas
          </h1>

          <p className="hero-subtitle">

            Gestiona rutas inteligentes
            turísticas de Rutaya.

          </p>

        </div>

      </section>


      {/* ===================================== */}
      {/* CONTENIDO */}
      {/* ===================================== */}

      <div className="container py-5">


        {/* ===================================== */}
        {/* CREAR RUTA */}
        {/* ===================================== */}

        <div className="admin-panel-card mb-5">

          <h2 className="mb-4">
            Crear Nueva Ruta
          </h2>

          <form
            onSubmit={handleSubmit}
            className="row g-3 admin-form"
          >

            {/* NOMBRE */}
            <div className="col-md-6">

              <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Nombre de ruta"
                value={nuevaRuta.nombre}
                onChange={handleChange}
                required
              />

            </div>


            {/* DIFICULTAD */}
            <div className="col-md-6">

              <input
                type="text"
                className="form-control"
                name="dificultad"
                placeholder="Dificultad"
                value={nuevaRuta.dificultad}
                onChange={handleChange}
              />

            </div>


            {/* DESCRIPCIÓN */}
            <div className="col-12">

              <textarea
                className="form-control"
                rows="4"
                name="descripcion"
                placeholder="Descripción"
                value={nuevaRuta.descripcion}
                onChange={handleChange}
              />

            </div>

            {/* LUGARES INCLUIDOS */}

<div className="col-12">

  <label className="fw-bold mb-3">

    Lugares incluidos en la ruta

  </label>

  <div
  className="d-flex flex-wrap gap-3"
  style={{
    maxWidth: "1108px",
    margin: "0 auto"
  }}
>

    {lugares.map((lugar) => (

      <div
        key={lugar.id}

        onClick={() => toggleLugar(lugar.id)}

        className={
          lugaresSeleccionados.includes(lugar.id)

            ? "lugar-select active"

            : "lugar-select"
        }
      >

        <img
          src={`/src/assets/images/${lugar.imagen}`}
          alt={lugar.nombre}
        />

        <span>
          {lugar.nombre}
        </span>

      </div>

    ))}

  </div>

</div>


            {/* DURACIÓN */}
            <div className="col-md-4">

              <input
                type="number"
                className="form-control"
                name="duracionHoras"
                placeholder="Duración (horas)"
                value={nuevaRuta.duracionHoras}
                onChange={handleChange}
              />

            </div>


            {/* DISTANCIA */}
            <div className="col-md-4">

              <input
                type="number"
                step="any"
                className="form-control"
                name="distanciaKm"
                placeholder="Distancia Km"
                value={nuevaRuta.distanciaKm}
                onChange={handleChange}
              />

            </div>


            {/* IMAGEN */}
            <div className="col-md-4">

              <input
                type="text"
                className="form-control"
                name="imagen"
                placeholder="Ej: ruta-millpu.jpg"
                value={nuevaRuta.imagen}
                onChange={handleChange}
              />

            </div>


            {/* BOTÓN */}
            <div className="col-12">

              <button
                type="submit"
                className="btn btn-rutaya"
              >

                Crear Ruta

              </button>

            </div>

          </form>

        </div>


        {/* ===================================== */}
        {/* LISTA DE RUTAS */}
        {/* ===================================== */}

<div className="mb-4">

  <input
    type="text"
    className="form-control buscador-admin"
    placeholder="Buscar ruta..."
    value={busqueda}
    onChange={(e) =>
      setBusqueda(e.target.value)
    }
  />

</div>


        <div className="row g-4">

          {rutasFiltradas.map((ruta) => (

            <div
              className="col-lg-4 col-md-6"
              key={ruta.id}
            >

            <div className="lugar-card h-100 fade-up">

              <img
                src={`/src/assets/images/${ruta.imagen}`}
                alt={ruta.nombre}
                className="lugar-img"
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

                    <strong>Duración:</strong>{" "}
                    {ruta.duracionHoras}h

                  </p>

                  <p>

                    <strong>Dificultad:</strong>{" "}
                    {ruta.dificultad}

                  </p>


                  {/* BOTÓN */}
                  <button
                    className="btn-admin-delete"

                    onClick={() =>
                      handleEliminar(ruta.id)
                    }
                  >

                    Eliminar

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}

export default AdminRutas;