import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Sidebar() {
  const { t, i18n } = useTranslation('common');
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <aside className="w-64 bg-gray-500 shadow-md p-4">
      <div className="flex flex-col space-y-4">
        <NavLink to="/" className="text-white hover:text-gray-300">{t('navigation.home')}</NavLink>
        <NavLink to="/auth" className="text-white hover:text-gray-300">{t('navigation.auth')}</NavLink>
        <NavLink to="/dashboard" className="text-white hover:text-gray-300">{t('navigation.dashboard')}</NavLink>
        <NavLink to="/asset-management" className="text-white hover:text-gray-300">{t('navigation.assetManagement')}</NavLink>
        <NavLink to="/admin-panel" className="text-white hover:text-gray-300">{t('navigation.adminPanel')}</NavLink>
        <button onClick={toggleLanguage} className="text-white hover:text-gray-300 cursor-pointer">
          {language === 'en' ? 'Türkçe' : 'English'}
        </button>
      </div>
    </aside>
  );
}