import { Routes, Route } from 'react-router';
import Sidebar from './components/ui/Sidebar';
import LandingPage from './pages/landing';
import AuthPage from './pages/auth';
import DashboardPage from './pages/dashboard';
import AssetManagementPage from './pages/asset-management';
import AdminPanelPage from './pages/admin-panel';

function App() {
  return (
      <div className="min-h-screen flex flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/asset-management" element={<AssetManagementPage />} />
          <Route path="/admin-panel" element={<AdminPanelPage />} />
        </Routes>
      </div>
  );
}

export default App;
