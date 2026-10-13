const piese = [
  { id: 1, denumire: "Plăcuțe de frână Bosch", disponibila: true, stare: "noua" },
  { id: 2, denumire: "Alternator Valeo", disponibila: false, stare: "recond" },
  { id: 3, denumire: "Oglindă retrovizoare stânga", disponibila: true, stare: "second" }
];

const STARI_PERMISE = ["noua", "recond", "second"];

function listeazaDenumiri(lista) {
  return lista.map((p) => p.denumire);
}

function numaraDisponibile(lista) {
  return lista.filter((p) => p.disponibila).length;
}

function cautaDupaDenumire(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((p) => p.denumire.toLowerCase().includes(textCautat));
}

function nextId(lista) {
  return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

function adaugaPiesa(lista, denumire, stare = "noua") {
  const denumireCurata = denumire.trim();

  
  if (denumireCurata === "") {
    console.log("Eroare: Denumirea piesei nu poate fi goală!");
    return lista;
  }

  
  if (!STARI_PERMISE.includes(stare)) {
    console.log("Eroare: Starea specificată este invalidă!");
    return lista;
  }


  const piesaNoua = {
    id: nextId(lista),
    denumire: denumireCurata,
    disponibila: true,
    stare: stare
  };

  
  return [...lista, piesaNoua];
}


function comutaDisponibila(lista, id) {
  return lista.map((p) => 
    p.id === id ? { ...p, disponibila: !p.disponibila } : p
  );
}

function stergePiesa(lista, id) {
  return lista.filter((p) => p.id !== id);
}


console.log("--- Citire ---");
console.log("Denumiri:", listeazaDenumiri(piese).join(", "));
console.log("Disponibile:", numaraDisponibile(piese));
console.log("Căutare 'filtru' sau 'frână':", listeazaDenumiri(cautaDupaDenumire(piese, "frână")).join(", "));

console.log("--- Adăugare ---");
let listaActualizata = adaugaPiesa(piese, "Filtru de aer MANN", "noua");
console.log("Lista nouă:", listaActualizata.length, "piese");
console.log("Originalul a rămas cu:", piese.length, "piese");

console.log("--- Modificare și ștergere ---");
listaActualizata = comutaDisponibila(listaActualizata, 1);
console.log("După schimbarea disponibilității id 1, disponibile:", numaraDisponibile(listaActualizata));
listaActualizata = stergePiesa(listaActualizata, 3);
console.log("După ștergerea id 3:", listeazaDenumiri(listaActualizata).join(", "));

console.log("--- Validare ---");
adaugaPiesa(listaActualizata, "   "); 
adaugaPiesa(listaActualizata, "Bujii NGK", "distrusă");