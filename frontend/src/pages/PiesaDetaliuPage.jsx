import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPiesa, updatePiesa } from "../api.js";
import { ETICHETE_STARE } from "../constants.js";
import styles from "./PiesaDetaliuPage.module.css";

export default function PiesaDetaliuPage() {
  const { id } = useParams(); // text din URL, de exemplu "3"
  const [piesa, setPiesa] = useState(null);
  const [stocInput, setStocInput] = useState(0);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se reîncarcă dacă se schimbă id-ul din adresă
  useEffect(() => {
    let ignore = false;

    setLoading(true);
    setSavedMsg(null);

    fetchPiesa(id)
      .then((data) => {
        if (!ignore) {
          setPiesa(data);
          setStocInput(data.stoc ?? 0);
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

  async function handleSaveStoc(e) {
    e.preventDefault();
    if (!piesa || saving) return;

    const stocNou = Number(stocInput);
    if (!Number.isInteger(stocNou) || stocNou < 0) {
      setSavedMsg(null);
      setError("Introdu un număr întreg mai mare sau egal cu 0.");
      return;
    }

    setSaving(true);
    setSavedMsg(null);
    setError(null);

    try {
      const actualizata = await updatePiesa(piesa.id, {
        stoc: stocNou,
        disponibila: stocNou > 0,
      });
      setPiesa(actualizata);
      setStocInput(actualizata.stoc ?? stocNou);
      setSavedMsg("Stocul a fost actualizat.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error && !piesa) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Piesa nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  if (!piesa) {
    return (
      <section className="panel">
        <p className="info">Piesa nu a fost găsită.</p>
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
        <dt>Stoc</dt>
        <dd>{piesa.stoc ?? 0}</dd>
        <dt>Disponibilitate</dt>
        <dd>{piesa.disponibila ? "Disponibilă" : "Indisponibilă"}</dd>
        <dt>Descriere</dt>
        <dd>{piesa.descriere}</dd>
        <dt>ID</dt>
        <dd>{piesa.id}</dd>
      </dl>

      <form onSubmit={handleSaveStoc}>
        <label htmlFor="stoc-nou">Schimbă stocul:</label>
        <input
          id="stoc-nou"
          type="number"
          min="0"
          step="1"
          value={stocInput}
          onChange={(e) => setStocInput(e.target.value)}
        />
        <button type="submit" disabled={saving}>
          {saving ? "Se salvează..." : "Salvează stoc"}
        </button>
      </form>

      {savedMsg && <p className="info">{savedMsg}</p>}
      {error && (
        <p className="error" data-testid="error">
          {error}
        </p>
      )}
    </section>
  );
}