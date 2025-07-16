import { useTranslation } from 'react-i18next';
import SidebarButton from './SidebarButton';
import LanguageToggle from './LanguageToggle';

export default function Sidebar() {
  const { t } = useTranslation('common');

  return (
    <aside className="w-64 bg-gray-500 shadow-md p-4">
      <div className="flex flex-col space-y-2">
        <SidebarButton to="/">{t('navigation.home')}</SidebarButton>
        <SidebarButton to="/auth">{t('navigation.auth')}</SidebarButton>
        <SidebarButton to="/dashboard">{t('navigation.dashboard')}</SidebarButton>
        <SidebarButton to="/asset-management">{t('navigation.assetManagement')}</SidebarButton>
        <SidebarButton to="/admin-panel">{t('navigation.adminPanel')}</SidebarButton>
        <div className="pt-2 mt-2 border-t border-gray-400">
          <LanguageToggle />
        </div>
      </div>
    </aside>
  );
}