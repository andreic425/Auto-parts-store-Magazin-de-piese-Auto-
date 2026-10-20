const ETICHETE_STARE = {
  noua: "Nouă",
  recond: "Recondiționată",
  second: "Second-hand",
};

export default function PiesaCard({ piesa }) {
  return (
    <li className={piesa.disponibila ? "item-card" : "item-card done"}>
      {piesa.imagine && (
        <img
          className="item-img"
          src={piesa.imagine}
          alt={piesa.denumire}
          loading="lazy"
        />
      )}
      <div>
        <h3>{piesa.denumire}</h3>
        <span className={`badge badge-${piesa.stare}`}>
          {ETICHETE_STARE[piesa.stare]}
        </span>
      </div>
      <span className="status">
        {piesa.disponibila ? "Disponibilă" : "Indisponibilă"}
      </span>
    </li>
  );
}