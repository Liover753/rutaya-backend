const API = "http://localhost:8080/rutas";


// ========================================
// OBTENER RUTAS
// ========================================

export const obtenerRutas = async () => {

  const res = await fetch(API);

  return await res.json();
};


// ========================================
// CREAR RUTA
// ========================================

export const crearRuta = async (ruta) => {

  const res = await fetch(API, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(ruta),
  });

  return await res.json();
};


// ========================================
// ELIMINAR RUTA
// ========================================

export const eliminarRuta = async (id) => {

  await fetch(`${API}/${id}`, {

    method: "DELETE",
  });
};