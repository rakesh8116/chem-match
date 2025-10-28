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
  Info,
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
    { path: '/support', label: 'About', icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b-2 border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                <FlaskConical className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">ChemMatch</h1>
                <p className="text-xs text-gray-500 font-medium">Chemistry Learning Platform</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-600">Level</span>
                <span className="text-xl font-bold text-blue-600">
                  {playerStats.level}
                </span>
              </div>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-600">XP</span>
                <span className="text-xl font-bold text-purple-600">
                  {playerStats.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b-2 border-gray-200 shadow-sm sticky top-[73px] z-40">
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
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-t-xl transition-all
                      ${
                        isActive
                          ? 'bg-gradient-to-br from-emerald-50 to-teal-50 text-teal-700 font-semibold border-b-3 border-teal-500'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t-2 border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            <p className="font-semibold">© 2025 ChemMatch - Learn Chemistry Through Play</p>
            <p className="mt-2 text-gray-500">Made with ❤️ by Ruhan Singh • IB MYP3 Project</p>
            <p className="mt-1 text-xs text-gray-500">One World International School, Whitefield, Bangalore</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;