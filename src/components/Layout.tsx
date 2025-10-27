import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/play', label: 'Playground' },
    { path: '/levels', label: 'Levels' },
    { path: '/periodic-table', label: 'Elements' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/tutorial', label: 'Tutorial' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              <h1 className="text-2xl font-bold gradient-text">ChemMatch</h1>
            </Link>
          </div>
        </div>
      </header>

      <nav className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? 'text-blue-400 bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

      <footer className="glass-effect border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-400">
            <p>© 2024 ChemMatch - Learn Chemistry Through Play</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;