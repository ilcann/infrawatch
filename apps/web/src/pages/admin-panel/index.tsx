import { useTranslation } from 'react-i18next';

export default function AdminPanelPage() {
  const { t } = useTranslation('admin-panel');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
    );
}