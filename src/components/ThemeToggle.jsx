import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <button onClick={toggle} className="px-2 py-1 border rounded">
      {theme === 'dark' ? 'Light' : 'Dark'} Theme
    </button>
  )
}
