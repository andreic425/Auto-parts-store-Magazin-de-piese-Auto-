const piese = [
  { id: 1, denumire: "Plăcuțe de frână Bosch", disponibila: true, stare: "noua" },
  { id: 2, denumire: "Alternator Valeo", disponibila: false, stare: "recond" },
  { id: 3, denumire: "Oglindă retrovizoare stânga", disponibila: true, stare: "second" },
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
          <pre>{JSON.stringify(piese, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}