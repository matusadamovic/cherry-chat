import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-center bg-white dark:bg-gray-900 dark:text-white">
      <header className="p-4 flex justify-between">
        <Link to="/" className="font-bold">Cherry Chat</Link>
        <ThemeToggle />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
    </div>
  )
}
