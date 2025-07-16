import { useTranslation } from 'react-i18next';

export default function AuthPage() {
  const { t } = useTranslation('auth');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>{t('login')}</p>
    </div>
  );
}