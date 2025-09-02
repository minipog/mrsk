import * as React from 'react'

import { type Theme, type ThemeState, ThemeContext } from '@/hooks/useTheme'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'mrsk-ui-theme',
}: ThemeProviderProps) {
  const [theme, _setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const storeTheme = localStorage.getItem(storageKey) as Theme | null
    const effectiveTheme = storeTheme ?? defaultTheme

    const resolvedTheme =
      effectiveTheme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : effectiveTheme

    _setTheme(resolvedTheme)
    localStorage.setItem(storageKey, resolvedTheme)
  }, [storageKey, defaultTheme])

  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove('system', 'light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const setTheme = React.useCallback<ThemeState['setTheme']>(
    (next) => {
      _setTheme((prev) => {
        const value =
          typeof next === 'function'
            ? (next as (t: Theme) => Theme)(prev)
            : next

        localStorage.setItem(storageKey, value)
        return value
      })
    },
    [storageKey]
  )

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
