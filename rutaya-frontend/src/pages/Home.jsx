import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import StatsSection from "../components/StatsSection";
import Navbar from "../components/Navbar";
import LugarCard from "../components/LugarCard";
import Buscador from "../components/Buscador";
import FiltroCategoria from "../components/FiltroCategoria";

import { obtenerLugares } from "../services/lugarService";
import { obtenerCategorias } from "../services/categoriaService";

import useReveal from "../hooks/useReveal";


function Home() {

  // ✅ STATES
  const [lugares, setLugares] = useState([]);

  const [categorias, setCategorias] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const [categoriaSeleccionada,
    setCategoriaSeleccionada] = useState("");


  // ✅ ANIMACIONES
  useReveal([lugares.length, busqueda, categoriaSeleccionada]);


  // ✅ CARGAR DATOS
  useEffect(() => {

    obtenerLugares()
      .then(setLugares);

    obtenerCategorias()
      .then(setCategorias);

  }, []);


  // ✅ FILTROS
  const lugaresFiltrados = lugares.filter(
    (lugar) => {

      const coincideBusqueda =
        lugar.nombre
          .toLowerCase()
          .includes(
            busqueda.toLowerCase()
          );

      const coincideCategoria =

        categoriaSeleccionada === "" ||

        !lugar.categoria ||

        lugar.categoria.id ===
        Number(categoriaSeleccionada);


      return (
        coincideBusqueda &&
        coincideCategoria
      );
    }
  );


  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <section className="hero-section text-center">

        <div className="container">

          <h1 className="hero-title">
            RUTAYA
          </h1>

          <p className="hero-subtitle">

            Descubre Ayacucho con rutas
            inteligentes, cultura y gastronomía.

          </p>

          <div className="text-center">

            <a
              href="#lugares"
              className="btn btn-light btn-lg mt-2 btn-explorar"
            >

              Explorar lugares

              <span className="arrow"></span>

            </a>

          </div>

        </div>

      </section>

      {/* 🔥 CONTENIDO */}
      <main
        className="container pt-4 pb-5"
        id="lugares"
      >

        {/* 🔥 HEADER */}
        <div className="section-header mb-4">

          <h2 className="fw-bold">
            Lugares turísticos
          </h2>

          <p className="text-muted">

            Explora lugares culturales, naturales,
            restaurantes, hoteles y experiencias turísticas.

          </p>

          <small className="text-muted">

            {lugaresFiltrados.length}
            {" "}
            resultados encontrados

          </small>

        </div>


        {/* 🔥 BUSCADOR */}
        <div className="row mb-1 align-items-center">

          <div className="col-md-8 mb-3 mb-md-0">

            <Buscador
              busqueda={busqueda}
              setBusqueda={setBusqueda}
            />

          </div>

          <div className="col-md-4">

            <FiltroCategoria
              categorias={categorias}
              categoriaSeleccionada={
                categoriaSeleccionada
              }
              setCategoriaSeleccionada={
                setCategoriaSeleccionada
              }
            />

          </div>

        </div>

        {/* 🔥 RESULTADOS */}
        {lugaresFiltrados.length === 0 ? (

          <div className="alert alert-warning text-center">

            No se encontraron lugares.

          </div>

        ) : (

          <div className="row g-4">

            {lugaresFiltrados.map((lugar) => (

              <div
                className="col-md-6 col-lg-4 reveal"
                key={lugar.id}
              >

                <LugarCard lugar={lugar} />

              </div>

            ))}

          </div>

        )}

            <StatsSection
              totalLugares={lugares.length}
              totalCategorias={categorias.length}
            />

      </main>
      <Footer />
    </>
  );
}

export default Home;
