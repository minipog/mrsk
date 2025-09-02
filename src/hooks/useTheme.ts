import * as React from 'react'

export type Theme = 'dark' | 'light' | 'system'

export type ThemeState = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeState | undefined>(
  undefined
)

export function useTheme() {
  const ctx = React.use(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')

  return ctx
}
