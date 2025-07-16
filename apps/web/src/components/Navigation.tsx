import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Navigation() {
  const { t, i18n } = useTranslation('common');
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex space-x-4">
        <NavLink to="/" className="text-blue-500 hover:text-blue-700">{t('navigation.home')}</NavLink>
        <NavLink to="/auth" className="text-blue-500 hover:text-blue-700">{t('navigation.auth')}</NavLink>
        <NavLink to="/dashboard" className="text-blue-500 hover:text-blue-700">{t('navigation.dashboard')}</NavLink>
        <NavLink to="/asset-management" className="text-blue-500 hover:text-blue-700">{t('navigation.assetManagement')}</NavLink>
        <NavLink to="/admin-panel" className="text-blue-500 hover:text-blue-700">{t('navigation.adminPanel')}</NavLink>
        <button onClick={toggleLanguage} className="text-blue-500 hover:text-blue-700">
          {language === 'en' ? 'Türkçe' : 'English'}
        </button>
      </div>
    </nav>
  );
}