import { useState } from "react";
import { STARI } from "../constants.js";
import styles from "./PiesaForm.module.css";

const DENUMIRE_MAX = 100;
const DESCRIERE_MAX = 500;
const IMAGINE_IMPLICITA = "/images/default.jpg";
const PRET_IMPLICIT = "100";
const STOC_IMPLICIT = "10";

export default function PiesaForm({ onAdd }) {
  const [denumire, setDenumire] = useState("");
  const [stare, setStare] = useState("noua");
  const [descriere, setDescriere] = useState("");
  const [pret, setPret] = useState(PRET_IMPLICIT);
  const [stoc, setStoc] = useState(STOC_IMPLICIT);
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const d = denumire.trim();
    if (d === "") return "Denumirea este obligatorie.";
    if (d.length > DENUMIRE_MAX)
      return `Denumirea are maximum ${DENUMIRE_MAX} de caractere.`;
    if (descriere.trim().length > DESCRIERE_MAX)
      return `Descrierea are maximum ${DESCRIERE_MAX} de caractere.`;
    const p = Number(pret);
    if (pret.trim() === "" || Number.isNaN(p) || p <= 0)
      return "Prețul trebuie să fie un număr mai mare decât 0.";
    const s = Number(stoc);
    if (stoc.trim() === "" || !Number.isInteger(s) || s < 0)
      return "Stocul trebuie să fie un număr întreg, cel puțin 0.";
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
      await onAdd({
        denumire: denumire.trim(),
        stare,
        descriere: descriere.trim(),
        imagine: IMAGINE_IMPLICITA,
        pret: Number(pret),
        stoc: Number(stoc),
        disponibila: Number(stoc) > 0,
      });
      setDenumire("");
      setStare("noua");
      setDescriere("");
      setPret(PRET_IMPLICIT);
      setStoc(STOC_IMPLICIT);
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Denumire
        <input
          type="text"
          value={denumire}
          onChange={(e) => setDenumire(e.target.value)}
          placeholder="Ex: Disc de frână Brembo"
          maxLength={DENUMIRE_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Stare
        <select
          value={stare}
          onChange={(e) => setStare(e.target.value)}
          data-testid="form-stare"
        >
          {STARI.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Preț (RON)
        <input
          type="number"
          min="0"
          step="0.01"
          value={pret}
          onChange={(e) => setPret(e.target.value)}
          data-testid="form-pret"
        />
      </label>

      <label>
        Stoc (bucăți)
        <input
          type="number"
          min="0"
          step="1"
          value={stoc}
          onChange={(e) => setStoc(e.target.value)}
          data-testid="form-stoc"
        />
      </label>

      <label>
        Descriere
        <textarea
          rows={4}
          value={descriere}
          onChange={(e) => setDescriere(e.target.value)}
          placeholder="Compatibilitate, detalii, stare..."
          data-testid="form-descriere"
        />
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salvează..." : "Adaugă piesa"}
      </button>
    </form>
  );
}