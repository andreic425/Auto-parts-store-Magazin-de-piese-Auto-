import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPiesa } from "../api.js";
import { ETICHETE_STARE } from "../constants.js";
import styles from "./PiesaDetaliuPage.module.css";

export default function PiesaDetaliuPage() {
  const { id } = useParams(); // text din URL, de exemplu "3"
  const [piesa, setPiesa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se reîncarcă dacă se schimbă id-ul din adresă
  useEffect(() => {
    let ignore = false;

    fetchPiesa(id)
      .then((data) => {
        if (!ignore) {
          setPiesa(data);
          setError(null); // o eroare de la un id anterior nu mai e valabilă
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Piesa nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la listă
      </Link>

      {piesa.imagine && (
        <img className={styles.img} src={piesa.imagine} alt={piesa.denumire} />
      )}

      <h2
        className={piesa.disponibila ? undefined : styles.done}
        data-testid="detail-title"
      >
        {piesa.denumire}
      </h2>

      <dl className={styles.fields}>
        <dt>Stare</dt>
        <dd>
          <span className={`badge badge-${piesa.stare}`}>
            {ETICHETE_STARE[piesa.stare]}
          </span>
        </dd>
        <dt>Disponibilitate</dt>
        <dd>{piesa.disponibila ? "Disponibilă" : "Indisponibilă"}</dd>
        <dt>Descriere</dt>
        <dd>{piesa.descriere}</dd>
        <dt>ID</dt>
        <dd>{piesa.id}</dd>
      </dl>
    </section>
  );
}