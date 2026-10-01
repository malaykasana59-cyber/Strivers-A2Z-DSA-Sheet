# Plan: takeuforward-for-free

## Overview
Build an old-style, OG-focused, clean, zero-bloatware website named **takeuforward-for-free** that indexes all 369 DSA problems in the repository, provides structured Brute -> Better -> Optimal algorithm explanations and code, includes an interactive algorithm visualization box for problems, and is 100% easily hostable on GitHub Pages, Vercel, Netlify, or locally.

---

## User Journeys
- **Journey 1 (Browse & Track):** As a student, I want to browse DSA topics and subtopics with progress checkboxes and bookmarking, so that I can systematically track my DSA preparation without bloat or ads.
- **Journey 2 (Problem Details & Approaches):** As a student, I want to open any question and view its problem statement, followed by its approaches in order (Brute Force -> Algorithm -> Code -> Complexity, then Better, then Optimal), so that I understand how to optimize solutions from scratch.
- **Journey 3 (Interactive Visualization):** As a student, I want an interactive algorithm visualization box for problems (like Kadane's algorithm, Two Sum, Binary Search, Dutch National Flag, etc.) with step-by-step playback and custom inputs, so that I can visually grasp how the algorithm works.
- **Journey 4 (Search & Filter):** As a student, I want to search across all 369 questions and filter by difficulty, topic, or completion status, so that I can quickly practice specific problems.
- **Journey 5 (Offline & Zero-Config Hosting):** As a learner or host, I want to host the site statically with zero backend dependencies and no complex build pipelines, so that it works seamlessly anywhere.

---

## Milestones & Tasks

### Milestone 1: Test Runner & TDD Test Suite (RED Phase)
- Set up `package.json` with test scripts using Node native test runner (`node --test`).
- Write unit tests for:
  1. `test/parser.test.js`:
     - Test parsing standard `.cpp` problem files with Question, Approach, Code, Time & Space Complexity.
     - Test parsing multi-approach problems (Brute, Better, Optimal detection).
     - Test metadata extraction (topic, subtopic, difficulty, title, id).
     - Test algorithm step extraction and complexity sanitization.
  2. `test/visualizer.test.js`:
     - Test Kadane's algorithm step engine (state transitions, max subarray tracking).
     - Test Binary Search step engine (low, high, mid, range elimination).
     - Test Two Sum step engine (complement lookup, pointer/hashmap tracking).
     - Test Dutch National Flag (0-1-2) step engine (low, mid, high pointer swaps).
     - Test generic array stepper.
  3. `test/store.test.js`:
     - Test progress calculation (total, solved count, percentage).
     - Test bookmarking and completion toggles with persistence schema.
     - Test search filtering by query, topic, difficulty, and status.
- Execute test runner to verify **RED** state (failures confirmed).

### Milestone 2: Data Extraction & Parser Pipeline (GREEN Phase)
- Implement `scripts/build_data.py`:
  - Scans all 16 topic directories (`01.Arrays` to `16. Strings (Hard)`).
  - Handles variations in comment styles (`/* ... */`, `// ...`).
  - Extracts Question text, Examples, Approach (with Brute / Better / Optimal separation where available), Code, Time Complexity, and Space Complexity.
  - Automatically identifies algorithm visualizer archetypes based on problem titles and topics.
  - Generates both `data/problems.json` and `data/problems.js` (`window.PROBLEMS_DATA = [...]`) to support both `fetch` and zero-CORS `file:///` local browsing.
- Run `build_data.py` to index all 369 problems.
- Verify parser tests pass.

### Milestone 3: Interactive Algorithm Visualizer Engine
- Implement `js/visualizer.js`:
  - Interactive state machine with Play, Pause, Step Forward, Step Back, Reset, Speed control (0.5x, 1x, 2x).
  - Specialized algorithms:
    - Kadane's Algorithm
    - Two Sum (Hashmap / Two Pointers)
    - Binary Search
    - Dutch National Flag (Sort 0 1 2)
    - Majority Element (Boyer-Moore)
    - Generic Array Pointer / Comparison Stepper
  - Interactive UI rendering: Array blocks, pointer labels (`i`, `j`, `low`, `mid`, `high`), step explanations, and custom input handlers.
- Verify visualizer tests pass.

### Milestone 4: Store & State Management
- Implement `js/store.js`:
  - `localStorage` adapter for solved status, bookmarked status, and user notes.
  - Filtering and searching engine.
  - Progress metrics calculation.
- Verify store tests pass.

### Milestone 5: OG Style UI & Application Layer
- Implement `css/style.css`:
  - Clean, distraction-free aesthetic with OG takeuforward orange/amber & dark slate theme.
  - Responsive design for mobile, tablet, and desktop.
  - Dark/Light mode support via CSS custom properties.
  - Syntax highlighting styling for C++ code blocks.
- Implement `js/app.js`:
  - Renders topic accordions with progress indicators.
  - Renders problem list with difficulty badges and completion checkboxes.
  - Renders problem detail modal with tabs for Brute Force / Better / Optimal.
  - Embeds interactive Visualizer Box for eligible problems.
  - 1-click Copy Code functionality.
  - Random problem picker and search/filter controls.
- Implement `index.html`:
  - Clean semantic HTML structure, zero third-party dependencies, instant load.

### Milestone 6: Refactor & Verification
- Run all tests to confirm **GREEN** status.
- Refactor for clarity, performance, and clean code separation.
- Check edge cases (special characters in C++ comments, empty queries, invalid inputs in visualizer).
- Write TDD evidence report (`takeuforward.tdd.md`).

### Milestone 7: Code Review
- Perform expert code review across functionality, security, performance, and maintainability.
