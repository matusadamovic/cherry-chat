import AuthButtons from '../components/AuthButtons'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <AuthButtons />
    </div>
  )
}
