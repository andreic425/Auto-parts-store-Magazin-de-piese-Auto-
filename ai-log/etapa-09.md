# Stage 9: AI Journal

## Tools
- Gemini

## Conversations
- <https://share.gemini.google/SDjRf1QyQ9vD>

## Key Prompts
### 1. Cum funcționează un backend (Request, Logică de business, Bază de date, Response)
- Asked: ce este backend-ul și care sunt pașii prin care procesează o acțiune din aplicație, cum ar fi plasarea unei comenzi.
- Received: explicația fluxului în 4 pași — Cererea (Request) trimisă prin API / HTTP, Logica de business (verificarea autentificării, a stocului, calculul prețului și al reducerilor), interogarea/salvarea datelor în Baza de date și Răspunsul (Response) returnat în format JSON către frontend.
- Changed or rejected: am aplicat acest flux direct pe scenariul unui magazin de piese auto (verificarea stocului de piese, calculul prețului și înregistrarea comenzilor clienților) și am renunțat la analogia cu restaurantul, deoarece nu se potrivește domeniului proiectului.

### 2. Componentele principale ale unui backend
- Asked: care sunt componentele esențiale care alcătuiesc arhitectura unui backend.
- Received: prezentarea celor 5 componente de bază — Serverul (instanța care ascultă cererile și rulează codul), Limbajele și framework-urile (Node.js, Python, Java, C#, Go, PHP), API-ul (puntea de comunicare cu frontend-ul), Baza de date (relațională precum PostgreSQL/MySQL sau non-relațională precum MongoDB/Redis) și Autentificarea/Securitatea (parole hash-uite, JWT, OAuth, permisiuni).
- Changed or rejected: am reținut structura componentelor pentru a planifica arhitectura backend a magazinului de piese auto (stocarea pieselor și a comenzilor într-o bază de date relațională și securizarea conturilor de utilizatori).

## What I learned / what didn't work
Am înțeles cum comunică frontend-ul cu backend-ul printr-un API în 4 pași (Request, Logică de business, Bază de date, Response) și care sunt componentele necesare (server, framework, API, bază de date, securitate) pentru a susține funcționalitățile unui magazin online de piese auto.