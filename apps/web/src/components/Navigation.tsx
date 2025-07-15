import { NavLink } from 'react-router';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex space-x-4">
        <NavLink to="/" className="text-blue-500 hover:text-blue-700">Home</NavLink>
        <NavLink to="/auth" className="text-blue-500 hover:text-blue-700">Auth</NavLink>
        <NavLink to="/dashboard" className="text-blue-500 hover:text-blue-700">Dashboard</NavLink>
        <NavLink to="/asset-management" className="text-blue-500 hover:text-blue-700">Asset Management</NavLink>
        <NavLink to="/admin-panel" className="text-blue-500 hover:text-blue-700">Admin Panel</NavLink>
      </div>
    </nav>
  );
}