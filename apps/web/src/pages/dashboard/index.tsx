import { useTranslation } from 'react-i18next';

export default function DashboardPage() {
  const { t } = useTranslation('dashboard');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
}