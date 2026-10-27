import { useState } from "react";
import PiesaList from "./components/PiesaList.jsx";

const PIESE_INITIALE = [
  { id: 1, denumire: "Plăcuțe de frână Bosch", disponibila: true, stare: "noua", imagine: "/images/placute-frana.jpg" },
  { id: 2, denumire: "Alternator Valeo", disponibila: false, stare: "recond", imagine: "/images/alternator.jpg" },
  { id: 3, denumire: "Oglindă retrovizoare stânga", disponibila: true, stare: "second", imagine: "/images/oglinda.jpeg" },
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [piese, setPiese] = useState(PIESE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggleDisponibila(id) {
    setPiese((prev) =>
      prev.map((p) => (p.id === id ? { ...p, disponibila: !p.disponibila } : p))
    );
  }

  function handleDelete(id) {
    setPiese((prev) => prev.filter((p) => p.id !== id));
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
          {tema === "dark" ? "Light ON" : "Dark ON"}
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
          <h2>Piesele noastre</h2>
          <PiesaList
            piese={piese}
            onToggle={handleToggleDisponibila}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}