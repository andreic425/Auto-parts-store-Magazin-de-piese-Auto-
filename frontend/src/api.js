export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchPiese() {
  return request("/piese");
}

export function createPiesa(piesa) {
  return request("/piese", { method: "POST", body: JSON.stringify(piesa) });
}

export function updatePiesa(id, changes) {
  return request(`/piese/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deletePiesa(id) {
  return request(`/piese/${id}`, { method: "DELETE" });
}