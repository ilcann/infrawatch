import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation('landing');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}