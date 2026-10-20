import PiesaList from "./components/PiesaList.jsx";

const piese = [
  { id: 1, denumire: "Plăcuțe de frână Bosch", disponibila: true, stare: "noua", imagine: "/images/placute-frana.jpg" },
  { id: 2, denumire: "Alternator Valeo", disponibila: false, stare: "recond", imagine: "/images/alternator.jpg" },
  { id: 3, denumire: "Oglindă retrovizoare stânga", disponibila: true, stare: "second", imagine: "/images/oglinda.jpeg" },
];

export default function App() {
  const disponibile = piese.filter((p) => p.disponibila).length;

  return (
    <>
      <header className="app-header">
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
          <PiesaList piese={piese} />
        </section>
      </main>
    </>
  );
}