# MRSK — Modern React Starter Kit

![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript 5.9](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind 4](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint 9](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

A modern baseline for building React apps: **TypeScript-first, Vite-powered, and styled with Tailwind**.  
Comes preconfigured with strict TypeScript, React Compiler, and a clean ESLint setup.

---

## 🚀 Getting Started

```bash
npm create mrsk@latest [my-app]
```

```bash
npm install
npm run dev
```

- **Build** → `npm run build`
- **Preview** → `npm run preview`
- **Lint** → `npm run lint`

---

## ✨ Features

- **React 19 + Compiler** — future-proof performance out of the box.
- **TypeScript 5.9 (strict)** — solution-style configs for app and Node environments.
- **Vite 7** — lightning-fast dev server, optimized builds.
- **Tailwind 4** — config-less styling with animation utilities included.
- **ESLint 9** — flat config with typescript-eslint, react-x, and more.
- **Import Aliases** — clean `@/` paths baked in by default.

---

## ⚙️ TypeScript Setup

- **Root (`tsconfig.json`)** → shared strict options (bundler mode, aliases, flags).
- **App (`tsconfig.app.json`)** → DOM libs, `jsx: react-jsx`, `types: ["vite/client"]`.
- **Node (`tsconfig.node.json`)** → Node libs for configs/tests.

👉 This prevents Node globals from leaking into browser code while keeping config files type-safe.  
Node types are included by default, so imports like `fs` or `path` don’t squiggle in your editor.

---

## 🛠 Utils

### [`class-variance-authority`](https://github.com/joe-bell/cva)

Optional utility for variant-driven APIs.  
Pairs perfectly with `cn` for building reusable, styled components.

### `cn`

A tiny **local** helper that composes ([clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)) for ergonomic Tailwind class merging:

```tsx
import { cn } from '@/lib/utils'

function Button({ primary }: { primary?: boolean }) {
  return (
    <button className={cn('px-4 py-2', primary && 'bg-blue-600 text-white')}>
      Click me
    </button>
  )
}
```

### `ThemeProvider`

Light/dark mode provider: derives default from system and integrates with Tailwind’s `dark:` variant.

_ThemeProvider and cn are adapted from [shadcn/ui](https://ui.shadcn.com)._

---

## 🪝 Hooks

- **`useTheme`** — manage light/dark theme with `setTheme` and `toggleTheme` (via `ThemeProvider`).
- **`useMobile`** — responsive helper that returns `true` on mobile breakpoints.
- **`useDebouncedValue`** — debounces any state value with a configurable delay.

---

## 📦 Dependencies

```jsonc
{
 "dependencies": {
    "@tailwindcss/vite": "^4.1.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.544.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.5.2",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.3",
    "babel-plugin-react-compiler": "^19.1.0-rc.3",
    "eslint": "^9.36.0",
    "eslint-import-resolver-typescript": "^4.4.4",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-react-hooks": "^6.0.0-rc.1",
    "eslint-plugin-react-refresh": "^0.4.21",
    "eslint-plugin-react-x": "^1.53.1",
    "globals": "^16.4.0",
    "tw-animate-css": "^1.3.8",
    "typescript": "^5.9.2",
    "typescript-eslint": "^8.44.1",
    "vite": "^7.1.7"
  }
}
```
