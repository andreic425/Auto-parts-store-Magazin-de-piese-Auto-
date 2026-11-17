import { useState } from "react";
import { Link } from "react-router-dom";
import { ETICHETE_STARE } from "../constants.js";
import styles from "./PiesaCard.module.css";

export default function PiesaCard({ piesa, onToggle, onDelete }) {
  const [deschis, setDeschis] = useState(false);

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

      {deschis && <div className={styles.descriere}>{piesa.descriere}</div>}
    </li>
  );
}