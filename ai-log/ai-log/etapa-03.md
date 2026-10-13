# Stage 3: AI log

## Tools
- Gemini

## Conversations
- <https://gemini.google.com/app/6e2ef488f7bde33d?dest=create>

## Key requests
### 1. Introduction to React and Vite
- Asked: for an explanation of what React is and why a build tool like Vite is used.
- Got: an overview of components, JSX, props and state, plus the role of Vite (dev server with hot reload, bundling for production) and the structure of a new project (`index.html`, `src/main.jsx`, `App.jsx`, `package.json`).
- Changed or rejected: [ex: I skipped the parts about routing and context, since they are not needed in this stage].

### 2. Stage 3 guide applied to my project
- Asked: for a step-by-step explanation of the Stage 3 guide, using my own app (car parts shop).
- Got: an explanation of how to create the project with Vite, how to move the Stage 2 logic (`piese.js`) into components, how to use `useState` for the list of parts, how to render lists with `map` and `key`, and how to pass data through props. 
- Changed or rejected: I wrote the components myself, with my own names (for example [Placute de frana Bosh]), my own test data and my own styles, and checked the result in the browser and in the console.

### 3. Checking the result and the README
- Asked: whether my app and my README follow the Stage 3 guide, and for a review of this AI log.
- Got: [ex: a list of missing steps, README problems, run instructions `npm install` / `npm run dev`].
- Changed or rejected: [ex: I fixed the README and updated the AI usage section].

## What I learned / what did not work
During this stage I learned the basics of React and how Vite sets up and runs a project. I understood how a component re-renders when its state changes, why state is updated with a new array (`[...lista, nou]`, `map`, `filter`) and not by modifying the old one, and why every item in a rendered list needs a unique `key` (the unique id from Stage 2). 