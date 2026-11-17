# Stage 8: AI Journal

## Tools
- Gemini

## Conversations
- <https://share.gemini.google/fro2HVlZjf5F> 

## Key Prompts
### 1. Implementing React Router and Layout
- Asked: how to configure React Router v6 with a shared Layout component containing a navigation bar and an Outlet.
- Received: wrap the app in `<BrowserRouter>`, define a parent `<Route element={<Layout />}>` in `App.jsx`, use `<NavLink>` for navigation links to automatically handle active states, and place `<Outlet />` where page contents should render.
- Changed or rejected: I applied the suggested layout structure and adapted the CSS class names to fit my project's existing design system using CSS Modules.

### 2. Handling Dynamic Routes and useParams
- Asked: how to retrieve an ID from the URL in a detail page and handle 404 server errors properly.
- Received: use the `useParams()` hook from `react-router-dom` to extract parameters like `id`, call an API helper method inside a `useEffect` hook, and manage `loading` and `error` states to conditionally render fallback messages or the fetched item details.
- Changed or rejected: I integrated `useParams()` inside `TaskDetaliuPage.jsx` and added a clean error-handling state for invalid task IDs.

## What I learned / what didn't work
I learned how to structure a Single Page Application using React Router, how to separate reusable UI components from route pages, and how to isolate component-specific styling using CSS Modules (`.module.css`) to prevent global style clashes.