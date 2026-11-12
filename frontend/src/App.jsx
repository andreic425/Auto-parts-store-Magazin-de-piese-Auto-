import { useEffect, useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import PiesaForm from "./components/PiesaForm.jsx";
import { createPiesa, deletePiesa, fetchPiese, updatePiesa } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [piese, setPiese] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchPiese();
        if (!ignore) setPiese(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(piesa) {
    const creata = await createPiesa(piesa);
    setPiese((prev) => [...prev, creata]);
  }

  async function handleToggleDisponibila(id) {
    const piesa = piese.find((p) => p.id === id);
    try {
      const actualizata = await updatePiesa(id, {
        disponibila: !piesa.disponibila,
      });
      setPiese((prev) => prev.map((p) => (p.id === id ? actualizata : p)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deletePiesa(id);
      setPiese((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const disponibile = piese.filter((p) => p.disponibila).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Magazin de Piese Auto</h1>
        <p>
          Acest site WEB are scopul de a oferi utilizatorilor o platformă
          pentru căutarea și cumpărarea de piese auto.
        </p>
        <p className="app-count">
          {piese.length} piese în total, dintre care {disponibile} disponibile
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Adaugă piesă</h2>
          <PiesaForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Piesele noastre</h2>

          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă piesele...
            </p>
          )}

          {error && (
            <p className="error" data-testid="error">
              Nu am putut încărca datele: {error}. Rulează{" "}
              <code>npm run api</code>?
            </p>
          )}

          {!loading && (
            <PiesaList
              piese={piese}
              onToggle={handleToggleDisponibila}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}