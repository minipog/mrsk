import * as React from 'react'

export function useDebouncedValue<T>(value: T, ms: number) {
  const [debounced, setDebounced] = React.useState(value)

  React.useEffect(() => {
    if (!ms) {
      setDebounced(value)
      return
    }

    const t = setTimeout(() => setDebounced(value), ms)
    return () => clearTimeout(t)
  }, [value, ms])

  return debounced
}
