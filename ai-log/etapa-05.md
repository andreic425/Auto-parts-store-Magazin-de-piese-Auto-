# Stage 5: AI log

## Tools
- Claude (claude.ai)

## Conversations
- <link-ul conversației tale de pe claude.ai/share>  (understanding how buttons and onClick work in React)

## Key requests
### 1. How buttons and onClick work
- Asked: for an explanation of the button part of the stage, especially onClick, and why it is written `onClick={() => onDelete(piesa.id)}` and not `onClick={onDelete(piesa.id)}`.
- Got: an explanation that onClick must receive a function, not the result of calling one. The second form calls the function during rendering, so all the items disappear before any click. The explanation also covered how the card calls the function received through props, and why the delete button has an aria-label.
- Changed or rejected: I applied it to my delete button and to the theme toggle button in the header, and adapted the names to my own theme (piesa, nume).

### 2. Button text
- Asked: how to change the button text so it matches the example in the guide.
- Got: the theme button text comes from a condition on the state (it shows the theme you switch to, not the current one), and the delete button text sits between the tags, separate from the aria-label.
- Changed or rejected: I set the texts as in the guide and kept the aria-label consistent with the visible text.

## What I learned / what did not work
I learned how events work in React: the child component only announces what the user did by calling a function received through props, and the data stays in the parent. I understood the difference between passing a function and calling it, and why that mistake empties the list at render time. I also learned that the header counter is a derived value and does not need its own state.