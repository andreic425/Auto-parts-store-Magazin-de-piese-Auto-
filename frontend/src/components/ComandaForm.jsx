import { useState } from "react";
import { formatPret } from "../format.js";
import styles from "./ComandaForm.module.css";

export default function ComandaForm({ piesa, onConfirm, onCancel }) {
  const [nume, setNume] = useState("");
  const [adresa, setAdresa] = useState("");
  const [oras, setOras] = useState("");
  const [judet, setJudet] = useState("");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    if (nume.trim().length < 3) return "Introdu numele complet.";
    if (adresa.trim().length < 5)
      return "Introdu adresa de livrare (stradă și număr).";
    if (oras.trim() === "") return "Orașul este obligatoriu.";
    if (judet.trim() === "") return "Județul este obligatoriu.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onConfirm({
        nume: nume.trim(),
        adresa: adresa.trim(),
        oras: oras.trim(),
        judet: judet.trim(),
      });
    } catch (err) {
      setEroare(err.message);
      setTrimite(false);
    }
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Date de livrare"
    >
      <form
        className={styles.modal}
        onSubmit={handleSubmit}
        noValidate
        data-testid="comanda-form"
      >
        <h2>Date de livrare</h2>
        <p className={styles.produs}>
          {piesa.denumire} · <strong>{formatPret(piesa.pret)}</strong>
        </p>

        <label>
          Nume complet
          <input
            type="text"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
            autoFocus
            data-testid="comanda-nume"
          />
        </label>

        <label>
          Adresă de livrare
          <input
            type="text"
            value={adresa}
            onChange={(e) => setAdresa(e.target.value)}
            placeholder="Strada, număr, bloc, apartament"
            data-testid="comanda-adresa"
          />
        </label>

        <div className={styles.rand}>
          <label>
            Oraș
            <input
              type="text"
              value={oras}
              onChange={(e) => setOras(e.target.value)}
              data-testid="comanda-oras"
            />
          </label>
          <label>
            Județ
            <input
              type="text"
              value={judet}
              onChange={(e) => setJudet(e.target.value)}
              data-testid="comanda-judet"
            />
          </label>
        </div>

        {eroare && (
          <p className="error" data-testid="comanda-error">
            {eroare}
          </p>
        )}

        <div className={styles.butoane}>
          <button
            type="button"
            className={styles.anuleaza}
            onClick={onCancel}
            disabled={trimite}
          >
            Anulează
          </button>
          <button
            type="submit"
            className={styles.confirma}
            disabled={trimite}
            data-testid="comanda-confirma"
          >
            {trimite ? "Se procesează..." : "Confirmă comanda"}
          </button>
        </div>
      </form>
    </div>
  );
}