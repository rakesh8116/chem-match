import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, BookOpen, Trophy, FlaskConical, Sparkles, Users, TrendingUp, Zap } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

const HomePage: React.FC = () => {
  const { playerStats, completedEquations } = useGameStore();

  const features = [
    {
      icon: FlaskConical,
      title: 'Interactive Learning',
      description: 'Drag, drop, and visualize chemical equations in real-time',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      title: 'Gamified Progress',
      description: 'Earn points, unlock achievements, and climb the leaderboard',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Beautiful Animations',
      description: 'Enjoy stunning visual feedback and engaging animations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Multiplayer Challenges',
      description: 'Compete with friends in real-time equation battles',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { label: 'Equations Balanced', value: playerStats.equationsBalanced },
    { label: 'Perfect Balances', value: playerStats.perfectBalances },
    { label: 'Current Streak', value: playerStats.currentStreak },
    { label: 'Total XP', value: playerStats.experience },
  ];

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-6xl font-bold mb-4">
          <span className="gradient-text">Master Chemistry</span>
          <br />
          <span className="text-white">Through Play</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Learn to balance chemical equations with our interactive, gamified learning platform.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/play">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
            >
              <Play size={24} />
              Start Playing
            </motion.button>
          </Link>
          <Link to="/tutorial">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
            >
              <BookOpen size={24} />
              Tutorial
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="card p-6 text-center"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
              className="card p-6 hover:shadow-2xl transition-shadow"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;