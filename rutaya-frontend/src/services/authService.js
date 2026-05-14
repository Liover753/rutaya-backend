const API_URL = "https://rutaya-backend-production.up.railway.app/auth";

// ✅ Login admin
export async function loginAdmin(datos) {

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return response.json();
}
