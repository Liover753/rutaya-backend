const API = "https://rutaya-backend-production.up.railway.app/categorias";

export const obtenerCategorias = async () => {
  const res = await fetch(API);
  return await res.json();
};    