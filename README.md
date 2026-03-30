
## How to Run the Project

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Folder Structure Explanation

### `src/` - The main source code folder
Everything you build goes inside here.

*   `assets/`: For static files like images, fonts, and videos.
    *   *What goes inside*: `.png`, `.svg`, `.mp4`
    *   *What NOT to put here*: React components or CSS files.
*   `components/`: Reusable UI parts used across different pages.
    *   *What goes inside*: Buttons, Navbars, Modals.
    *   *What NOT to put here*: Full page layouts or page-specific logic.
*   `context/`: Global state management using React Context API.
    *   *What goes inside*: `AuthContext.jsx`, `ThemeContext.jsx`.
    *   *What NOT to put here*: Local component state.
*   `hooks/`: Custom React hooks to share logic between components.
    *   *What goes inside*: `useFetch.js`, `useWindowSize.js`.
    *   *What NOT to put here*: UI elements (JSX).
*   `layout/`: Structural components that wrap around pages.
    *   *What goes inside*: `MainLayout.jsx` (which might contain a Navbar, Sidebar, and a content placeholder).
    *   *What NOT to put here*: Individual micro-components.
*   `pages/`: Full views or screens of the application.
    *   *What goes inside*: `Home.jsx`, `Dashboard.jsx`, `Login.jsx`.
    *   *What NOT to put here*: Reusable buttons or deeply nested logic.
*   `routes/`: Routing configuration (e.g., React Router).
    *   *What goes inside*: `AppRoutes.jsx` mapping URLs to Pages.

### Root Files
*   `.gitignore`: Tells Git which files/folders to ignore (like `node_modules`).
*   `eslint.config.js`: Setup for ESLint to catch coding errors and enforce strict style rules.
*   `index.html`: The main HTML file where the React app is injected.
*   `package.json` / `package-lock.json`: Lists project dependencies and scripts.
*   `vite.config.js`: Configuration for the Vite bundler.

## File-Level Explanation

*   **`main.jsx`**: The entry point. It grabs the root element in `index.html` and renders the `<App />` component. Keep this file clean.
*   **`App.jsx`**: The root component. Usually sets up providers (like routing or context) and renders the main layout.
*   **`App.css` / `index.css`**: Global styles. `index.css` is for root-level resets and body styles. Use component-specific CSS or modules for individual components instead of filling these with everything.

## Best Practices

*   **Where to put reusable code**: Put reusable UI in `src/components/` and reusable logic in `src/hooks/`.
*   **Where to handle state**: Keep state as close to where it's used as possible. If multiple components need it, lift it up or put it in `src/context/` global state.
*   **How to organize components**: Create a separate folder for complex components to group the `.jsx` file with its `.css` file (e.g., `components/Button/Button.jsx` and `components/Button/Button.css`).

