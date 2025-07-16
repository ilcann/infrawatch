import { useTranslation } from 'react-i18next';

export default function DashboardPage() {
  const { t } = useTranslation('dashboard');

  return (
    <main className="p-8">
      <header>
        <h1 className="text-2xl font-bold">{t('title')}</h1>
      </header>
      <section>
        <p>{t('welcome')}</p>
      </section>
    </main>
  );
}