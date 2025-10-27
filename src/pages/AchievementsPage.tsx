import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target, Award, Lock, Check, TrendingUp, Flame, Crown } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  requirement: number;
  progress: number;
  unlocked: boolean;
  reward: { xp: number; points: number };
}

const AchievementsPage: React.FC = () => {
  const { playerStats } = useGameStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const achievements: Achievement[] = [
    {
      id: 'first-step',
      title: 'First Steps',
      description: 'Balance your first chemical equation',
      icon: Star,
      category: 'beginner',
      requirement: 1,
      progress: playerStats.equationsBalanced,
      unlocked: playerStats.equationsBalanced >= 1,
      reward: { xp: 10, points: 5 },
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Balance 5 chemical equations',
      icon: Target,
      category: 'beginner',
      requirement: 5,
      progress: playerStats.equationsBalanced,
      unlocked: playerStats.equationsBalanced >= 5,
      reward: { xp: 25, points: 10 },
    },
    {
      id: 'chemistry-novice',
      title: 'Chemistry Novice',
      description: 'Balance 10 chemical equations',
      icon: Award,
      category: 'beginner',
      requirement: 10,
      progress: playerStats.equationsBalanced,
      unlocked: playerStats.equationsBalanced >= 10,
      reward: { xp: 50, points: 20 },
    },
    {
      id: 'perfect-balance',
      title: 'Perfect Balance',
      description: 'Achieve a perfect balance on your first try',
      icon: Zap,
      category: 'intermediate',
      requirement: 1,
      progress: playerStats.perfectBalances,
      unlocked: playerStats.perfectBalances >= 1,
      reward: { xp: 30, points: 15 },
    },
    {
      id: 'perfectionist',
      title: 'Perfectionist',
      description: 'Achieve 10 perfect balances',
      icon: Crown,
      category: 'intermediate',
      requirement: 10,
      progress: playerStats.perfectBalances,
      unlocked: playerStats.perfectBalances >= 10,
      reward: { xp: 100, points: 50 },
    },
    {
      id: 'hot-streak',
      title: 'Hot Streak',
      description: 'Build a streak of 5 correct answers',
      icon: Flame,
      category: 'intermediate',
      requirement: 5,
      progress: playerStats.currentStreak,
      unlocked: playerStats.bestStreak >= 5,
      reward: { xp: 40, points: 25 },
    },
    {
      id: 'unstoppable',
      title: 'Unstoppable',
      description: 'Build a streak of 10 correct answers',
      icon: TrendingUp,
      category: 'advanced',
      requirement: 10,
      progress: playerStats.currentStreak,
      unlocked: playerStats.bestStreak >= 10,
      reward: { xp: 100, points: 75 },
    },
    {
      id: 'chemistry-master',
      title: 'Chemistry Master',
      description: 'Balance 50 chemical equations',
      icon: Trophy,
      category: 'advanced',
      requirement: 50,
      progress: playerStats.equationsBalanced,
      unlocked: playerStats.equationsBalanced >= 50,
      reward: { xp: 200, points: 100 },
    },
    {
      id: 'experienced-chemist',
      title: 'Experienced Chemist',
      description: 'Reach Level 10',
      icon: Star,
      category: 'advanced',
      requirement: 10,
      progress: playerStats.level,
      unlocked: playerStats.level >= 10,
      reward: { xp: 150, points: 80 },
    },
    {
      id: 'grand-master',
      title: 'Grand Master',
      description: 'Balance 100 chemical equations',
      icon: Crown,
      category: 'expert',
      requirement: 100,
      progress: playerStats.equationsBalanced,
      unlocked: playerStats.equationsBalanced >= 100,
      reward: { xp: 500, points: 250 },
    },
    {
      id: 'legendary',
      title: 'Legendary Chemist',
      description: 'Reach Level 25',
      icon: Trophy,
      category: 'expert',
      requirement: 25,
      progress: playerStats.level,
      unlocked: playerStats.level >= 25,
      reward: { xp: 1000, points: 500 },
    },
    {
      id: 'perfect-legend',
      title: 'Perfect Legend',
      description: 'Achieve 50 perfect balances',
      icon: Zap,
      category: 'expert',
      requirement: 50,
      progress: playerStats.perfectBalances,
      unlocked: playerStats.perfectBalances >= 50,
      reward: { xp: 750, points: 400 },
    },
  ];

  const filteredAchievements =
    selectedCategory === 'all'
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      beginner: 'from-green-500 to-emerald-500',
      intermediate: 'from-blue-500 to-cyan-500',
      advanced: 'from-purple-500 to-pink-500',
      expert: 'from-yellow-500 to-orange-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryBadgeColor = (category: string) => {
    const colors: Record<string, string> = {
      beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
      intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      expert: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Your Achievements</h1>

      {/* Overall Progress */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Overall Progress</h2>
            <p className="text-gray-400">
              {unlockedCount} of {totalCount} achievements unlocked
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold gradient-text">{completionPercentage}%</div>
            <p className="text-sm text-gray-400">Complete</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-6 text-center">
          <Trophy size={32} className="mx-auto mb-2 text-yellow-400" />
          <div className="text-2xl font-bold text-blue-400">{playerStats.equationsBalanced}</div>
          <div className="text-sm text-gray-400">Equations Balanced</div>
        </div>
        <div className="card p-6 text-center">
          <Star size={32} className="mx-auto mb-2 text-purple-400" />
          <div className="text-2xl font-bold text-purple-400">{playerStats.perfectBalances}</div>
          <div className="text-sm text-gray-400">Perfect Balances</div>
        </div>
        <div className="card p-6 text-center">
          <Flame size={32} className="mx-auto mb-2 text-orange-400" />
          <div className="text-2xl font-bold text-orange-400">{playerStats.bestStreak}</div>
          <div className="text-sm text-gray-400">Best Streak</div>
        </div>
        <div className="card p-6 text-center">
          <Zap size={32} className="mx-auto mb-2 text-green-400" />
          <div className="text-2xl font-bold text-green-400">{playerStats.level}</div>
          <div className="text-sm text-gray-400">Current Level</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {['all', 'beginner', 'intermediate', 'advanced', 'expert'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg border-2 transition-all capitalize ${
              selectedCategory === category
                ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const progressPercentage = Math.min(
            100,
            Math.round((achievement.progress / achievement.requirement) * 100)
          );

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`card p-6 relative overflow-hidden ${
                achievement.unlocked ? 'border-2 border-green-500/30' : ''
              }`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryColor(
                  achievement.category
                )} opacity-10 rounded-full blur-3xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(
                      achievement.category
                    )} ${achievement.unlocked ? '' : 'opacity-30'}`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  {achievement.unlocked && (
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <Check size={20} className="text-green-400" />
                    </div>
                  )}
                  {!achievement.unlocked && (
                    <div className="bg-gray-600/20 p-2 rounded-full">
                      <Lock size={20} className="text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                  <span className={`text-xs px-2 py-1 rounded border ${getCategoryBadgeColor(achievement.category)}`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className={achievement.unlocked ? 'text-green-400' : 'text-blue-400'}>
                      {achievement.progress} / {achievement.requirement}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Rewards */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Zap size={14} className="text-yellow-400" />
                    <span className="text-gray-300">{achievement.reward.xp} XP</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy size={14} className="text-blue-400" />
                    <span className="text-gray-300">{achievement.reward.points} Points</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AchievementsPage;