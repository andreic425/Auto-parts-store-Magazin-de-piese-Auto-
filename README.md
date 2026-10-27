# Auto Parts Store

A web application for browsing and managing an auto parts store's catalog. Each part has a condition (new, refurbished, or used) and a category, and is marked as either available or unavailable.
It is designed for customers who wish to search for and purchase auto parts via an online platform.

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
| Claude | I used artificial intelligence to understand and use HTML, CSS and JavaScript (stages 1-2).                         |



## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

## Stage 1 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/index.html#L10-L64) | open the page |
| S1-R5 | finished card looks different | [style.css](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/style.css#L128-L131) | look at the card (.done) |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/style.css#L36-L44) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-1/style.css#L142-L158) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [commit history](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/commits/stage-1) | commit history |


## Stage 2: data logic

Plain JavaScript, no DOM. `piese.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Stage 2 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/951a53d64b7d69d66f511b50c2e41f397e38e632/index.html#L66) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [piese.js](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/951a53d64b7d69d66f511b50c2e41f397e38e632/piese.js#L1-L5) | read |
| S2-R3 | list, count, search, add, toggle, delete | [piese.js](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/951a53d64b7d69d66f511b50c2e41f397e38e632/piese.js#L65-L79) | console output |
| S2-R4 | add rejects empty name and invalid tag | [piese.js](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/951a53d64b7d69d66f511b50c2e41f397e38e632/piese.js#L26-L52) | last 2 console lines |
| S2-R5 | original array unchanged after add | [piese.js](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/951a53d64b7d69d66f511b50c2e41f397e38e632/piese.js#L73) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-2/README.md#stage-2-data-logic), [ai-log/etapa-02.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/HASH/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commit history](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/commits/stage-2/) | commit history |


## Stage 3: Vite and React project

The app now lives in `frontend/`, built with Vite and React. The data from stage 2 (the `piese` array) moved into the main component, `App.jsx`. The header shows the total number of parts and the number of available parts, both computed from the data. The list is still printed raw (JSON); the components that draw the cards come in stage 4.

The stage 1 mockup and the stage 2 script are kept in `mockup/`, outside the new project.

## How to run

```bash
cd frontend
npm install
npm run dev
```

Then open the address printed in the terminal (http://localhost:5173).

To check that the project builds without errors:

```bash
cd frontend
npm run build
```

## Stage 3 checklist

| ID | Requirement | Where (permalink) | How to check |
|----|-------------|-------------------|--------------|
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-3/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L..-L..](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/377df7387b47a5d24b4662ab968863a00a691bbe/frontend/src/App.jsx#L8-L20) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L..-L..](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/377df7387b47a5d24b4662ab968863a00a691bbe/frontend/src/App.jsx#L1-L5) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-3/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/377df7387b47a5d24b4662ab968863a00a691bbe/frontend/.gitignore#L10) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](https://github.com/andreic425/Magazin-Piese-Auto/blob/<HASH>/README.md), [ai-log/etapa-03.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-3/ai-log/ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | [commit](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/commits/stage-2/) | commit history |git commit -m "Stage 3: add checklist permalinks"

## Stage 4: components

The list is rendered from the data, through two components:
- `PiesaList` receives the whole array and renders one card per item
- `PiesaCard` receives a single item through props and displays it

The empty list shows a message ("Nu există nicio piesă."), and the state of
an item (`disponibila`) changes the look of its card.

Frontend styling and card images were added after Stage 4. The mockup in
`mockup/` is unchanged.


## Stage 4: checklist

| ID | Requirement | Where (permalink) | How to check |
|----|-------------|-------------------|--------------|
| S4-R1 | 2+ components in `src/components/` | [frontend/src/components/](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/tree/stage-4/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [PiesaCard.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/fc496727a356e288f65461d86c913cd95dceac02/frontend/src/components/PiesaCard.jsx#L7-L29) | read |
| S4-R3 | map + `key={id}`, no console warnings | [PiesaList.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/fc496727a356e288f65461d86c913cd95dceac02/frontend/src/components/PiesaList.jsx#L9-L13) | F12, Console |
| S4-R4 | message for empty list | [PiesaList.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/fc496727a356e288f65461d86c913cd95dceac02/frontend/src/components/PiesaList.jsx#L4-L6) | set array to `[]` |
| S4-R5 | state changes the card look | [PiesaCard.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/fc496727a356e288f65461d86c913cd95dceac02/frontend/src/components/PiesaCard.jsx#L8-L22) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-4/README.md), [ai-log/etapa-04.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-4/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [commit](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/commits/stage-4) | commit history |

## Stage 5: local state and events
The parts list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh.

## Stage 5: checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | list kept in useState, in App | [App.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.jsx#L17) | read |
| S5-R2 | toggling changes state and card look | [App.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.jsx#L20-L24), [PiesaCard.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/components/PiesaCard.jsx#L9-L24) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.jsx#L26-L28), [PiesaCard.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/components/PiesaCard.jsx#L37-L43) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.jsx#L36) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.jsx#L20-L28) | read |
| S5-R6 | light / dark toggle: state + data-theme on html | [App.jsx](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.jsx#L10-L47), [App.css](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/8128aba6655cffd40bdc56d5b3450a82be0fc65c/frontend/src/App.css#L167-L193) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-5/README.md), [etapa-05.md](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/blob/stage-5/ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [commit](https://github.com/andreic425/Auto-parts-store-Magazin-de-piese-Auto-/commits/stage-5) | commit history |