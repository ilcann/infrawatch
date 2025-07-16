import { useTranslation } from 'react-i18next';

export default function InsightsPage() {
  const { t } = useTranslation('insights');

  return (
    <main className="p-8">
      <header>
        <h1 className="text-2xl font-bold">{t('title')}</h1>
      </header>
      <section>
        <p>{t('description')}</p>
      </section>
    </main>
  );
}
