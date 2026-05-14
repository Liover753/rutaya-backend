import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function LugarCard({ lugar }) {

  // =====================================
  // ❤️ FAVORITO
  // =====================================

  const [favorito, setFavorito] =
    useState(false);


  // =====================================
  // ⭐ RATING
  // =====================================

  const [rating, setRating] =
    useState(0);


  // =====================================
  // ✅ BADGE DINÁMICO
  // =====================================

  const categoriaClase =

    lugar.categoria?.nombre ===
    "Lugares Turísticos Culturales"

      ? "badge-cultura"

      : lugar.categoria?.nombre ===
        "Restaurantes"

      ? "badge-restaurantes"

      : lugar.categoria?.nombre ===
        "Hoteles"

      ? "badge-hoteles"

      : lugar.categoria?.nombre ===
        "Movilidades"

      ? "badge-movilidades"

      : "badge-naturaleza";


  // =====================================
  // ❤️ CARGAR FAVORITOS
  // =====================================

  useEffect(() => {

    const favoritos =
      JSON.parse(
        localStorage.getItem("favoritos")
      ) || [];

    const existe = favoritos.some(
      (fav) => fav.id === lugar.id
    );

    setFavorito(existe);

  }, [lugar.id]);


  // =====================================
  // ⭐ CARGAR RATING
  // =====================================

  useEffect(() => {

    const ratings =
      JSON.parse(
        localStorage.getItem("ratings")
      ) || {};

    setRating(
      ratings[lugar.id] || 0
    );

  }, [lugar.id]);


  // =====================================
  // ❤️ TOGGLE FAVORITO
  // =====================================

  const toggleFavorito = () => {

    let favoritos =
      JSON.parse(
        localStorage.getItem("favoritos")
      ) || [];

    if (favorito) {

      favoritos = favoritos.filter(
        (fav) => fav.id !== lugar.id
      );

    } else {

      favoritos.push(lugar);
    }

    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );

    setFavorito(!favorito);
  };


  // =====================================
  // ⭐ CALIFICAR
  // =====================================

  const calificar = (valor) => {

    const ratings =
      JSON.parse(
        localStorage.getItem("ratings")
      ) || {};

    ratings[lugar.id] = valor;

    localStorage.setItem(
      "ratings",
      JSON.stringify(ratings)
    );

    setRating(valor);
  };


  return (

    <div className="card lugar-card h-100">


      {/* ===================================== */}
      {/* ❤️ FAVORITO */}
      {/* ===================================== */}

      <button
        className={`favorito-btn ${
          favorito ? "activo" : ""
        }`}

        onClick={toggleFavorito}
      >

        {favorito ? "❤️" : "🤍"}

      </button>


      {/* ===================================== */}
      {/* 🔥 IMAGEN */}
      {/* ===================================== */}

      <img
        src={`/images/${lugar.imagen}`}
        className="card-img-top lugar-img"
        alt={lugar.nombre}
      />


      {/* ===================================== */}
      {/* 🔥 BODY */}
      {/* ===================================== */}

      <div className="card-body">


        {/* BADGE */}
        <span
          className={`rutaya-badge ${categoriaClase}`}
        >

          {lugar.categoria?.nombre ||
            "Turismo"}

        </span>


        {/* TITLE */}
        <h4
          className="card-title fw-bold"
          style={{
            lineHeight: "1.4",
            marginBottom: "12px",
          }}
        >

          {lugar.nombre}

        </h4>


        {/* DESC */}
        <p className="card-text text-muted">

          {lugar.descripcion}

        </p>


        {/* UBICACIÓN */}
        <p className="mb-3">

          <strong>Ubicación:</strong>
          {" "}
          {lugar.ubicacion}

        </p>


        {/* ===================================== */}
        {/* ⭐ RATING */}
        {/* ===================================== */}

        <div className="rating-stars mb-3">

          {[1,2,3,4,5].map((estrella) => (

            <span
              key={estrella}

              className={
                estrella <= rating
                  ? "star active"
                  : "star"
              }

              onClick={() =>
                calificar(estrella)
              }
            >

              ★

            </span>

          ))}

        </div>


        {/* ===================================== */}
        {/* 🔥 BOTÓN */}
        {/* ===================================== */}

        <Link
          to={`/lugar/${lugar.id}`}

          className="btn btn-rutaya w-100"
        >

          Explorar experiencia

        </Link>

      </div>

    </div>
  );
}

export default LugarCard;


