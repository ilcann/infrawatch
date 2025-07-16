import { Routes, Route } from 'react-router';
import Sidebar from './components/ui/Sidebar';
import LandingPage from './pages/landing';
import AuthPage from './pages/auth';
import DashboardPage from './pages/dashboard';
import AssetsPage from './pages/assets';
import TeamPage from './pages/team';
import InsightsPage from './pages/insights';

function App() {
  return (
      <div className="min-h-screen flex flex-row bg-neutral-900">
        <Sidebar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </div>
  );
}

export default App;
