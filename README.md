# 🧮 Modern Calculator — React + TypeScript

A sleek, responsive calculator web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It features a colorful gradient background, a glassmorphism-inspired interface, and straightforward controls for everyday arithmetic.

## ✨ Features

- **Four basic operations:** Addition (+), subtraction (−), multiplication (×), and division (÷).
- **Decimal input:** Enter numbers with a decimal point.
- **Clear all (AC):** Reset the current input and calculation.
- **Backspace:** Remove the last character from the displayed input.
- **Equation preview:** See the pending operation above the main display.
- **Instant results:** Press the equals button to calculate and display a result.
- **Error display:** Shows `Error` if an expression cannot be evaluated.
- **Responsive UI:** Compact layout that adapts to smaller screens.
- **Modern styling:** Gradient background, translucent calculator panel, rounded buttons, hover effects, and Lucide icons.

## 🌐 Public Live Demo

The project includes a GitHub Actions workflow to publish the app on **GitHub Pages**. Once Pages is enabled and deployment succeeds, the public URL will be:

`https://viveksahu1974.github.io/project---3/`

**Enable it in GitHub:** Open **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source, then run the **Deploy calculator to GitHub Pages** workflow under **Actions**. The public demo link will work only after a successful deployment.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Component-based user interface |
| TypeScript | Type-safe application code |
| Vite 5 | Development server and production build |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Calculator button icons |
| ESLint | Code linting |

> This is a **frontend-only** application. No backend, database, or API keys are required.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or newer)
- **npm** (included with Node.js)
- **Git** (optional, for cloning)

### 1. Clone the repository

```bash
git clone https://github.com/viveksahu1974/project---3.git
cd project---3
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal (typically **`http://localhost:5173/`**). This address works **only on your own computer while `npm run dev` is running**; it is not a public live-demo URL.

### 4. Create a production build

```bash
npm run build
```

The build output will be written to the `dist/` directory.

### 5. Preview the production build

```bash
npm run preview
```

## 📜 Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## 📁 Project Structure

```text
project---3/
├── index.html              # HTML entry point
├── package.json            # Dependencies and npm scripts
├── package-lock.json       # Locked dependency versions
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── tsconfig.json           # TypeScript project configuration
└── src/
    ├── App.tsx             # Calculator UI and calculation logic
    ├── index.css           # Tailwind CSS directives
    ├── main.tsx            # React app entry point
    └── vite-env.d.ts       # Vite type declarations
```

## 🧑‍💻 How to Use

1. Select digits (`0–9`) to enter a number.
2. Choose an operation using **+**, **−**, **×**, or **÷**.
3. Enter the second number.
4. Select **=** to see the result.
5. Use **AC** to start over, or **backspace** to remove a character.

**Example:** `12 + 8 = 20`

## 🔍 Implementation Notes

- The calculator is implemented in `src/App.tsx` using React's `useState` hook.
- State tracks the current **display**, the pending **equation**, and whether a result was just calculated.
- Basic expression evaluation currently uses JavaScript's `eval()` on the assembled calculator input. A dedicated arithmetic evaluator would be a safer, more robust choice for future development.
- This is a basic two-operand calculator. It does not currently implement expression history, keyboard shortcuts, or advanced scientific functions.

## 🌱 Possible Future Improvements

- Keyboard input support
- Calculation history
- Better decimal and invalid-operation handling
- A dedicated expression parser instead of `eval()`
- Accessibility and automated tests
- Optional dark/light themes

## 👤 Author

**Vivek Sahu**

- GitHub: [@viveksahu1974](https://github.com/viveksahu1974)
- Repository: [project---3](https://github.com/viveksahu1974/project---3)

---

If you find the project useful, consider giving the repository a ⭐!
