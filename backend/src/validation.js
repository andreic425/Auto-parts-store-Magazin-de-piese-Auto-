export const STARI_PIESA = ["noua", "recond", "second"];
const DENUMIRE_MAX = 120;

export function valideazaPiesa(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.denumire !== undefined) {
    if (typeof body.denumire !== "string" || body.denumire.trim() === "") {
      erori.push("denumire este obligatorie");
    } else if (body.denumire.trim().length > DENUMIRE_MAX) {
      erori.push(`denumire are maximum ${DENUMIRE_MAX} de caractere`);
    } else {
      date.denumire = body.denumire.trim();
    }
  }

  if (!partial || body.stoc !== undefined) {
    const stocVal =
      body.stoc === undefined && !partial ? 0 : Number(body.stoc);
    if (!Number.isInteger(stocVal) || stocVal < 0) {
      erori.push("stoc trebuie să fie un număr întreg mai mare sau egal cu 0");
    } else {
      date.stoc = stocVal;
    }
  }

  if (!partial || body.stare !== undefined) {
    const s = body.stare ?? "noua";
    if (!STARI_PIESA.includes(s)) {
      erori.push(`stare trebuie să fie una din: ${STARI_PIESA.join(", ")}`);
    } else {
      date.stare = s;
    }
  }

  if (body.disponibila !== undefined) {
    if (typeof body.disponibila !== "boolean") {
      erori.push("disponibila trebuie să fie true sau false");
    } else {
      date.disponibila = body.disponibila;
    }
  } else if (!partial) {
    date.disponibila = (date.stoc ?? 0) > 0;
  }

  if (body.pret !== undefined) {
    const pretVal = Number(body.pret);
    if (!Number.isFinite(pretVal) || pretVal < 0) {
      erori.push("pret trebuie să fie un număr mai mare sau egal cu 0");
    } else {
      date.pret = pretVal;
    }
  } else if (!partial) {
    date.pret = 0;
  }

  if (body.descriere !== undefined) {
    if (typeof body.descriere !== "string") {
      erori.push("descriere trebuie să fie text");
    } else {
      date.descriere = body.descriere.trim();
    }
  }

  if (body.imagine !== undefined) {
    if (typeof body.imagine !== "string") {
      erori.push("imagine trebuie să fie text");
    } else {
      date.imagine = body.imagine.trim();
    }
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}