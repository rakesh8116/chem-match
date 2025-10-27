import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  Home,
  Trophy,
  Settings,
  BookOpen,
  Gamepad2,
  Atom,
} from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { playerStats } = useGameStore();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/play', label: 'Playground', icon: Gamepad2 },
    { path: '/levels', label: 'Levels', icon: FlaskConical },
    { path: '/periodic-table', label: 'Elements', icon: Atom },
    { path: '/achievements', label: 'Achievements', icon: Trophy },
    { path: '/tutorial', label: 'Tutorial', icon: BookOpen },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <FlaskConical className="text-blue-400" size={32} />
              <h1 className="text-2xl font-bold gradient-text">ChemMatch</h1>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Level</span>
                <span className="text-xl font-bold text-blue-400">
                  {playerStats.level}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">XP</span>
                <span className="text-xl font-bold text-purple-400">
                  {playerStats.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all
                      ${
                        isActive
                          ? 'bg-white/10 text-blue-400'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="glass-effect border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-400">
            <p>© 2024 ChemMatch - Learn Chemistry Through Play</p>
            <p className="mt-1">Made with ❤️ for chemistry students everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;