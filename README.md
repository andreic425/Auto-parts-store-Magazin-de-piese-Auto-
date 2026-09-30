# Magazin de Piese Auto

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
| Claude | First version of the HTML/CSS and the README; explanation and review of my CSS (stage 1) |

Details per stage: see the ai-log/ folder.

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

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