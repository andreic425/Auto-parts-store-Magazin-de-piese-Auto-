# Stage 4: AI log

## Tools
- Gemini

## Conversations
- <https://gemini.google.com/app/dec3521938d335e2?hl=ro>

## Key requests
### 1. Background image in CSS
- Asked: A short explanation on how to add a background image in CSS.
- Got: Explanation of the `background-image: url(...)` property along with core properties (`background-size`, `background-repeat`, `background-position`, `background-attachment`) and a practical example.
- Changed or rejected: I took the `background-image`, `background-size: cover`, `background-repeat: no-repeat`, and `background-position: center` rules and applied them to my project's CSS file.

## What I learned / what did not work
I learned how to use the `background-image` property in CSS and why it's important to include `background-size: cover` and `background-repeat: no-repeat` so the image covers the entire element without repeating. What did not work / what to watch out for: the file path inside `url(...)` must be correct relative to the location of the CSS file.