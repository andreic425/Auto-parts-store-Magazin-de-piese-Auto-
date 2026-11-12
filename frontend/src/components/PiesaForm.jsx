import { useState } from "react";

const STARI = [
  { value: "noua", label: "Nouă" },
  { value: "recond", label: "Recondiționată" },
  { value: "second", label: "Second-hand" },
];

const DENUMIRE_MAX = 100;
const DESCRIERE_MAX = 500;
const IMAGINE_IMPLICITA = "/images/default.jpg";

export default function PiesaForm({ onAdd }) {
  const [denumire, setDenumire] = useState("");
  const [stare, setStare] = useState("noua");
  const [descriere, setDescriere] = useState("");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const d = denumire.trim();
    if (d === "") return "Denumirea este obligatorie.";
    if (d.length > DENUMIRE_MAX)
      return `Denumirea are maximum ${DENUMIRE_MAX} de caractere.`;
    if (descriere.trim().length > DESCRIERE_MAX)
      return `Descrierea are maximum ${DESCRIERE_MAX} de caractere.`;
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
        disponibila: true,
      });
      setDenumire("");
      setStare("noua");
      setDescriere("");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className="item-form"
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

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă piesa"}
      </button>
    </form>
  );
}