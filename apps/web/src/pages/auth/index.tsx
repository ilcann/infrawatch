import { useTranslation } from 'react-i18next';

export default function AuthPage() {
  const { t } = useTranslation('auth');

  return (
    <main className="p-8">
      <header>
        <h1 className="text-2xl font-bold">{t('title')}</h1>
      </header>
      <section>
        <p>{t('login')}</p>
      </section>
    </main>
  );
}