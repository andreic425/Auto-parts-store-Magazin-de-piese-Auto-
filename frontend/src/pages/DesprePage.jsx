export default function DesprePage() {
  return (
    <section className="panel">
      <h2>Despre Magazin de Piese Auto</h2>
      <p>
        Magazin de Piese Auto este o aplicație web dezvoltată în cadrul
        proiectului de Tehnologii Web, concepută pentru a simplifica
        gestionarea și achiziționarea pieselor auto. Utilizatorii pot consulta
        catalogul de produse cu informații clare despre denumire, stare (nouă,
        recondiționată sau second-hand), preț, descriere, imagine și
        disponibilitatea în stoc, având și posibilitatea de a accesa pagina de
        detalii a fiecărei piese în parte.
      </p>
      <p>
        În pagina principală Piese, interfața este organizată în două zone
        principale: panoul de adăugare a unei piese noi și lista completă a
        pieselor din magazin. Formularul de adăugare verifică automat datele
        introduse, precum denumirea obligatorie, prețul pozitiv, stocul întreg
        și lungimea descrierii, înainte de a salva produsul. În dreptul listei
        este afișat permanent numărul total de piese și câte dintre acestea sunt
        disponibile în acel moment.
      </p>
      <p>
        Fiecare piesă este prezentată sub forma unui card interactiv care
        permite bifarea sau debifarea rapidă a disponibilității, extinderea
        descrierii direct în listă prin butonul Detalii, deschiderea fișei
        complete a piesei pe o rută dedicată sau ștergerea articolului din
        catalog. Toate aceste acțiuni comunică direct cu serverul prin cereri
        HTTP (GET, POST, PATCH și DELETE), astfel încât datele rămân
        sincronizate.
      </p>
      <p>
        Pentru piesele aflate în stoc și cu preț valid, butonul Cumpără
        deschide formularul modal pentru datele de livrare, unde se
        completează și se validează numele complet, adresa, orașul și județul
        clientului. La confirmarea comenzii, aplicația scade automat o unitate
        din stocul piesei, actualizează disponibilitatea dacă stocul ajunge la
        zero și generează instantaneu o factură cu număr unic, data curentă,
        datele expeditorului și ale clientului, produsul comandat și totalul de
        plată, pregătită pentru printare sau salvare în format PDF.
      </p>
      <p>
        Navigarea între paginile aplicației se face fără reîncărcarea
        browserului, incluzând și o pagină dedicată pentru rutele inexistente,
        iar antetul site-ului oferă un buton pentru comutarea între modul
        luminos și modul întunecat, adaptat preferințelor utilizatorului.
      </p>
      <p>Stack: React, Vite, React Router, Node.js, Express, MariaDB, Docker.</p>
    </section>
  );
}