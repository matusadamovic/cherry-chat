import { useEffect, useState } from 'react'
import { auth, googleProvider } from '../firebase'
import { signInWithPopup, signInAnonymously, signOut, onAuthStateChanged } from 'firebase/auth'
import { useTranslation } from 'react-i18next'

export default function AuthButtons() {
  const [user, setUser] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    return onAuthStateChanged(auth, setUser)
  }, [])

  const loginGoogle = () => signInWithPopup(auth, googleProvider)
  const loginAnon = () => signInAnonymously(auth)
  const logout = () => signOut(auth)

  if (user) {
    return (
      <button className="px-4 py-2 bg-red-500 text-white" onClick={logout}>
        {t('logout')}
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <button className="px-4 py-2 bg-blue-500 text-white" onClick={loginGoogle}>
        {t('login')} Google
      </button>
      <button className="px-4 py-2 bg-gray-500 text-white" onClick={loginAnon}>
        {t('login')} Anon
      </button>
    </div>
  )
}
