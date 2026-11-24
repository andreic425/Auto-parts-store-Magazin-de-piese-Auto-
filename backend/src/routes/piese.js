import { Router } from "express";
import { parseId, valideazaPiesa } from "../validation.js";

const router = Router();

let piese = [
  {
    id: 1,
    denumire: "Plăcuțe de frână Bosch",
    disponibila: true,
    stare: "noua",
    imagine: "/images/placute-frana.jpg",
    descriere:
      "Siguranță maximă pe șosea! Set premium Bosch pentru puntea față, compatibil VW Golf VII (2012-2020).\nBucură-te de o frânare absolut silențioasă, răspuns prompt la pedală și durabilitate extinsă cu uzură redusă.\nCalitate germană la super preț!",
    stoc: 4,
    pret: 240,
  },
  {
    id: 2,
    denumire: "Alternator Valeo",
    disponibila: true,
    stare: "recond",
    imagine: "/images/alternator.jpg",
    descriere:
      "Performanță ca în prima zi! Alternator original Valeo, recondiționat profesional și testat riguros pe stand.\nSpecial conceput pentru Renault Megane III 1.5 dCi. Asigură o încărcare perfect stabilă a bateriei și protejează întreaga instalație electrică.",
    stoc: 1,
    pret: 650,
  },
  {
    id: 3,
    denumire: "Oglindă retrovizoare stânga",
    disponibila: true,
    stare: "second",
    imagine: "/images/oglinda.jpeg",
    descriere:
      "Vizibilitate impecabilă fără compromisuri! Oglindă stânga originală în stare excelență, compatibilă cu gama BMW Seria 1 (E81-E88) și Seria 3 (E46-E93). Montaj rapid, reglaj perfect și aspect exterior îngrijit. O alegere inteligentă!",
    stoc: 3,
    pret: 180,
  },
  {
    id: 4,
    denumire: "Filtru de ulei Mann",
    disponibila: true,
    stare: "noua",
    imagine: "/images/filtru.jpeg",
    descriere:
      "Filtru de ulei Mann-Filter de înaltă eficiență, conceput pentru reținerea optimă a impurităților din uleiul de motor. Asigură protecție avansată a pieselor în mișcare și menține performanțele optime ale motorului între schimburile de ulei.",
    stoc: 3,
    pret: 45,
  },
  {
    id: 5,
    denumire: "Far dreapta VW Golf",
    disponibila: false,
    stare: "second",
    imagine: "/images/far.jpeg",
    descriere:
      "Far original pentru partea dreaptă, compatibil cu modelul VW Golf. Stare bună de funcționare, cu dispersor clar și prinderi intacte, ideal pentru înlocuirea unei componente deteriorate.",
    stoc: 2,
    pret: 350,
  },
];

let nextId = 6;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }

  const index = piese.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Piesa nu există" });
    return -1;
  }

  return index;
}

router.get("/", (req, res) => {
  res.json(piese);
});

router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(piese[index]);
});

router.post("/", (req, res) => {
  const { erori, date } = valideazaPiesa(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  const piesa = {
    id: nextId++,
    ...date,
  };
  piese.push(piesa);
  res.status(201).json(piesa);
});

router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  const { erori, date } = valideazaPiesa(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  piese[index] = { ...piese[index], ...date };
  res.json(piese[index]);
});

router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  piese.splice(index, 1);
  res.status(204).end();
});

export default router;