import { Github } from 'lucide-react'

import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

export function App() {
  return (
    <ThemeProvider>
      <main>
        <section className="flex flex-col items-center justify-center gap-6 text-center">
          <h1>
            Modern React <span className="text-emerald-400">Starter Kit</span>
          </h1>
          <p className="text-lg max-w-prose text-current/80">
            <em>
              TypeScript-first, Vite-powered, styled with Tailwind — all
              preconfigured with React 19 Compiler and strict ESLint.
            </em>
          </p>
          <ul className="inline-flex items-center gap-4">
            <li>
              <a
                href="https://vite.dev/guide/"
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 rounded-full bg-emerald-600 text-white px-6 py-2.5 shadow transition hover:bg-emerald-700"
              >
                Get Started
              </a>
            </li>
            <li>
              <a
                href="https://github.com/minipog/mrsk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full inset-ring-2 inset-ring-emerald-600 px-6 py-2.5 shadow transition hover:bg-zinc-50 dark:inset-ring-zinc-600 dark:hover:bg-zinc-700"
              >
                <Github size={18} />
                GitHub
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </section>
      </main>
    </ThemeProvider>
  )
}
