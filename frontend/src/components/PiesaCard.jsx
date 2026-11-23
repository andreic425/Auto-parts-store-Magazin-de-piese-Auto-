import { useState } from "react";
import { Link } from "react-router-dom";
import { ETICHETE_STARE } from "../constants.js";
import { formatPret } from "../format.js";
import styles from "./PiesaCard.module.css";

export default function PiesaCard({ piesa, onToggle, onDelete, onBuy }) {
  const [deschis, setDeschis] = useState(false);
  const stoc = piesa.stoc ?? 0;
  const poateCumpara = stoc > 0 && Number(piesa.pret) > 0;

  return (
    <li
      className={
        piesa.disponibila ? styles.card : `${styles.card} ${styles.done}`
      }
      data-testid="item"
      data-id={piesa.id}
    >
      {piesa.imagine && (
        <img
          className={styles.img}
          src={piesa.imagine}
          alt={piesa.denumire}
          loading="lazy"
        />
      )}

      <div className={styles.main}>
        <input
          type="checkbox"
          checked={piesa.disponibila}
          onChange={() => onToggle(piesa.id)}
          aria-label={`Marchează ${piesa.denumire}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/piese/${piesa.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {piesa.denumire}
          </Link>
          <span className={`badge badge-${piesa.stare}`}>
            {ETICHETE_STARE[piesa.stare]}
          </span>
        </div>
      </div>

      <div className={styles.pret}>
        <strong>{formatPret(piesa.pret)}</strong>
        <span
          className={stoc > 0 ? styles.stoc : styles.stocEpuizat}
          data-testid="item-stoc"
        >
          {stoc > 0 ? `Stoc: ${stoc} buc.` : "Stoc epuizat"}
        </span>
      </div>

      <div className={styles.actions}>
        <span className={styles.status}>
          {piesa.disponibila ? "Disponibilă" : "Indisponibilă"}
        </span>

        <button
          type="button"
          className={styles.detalii}
          onClick={() => setDeschis(!deschis)}
        >
          Detalii {deschis ? "▲" : "▼"}
        </button>

        <button
          className="btn-danger"
          onClick={() => onDelete(piesa.id)}
          aria-label={`Șterge ${piesa.denumire}`}
          data-testid="item-delete"
        >
          Șterge
        </button>
      </div>

      <button
        type="button"
        className={styles.cumpara}
        onClick={() => onBuy(piesa)}
        disabled={!poateCumpara}
        data-testid="item-buy"
      >
        Cumpără
      </button>

      {deschis && <div className={styles.descriere}>{piesa.descriere}</div>}
    </li>
  );
}