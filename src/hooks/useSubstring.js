import { useMemo } from 'react'

export const useSubstring = (text, length) => {
  const newText = useMemo(() => {
    return text.length > length ? text.substring(0, length) + '...' : text
  }, [text])

  return newText
}
