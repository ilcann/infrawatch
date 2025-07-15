import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import LandingPage from './pages/landing';
import AuthPage from './pages/auth';
import DashboardPage from './pages/dashboard';
import AssetManagementPage from './pages/asset-management';
import AdminPanelPage from './pages/admin-panel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/asset-management" element={<AssetManagementPage />} />
          <Route path="/admin-panel" element={<AdminPanelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
