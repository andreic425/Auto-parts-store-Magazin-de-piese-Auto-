export const STARI = [
  { value: "noua", label: "Nouă" },
  { value: "recond", label: "Recondiționată" },
  { value: "second", label: "Second-hand" },
];

export const ETICHETE_STARE = Object.fromEntries(
  STARI.map((s) => [s.value, s.label])
);