# Stage 7: AI Journal

## Tools
- Gemini

## Conversations
- <https://share.gemini.google/P1Iuywg2VXwo> 

## Key Prompts
### 1. Creating a web form
- Asked: how to build a form for a website.
- Received: creating a web form involves two main parts: the HTML structure (`<form>`, `<input>`, `<textarea>`) styled with CSS, and a backend or third-party service (like Formspree or PHP) to process and send the submitted data.
- Changed or rejected: I clarified that I am working with JSON on the frontend rather than using a traditional PHP backend.

### 2. Handling form submissions with JSON in frontend
- Asked: how to handle the form when working with JSON on the frontend.
- Received: instead of a classic form redirect, JavaScript is used with `e.preventDefault()` to capture input values, convert them into a JSON string via `JSON.stringify()`, and send them asynchronously to an API using `fetch()` with `Content-Type: application/json`.
- Changed or rejected: I accepted the JavaScript `fetch` and `JSON.stringify()` approach (as well as the `FormData` shortcut) to integrate the form directly into my frontend workflow.

## What I learned / what didn't work
I learned how to prevent default browser reloads on form submission using JavaScript and how to serialize form inputs into a JSON payload to send via `fetch()` instead of relying on traditional server-side form handling.