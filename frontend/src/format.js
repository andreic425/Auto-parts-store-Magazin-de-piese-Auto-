export function formatPret(valoare) {
  if (valoare == null || Number.isNaN(Number(valoare))) return "Preț nedefinit";
  return `${Number(valoare).toFixed(2)} RON`;
}