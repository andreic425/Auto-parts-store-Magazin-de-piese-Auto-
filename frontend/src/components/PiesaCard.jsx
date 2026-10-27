import { useState } from "react";

const ETICHETE_STARE = {
  noua: "Nouă",
  recond: "Recondiționată",
  second: "Second-hand",
};

export default function PiesaCard({ piesa, onToggle, onDelete }) {
  // Stare locală pentru a ține minte dacă descrierea este deschisă sau închisă
  const [deschis, setDeschis] = useState(false);

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

      <label className="item-main">
        <input
          type="checkbox"
          checked={piesa.disponibila}
          onChange={() => onToggle(piesa.id)}
        />
        <div>
          <h3>{piesa.denumire}</h3>
          <span className={`badge badge-${piesa.stare}`}>
            {ETICHETE_STARE[piesa.stare]}
          </span>
        </div>
      </label>

      <div className="item-actions">
        <span className="status">
          {piesa.disponibila ? "Disponibilă" : "Indisponibilă"}
        </span>

        {/* Butonul cu săgeată care comută starea la click */}
        <button
          type="button"
          className="btn-detalii"
          onClick={() => setDeschis(!deschis)}
        >
          Detalii {deschis ? "▲" : "▼"}
        </button>

        <button
          className="btn-danger"
          onClick={() => onDelete(piesa.id)}
          aria-label={`Șterge ${piesa.denumire}`}
        >
          Șterge
        </button>
      </div>

      {/* Dacă 'deschis' este true, afișează descrierea luată direct din obiectul piesei */}
      {deschis && (
        <div className="descriere-box">
          {piesa.descriere}
        </div>
      )}
    </li>
  );
}