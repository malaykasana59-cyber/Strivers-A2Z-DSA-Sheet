# takeuforward-for-free (Striver's A2Z DSA Sheet — OG Edition)

> Clean, distraction-free, zero-bloatware website containing all 369 DSA problems from Striver's A2Z DSA Sheet with Brute -> Better -> Optimal algorithm solutions, interactive algorithm visualizers, and offline progress tracking.

---

## ✨ Features

- **OG-Focused & Clean**: Zero bloatware, zero ads, zero tracking, blazing fast performance.
- **Complete A2Z Sheet Coverage**: 369 problems across all 16 topics and subtopics.
- **Brute -> Better -> Optimal Solutions**: Structured learning order with step-by-step algorithms, C++ code, and Time/Space complexity badges.
- **Interactive Visualization Box**: Step-by-step interactive algorithm simulator (Kadane's Algorithm, Binary Search, Two Sum, Dutch National Flag, Majority Element, Array Pointer Stepper) with Play, Pause, Step Forward/Back, Speed controls, and custom input testing.
- **Progress Tracking & Persistence**: Check off solved problems, bookmark questions for revision, and take personal notes saved locally in `localStorage`.
- **Instant Search & Multi-Filters**: Instant search by problem name or concept, filter by topic, difficulty (Easy, Medium, Hard), or completion status.
- **Dark & Light Mode**: Default OG dark theme with one-click toggle to clean light mode.
- **Zero-CORS & Easily Hostable**: Fully static frontend that runs offline, via `file:///` double-click, or deployed on any static web host in seconds.

---

## 🚀 Quick Start / Local Setup

### 1. Directly Open in Browser (Zero Server Needed)
You can simply open `index.html` directly in any web browser! The application includes a fallback data loader (`data/problems.js`) that bypasses CORS restrictions when opening via `file:///`.

### 2. Local Static HTTP Server
```bash
# Using Python
python3 -m http.server 8080

# Or using npm
npm start
```
Then visit `http://localhost:8080` in your browser.

---

## 🌐 Easy Hosting

Because `takeuforward-for-free` is a 100% static web app, it can be hosted for free on:

### GitHub Pages
1. Go to your repository settings on GitHub.
2. In the **Pages** tab, select the `main` branch as the source and root directory (`/`).
3. Save, and your website will be live at `https://<your-username>.github.io/<repo-name>/`.

### Vercel / Netlify / Cloudflare Pages
- Connect your GitHub repository to Vercel, Netlify, or Cloudflare Pages.
- Build command: `npm run build` (or leave empty).
- Output directory: `.` (root directory).
- Deploy!

---

## 🛠 Rebuilding the Problem Dataset

If you add new `.cpp` files or modify existing solutions:
```bash
npm run build
```
This runs `scripts/build_data.py`, scanning all 16 topic directories and re-generating both `data/problems.json` and `data/problems.js`.

---

## 🧪 Testing (TDD Workflow)

The project includes an automated test suite verifying the problem parser, interactive visualizer state engines, and progress/search store:
```bash
npm test
```

---

## 📂 Repository Structure

- `01.Arrays/` to `16. Strings (Hard)/`: All original DSA question and solution `.cpp` files
- `css/style.css`: Minimalist OG stylesheet with CSS custom properties
- `js/`:
  - `parser.js`: C++ problem file parser
  - `visualizer.js`: Interactive algorithm simulation engine
  - `store.js`: LocalStorage state management and search/filtering
  - `app.js`: Main application controller
- `data/`:
  - `problems.json`: Structured dataset of all 369 questions
  - `problems.js`: Fallback script for zero-CORS browser execution
- `scripts/build_data.py`: Compiler script extracting solutions and metadata
- `test/`: TDD unit tests
- `index.html`: Main web portal
