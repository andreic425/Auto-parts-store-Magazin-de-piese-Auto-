# Stage 2: AI log

## Tools
- Claude (claude.ai)

## Conversations
- <[LINK-UL DE SHARE](https://claude.ai/share/0254b1c7-bd5c-4699-9c37-53aa229dd213)>  

## Key requests
### 1. Introduction to JavaScript
- Asked: for a short explanation of the JavaScript language.
- Got: an overview of what JS is, where it runs (browser, Node.js) and the basic concepts: variables (`let` / `const`), data types, functions, conditions and loops, events, the DOM and asynchronous code, with a short example and a tip to test code in the console (F12).
- Changed or rejected: I did not use the async part and the DOM part, since they are not needed in this stage.

### 2. Stage 2 guide applied to my project
- Asked: for a step-by-step explanation of the Stage 2 guide, using my own code (parts, conditions, availability).
- Got: an explanation of each step: linking the script, the array of objects with unique ids, `map`, `filter` and `reduce`, the `nextId` function, validation, toggle and delete, and the console tests, plus the idea of immutability and the spread operator.
- Changed or rejected: I wrote `piese.js` with my own names, test data (for example the new part "Filtru de aer MANN") and error messages, and checked the results in the console.

### 3. Checking the result and the README
- Asked: whether my console output was correct, and for a review of my README and of this AI log.
- Got: a line-by-line check of the console output (original array unchanged after adding, validation rejecting an empty name and an invalid condition) and a list of README problems.
- Changed or rejected: I fixed the README (separate heading and text, a single Status section, updated AI usage section).

## What I learned / what did not work
During this stage I learned the basics of JavaScript and how `map`, `filter` and `reduce` build new arrays instead of changing the original one. I understood why `[...lista, nou]` is used instead of `push`, and why the new id is computed from the maximum existing id and not from the length of the list. I also learned to read messages and line numbers in the browser console.