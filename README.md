# Magazin de Piese Auto

Aplicație web pentru consultarea și gestionarea catalogului unui magazin de piese auto. Fiecare piesă are o stare (nouă, recondiționată, second-hand), o categorie și este marcată ca disponibilă sau indisponibilă.
Se adresează clienților care vor să caute și să cumpere piese auto printr-o platformă online simplă.

## Data model

| Field     | Type         | Notes                                |
| --------- | ------------ | ------------------------------------ |
| name      | text         | required, max 100 chars              |
| available | boolean      | toggled from the list, default true  |
| condition | fixed values | new, refurbished, second-hand        |
| category  | relation     | Engine, Brakes, Electrical           |
| user      | relation     | the owner of the item (from week 11) |

Sample data used across all stages:

1. Plăcuțe de frână Bosch, available, new
2. Alternator Valeo, unavailable, refurbished
3. Oglindă retrovizoare stânga, available, second-hand

## How to run

Open `index.html` in a browser. No build step, no server.

## AI usage

| Tool   | Used for                                                                                 |
| ------ | ---------------------------------------------------------------------------------------- |
| Claude | First version of the HTML/CSS and the README; explanation and review of my CSS (stage 1) |

Details per stage: see the ai-log/ folder.

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Stage 1 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L64](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/index.html#L10-L64) | open the page |
| S1-R5 | finished card looks different | [style.css#L128-L131](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/style.css#L128-L131) | look at the card (.done) |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L36-L44](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/style.css#L36-L44) and [style.css#L160-L162](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/style.css#L160-L162) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L142-L158](https://github.com/andreic425/Magazin-Piese-Auto/blob/ab1668c102356cb63eb133acd975812dacfad150/style.css#L142-L158) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [commit](https://github.com/andreic425/Magazin-Piese-Auto/commit/ab1668c102356cb63eb133acd975812dacfad150) | commit history |
