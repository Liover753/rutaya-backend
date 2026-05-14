const API = "http://localhost:8080/categorias";

export const obtenerCategorias = async () => {
  const res = await fetch(API);
  return await res.json();
};    