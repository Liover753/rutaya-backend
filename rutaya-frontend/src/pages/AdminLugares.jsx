import { useEffect, useState } from "react";

import {
  obtenerLugares,
  crearLugar,
  eliminarLugar,
  actualizarLugar,
} from "../services/lugarService";

import Navbar from "../components/Navbar";

function AdminLugares() {

  // =========================================
  // STATES
  // =========================================

  const [lugares, setLugares] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const [editandoId, setEditandoId] =
    useState(null);

  const [nuevoLugar, setNuevoLugar] =
    useState({

      nombre: "",
      descripcion: "",
      historia: "",
      imagen: "",
      ubicacion: "",
      latitud: "",
      longitud: "",

      categoria: {
        id: 1,
      },
    });

  const [formEditar, setFormEditar] =
    useState({

      nombre: "",
      descripcion: "",
      historia: "",
      imagen: "",
      ubicacion: "",
      latitud: "",
      longitud: "",

      categoria: {
        id: 1,
      },
    });


  // =========================================
  // CARGAR LUGARES
  // =========================================

  const cargarLugares = async () => {

    const data =
      await obtenerLugares();

    setLugares(data);
  };

  useEffect(() => {

    cargarLugares();

  }, []);


  // =========================================
  // HANDLE CHANGE CREAR
  // =========================================

  const handleChange = (e) => {

    setNuevoLugar({

      ...nuevoLugar,

      [e.target.name]:
        e.target.value,
    });
  };


  // =========================================
  // CREAR
  // =========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    await crearLugar(nuevoLugar);

    cargarLugares();

    setNuevoLugar({

      nombre: "",
      descripcion: "",
      historia: "",
      imagen: "",
      ubicacion: "",
      latitud: "",
      longitud: "",

      categoria: {
        id: 1,
      },
    });
  };


  // =========================================
  // ELIMINAR
  // =========================================

  const handleEliminar = async (id) => {

    const confirmar = confirm(
      "¿Seguro que deseas eliminar este lugar?"
    );

    if (!confirmar) return;

    try {

      await eliminarLugar(id);

      cargarLugares();

    } catch (error) {

      alert(
        "No se puede eliminar porque este lugar pertenece a una ruta."
      );
    }
  };


  // =========================================
  // INICIAR EDICIÓN
  // =========================================

  const iniciarEdicion = (lugar) => {

    setEditandoId(lugar.id);

    setFormEditar({

      nombre: lugar.nombre,
      descripcion: lugar.descripcion,
      historia: lugar.historia,
      imagen: lugar.imagen,
      ubicacion: lugar.ubicacion,
      latitud: lugar.latitud,
      longitud: lugar.longitud,

      categoria: {
        id: lugar.categoria?.id || 1,
      },
    });
  };


  // =========================================
  // HANDLE EDITAR
  // =========================================

  const handleEditarChange = (e) => {

    setFormEditar({

      ...formEditar,

      [e.target.name]:
        e.target.value,
    });
  };


  // =========================================
  // GUARDAR EDICIÓN
  // =========================================

  const guardarEdicion = async (id) => {

    await actualizarLugar(
      id,
      formEditar
    );

    setEditandoId(null);

    cargarLugares();
  };

const lugaresFiltrados = lugares.filter((lugar) =>
  lugar.nombre.toLowerCase().includes(
    busqueda.toLowerCase()
  )
);

  return (

    <>
      <Navbar />


      {/* ========================================= */}
      {/* HERO ADMIN */}
      {/* ========================================= */}

      <section className="admin-hero">

        <div className="container text-center fade-up">

          <h1 className="hero-title">
            Panel Administrativo
          </h1>

          <p className="hero-subtitle">

            Gestiona lugares turísticos,
            y contenido de Rutaya.

          </p>

        </div>

      </section>


      {/* ========================================= */}
      {/* CONTENIDO */}
      {/* ========================================= */}

      <div className="container py-5">


        {/* ========================================= */}
        {/* FORMULARIO */}
        {/* ========================================= */}

        <div className="admin-panel-card fade-up mb-5">

          <h2 className="mb-4">
            Crear Nuevo Lugar
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
                placeholder="Nombre"
                value={nuevoLugar.nombre}
                onChange={handleChange}
                required
              />

            </div>


            {/* CATEGORÍA */}
            <div className="col-md-6">

              <select
                className="form-control"

                value={nuevoLugar.categoria.id}

                onChange={(e) =>
                  setNuevoLugar({

                    ...nuevoLugar,

                    categoria: {
                      id: Number(e.target.value),
                    },
                  })
                }
              >

                <option value="1">
                  Lugares Turísticos Culturales
                </option>

                <option value="2">
                  Lugares Turísticos Naturales
                </option>

                <option value="3">
                  Restaurantes
                </option>

                <option value="4">
                  Hoteles
                </option>

                <option value="5">
                  Movilidades
                </option>

              </select>

            </div>

            {/* UBICACIÓN */}
            <div className="col-12">

              <input
                type="text"
                className="form-control"
                name="ubicacion"
                placeholder="Ubicación"
                value={nuevoLugar.ubicacion}
                onChange={handleChange}
                required
              />

            </div>
            
            
            {/* DESCRIPCIÓN */}
            <div className="col-12">

              <input
                type="text"
                className="form-control"
                name="descripcion"
                placeholder="Descripción"
                value={nuevoLugar.descripcion}
                onChange={handleChange}
                required
              />

            </div>


            {/* HISTORIA */}
            <div className="col-12">

              <textarea
                className="form-control"
                rows="4"
                name="historia"
                placeholder="Información detallada"
                value={nuevoLugar.historia}
                onChange={handleChange}
              />

            </div>


            {/* IMAGEN */}
            <div className="col-md-6">

              <input
                type="text"
                className="form-control"
                name="imagen"
                placeholder="Ej: plaza-mayor-ayacucho.jpg"
                value={nuevoLugar.imagen}
                onChange={handleChange}
                required
              />

            </div>


            {/* LATITUD */}
            <div className="col-md-3">

              <input
                type="number"
                step="any"
                className="form-control"
                name="latitud"
                placeholder="Latitud"
                value={nuevoLugar.latitud}
                onChange={handleChange}
              />

            </div>


            {/* LONGITUD */}
            <div className="col-md-3">

              <input
                type="number"
                step="any"
                className="form-control"
                name="longitud"
                placeholder="Longitud"
                value={nuevoLugar.longitud}
                onChange={handleChange}
              />

            </div>


            {/* BOTÓN */}
            <div className="col-12">

              <button
                type="submit"
                className="btn btn-rutaya"
              >

                Crear Lugar

              </button>

            </div>

          </form>

        </div>


        {/* ========================================= */}
        {/* LISTA DE LUGARES */}
        {/* ========================================= */}

<div className="mb-4">

  <input
    type="text"
    className="form-control buscador-admin"
    placeholder="Buscar lugar..."
    value={busqueda}
    onChange={(e) =>
      setBusqueda(e.target.value)
    }
  />

</div>

        <div className="row g-4">

          {lugaresFiltrados.map((lugar) => (

            <div
              key={lugar.id}
              className="col-lg-4 col-md-6 fade-up"
            >

              <div className="lugar-card h-100">


                {/* IMAGEN */}
                <img
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  className="lugar-img"
                />


                {/* BODY */}
                <div className="card-body">

                  {editandoId === lugar.id ? (

                    <>
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="nombre"
                        value={formEditar.nombre}
                        onChange={handleEditarChange}
                      />

                      <input
                        type="text"
                        className="form-control mb-2"
                        name="descripcion"
                        value={formEditar.descripcion}
                        onChange={handleEditarChange}
                      />

                      <textarea
                        className="form-control mb-2"
                        rows="4"
                        name="historia"
                        placeholder="Información detallada"
                        value={formEditar.historia}
                        onChange={handleEditarChange}
                      />

                      <input
                        type="text"
                        className="form-control mb-2"
                        name="ubicacion"
                        value={formEditar.ubicacion}
                        onChange={handleEditarChange}
                      />

                      <input
                        type="text"
                        className="form-control mb-3"
                        name="imagen"
                        value={formEditar.imagen}
                        onChange={handleEditarChange}
                      />

                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-rutaya"
                          onClick={() => guardarEdicion(lugar.id)}
                        >
                          Guardar
                        </button>

                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setEditandoId(null)}
                        >
                          Cancelar
                        </button>
                      </div>
                    </>

                  ) : (

                    <>

                      <span className="rutaya-badge">

                        {lugar.categoria?.nombre}

                      </span>

                      <h3 className="mt-3">

                        {lugar.nombre}

                      </h3>

                      <p>

                        {lugar.descripcion}

                      </p>

                      <p>

                        <strong>Ubicación:</strong>{" "}
                        {lugar.ubicacion}

                      </p>


                      {/* BOTONES */}
                      <div className="d-flex gap-2 mt-3">

                        <button
                          type="button"
                          className="btn-admin-edit"
                          onClick={() =>
                            iniciarEdicion(lugar)
                          }
                        >

                          Editar

                        </button>

                        <button
                          type="button"
                          className="btn-admin-delete"
                          onClick={() =>
                            handleEliminar(lugar.id)
                          }
                        >

                          Eliminar

                        </button>

                      </div>

                    </>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}

export default AdminLugares;


