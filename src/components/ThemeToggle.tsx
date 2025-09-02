import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { toggleTheme } = useTheme()

  return (
    <button
      className="inline-flex items-center justify-center py-2.5"
      onClick={toggleTheme}
    >
      <Sun className="shrink-0 size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="shrink-0 absolute size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
