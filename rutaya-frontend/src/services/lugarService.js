const API = "http://localhost:8080/lugares";


// ===============================
// ✅ OBTENER TODOS
// ===============================
export const obtenerLugares = async () => {

  const res = await fetch(API);

  return await res.json();
};


// ===============================
// ✅ OBTENER POR ID
// ===============================
export const obtenerLugarPorId = async (id) => {

  const res = await fetch(`${API}/${id}`);

  return await res.json();
};


// ===============================
// ✅ BUSCAR POR NOMBRE
// ===============================
export const buscarLugares = async (nombre) => {

  const res = await fetch(`${API}/buscar?nombre=${nombre}`);

  return await res.json();
};


// ===============================
// ✅ FILTRAR POR CATEGORÍA
// ===============================
export const filtrarPorCategoria = async (categoriaId) => {

  const res = await fetch(`${API}/categoria/${categoriaId}`);

  return await res.json();
};


// ===============================
// ✅ CREAR LUGAR
// ===============================
export const crearLugar = async (lugar) => {

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lugar),
  });

  return await res.json();
};


// ===============================
// ✅ EDITAR LUGAR
// ===============================
export const actualizarLugar = async (id, lugar) => {

  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lugar),
  });

  return await res.json();
};


// ===============================
// ✅ ELIMINAR LUGAR
// ===============================
export const eliminarLugar = async (id) => {

  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};
