# Noughts & Crosses

A lightweight React Tic-tac-toe game with Tailwind CSS, multiplayer support, scoreboard, and optional background music.

## Deploy to Netlify (Free)

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tic-tac-toe.git
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in (or create a free account)
   - Click **Add new site** → **Import an existing project**
   - Connect to **GitHub** and select your `tic-tac-toe` repo
   - Netlify auto-detects the build settings from `netlify.toml`
   - Click **Deploy site**

3. Your app will be live at `https://random-name.netlify.app` (or a custom name you choose).

## Deploy to GitHub Pages

If you prefer GitHub Pages, you'll need to set the base path in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/tic-tac-toe/',  // Replace with your repo name
})
```

Then use the [GitHub Pages deploy action](https://github.com/peaceiris/actions-gh-pages) or the `gh-pages` npm package.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173
