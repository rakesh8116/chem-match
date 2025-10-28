import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Check, Star, Zap, Trophy, Target, BookOpen, Flame, Crown } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useNavigate } from 'react-router-dom';

interface Level {
  id: string;
  number: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  requiredLevel: number;
  equations: number;
  xpReward: number;
  icon: any;
  unlocked: boolean;
  completed: boolean;
  stars: number;
}

const LevelsPage: React.FC = () => {
  const { playerStats, unlockedLevels, completedEquations } = useGameStore();
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const levels: Level[] = [
    {
      id: 'level-1',
      number: 1,
      title: 'Chemistry Basics',
      description: 'Learn the fundamentals of balancing simple equations',
      difficulty: 'beginner',
      requiredLevel: 1,
      equations: 5,
      xpReward: 50,
      icon: BookOpen,
      unlocked: true,
      completed: completedEquations.length >= 5,
      stars: Math.min(3, Math.floor(completedEquations.length / 2)),
    },
    {
      id: 'level-2',
      number: 2,
      title: 'Water & Oxygen',
      description: 'Master equations involving H₂O and O₂',
      difficulty: 'beginner',
      requiredLevel: 1,
      equations: 6,
      xpReward: 75,
      icon: Target,
      unlocked: playerStats.level >= 1,
      completed: completedEquations.length >= 10,
      stars: Math.min(3, Math.floor((completedEquations.length - 5) / 2)),
    },
    {
      id: 'level-3',
      number: 3,
      title: 'Combustion Reactions',
      description: 'Balance combustion equations with hydrocarbons',
      difficulty: 'beginner',
      requiredLevel: 2,
      equations: 7,
      xpReward: 100,
      icon: Flame,
      unlocked: playerStats.level >= 2,
      completed: completedEquations.length >= 15,
      stars: Math.min(3, Math.floor((completedEquations.length - 10) / 3)),
    },
    {
      id: 'level-4',
      number: 4,
      title: 'Synthesis Reactions',
      description: 'Combine elements to form compounds',
      difficulty: 'intermediate',
      requiredLevel: 3,
      equations: 8,
      xpReward: 125,
      icon: Zap,
      unlocked: playerStats.level >= 3,
      completed: completedEquations.length >= 20,
      stars: Math.min(3, Math.floor((completedEquations.length - 15) / 3)),
    },
    {
      id: 'level-5',
      number: 5,
      title: 'Decomposition',
      description: 'Break down complex compounds into elements',
      difficulty: 'intermediate',
      requiredLevel: 4,
      equations: 8,
      xpReward: 150,
      icon: Target,
      unlocked: playerStats.level >= 4,
      completed: completedEquations.length >= 25,
      stars: Math.min(3, Math.floor((completedEquations.length - 20) / 3)),
    },
    {
      id: 'level-6',
      number: 6,
      title: 'Single Displacement',
      description: 'Master single replacement reactions',
      difficulty: 'intermediate',
      requiredLevel: 5,
      equations: 9,
      xpReward: 175,
      icon: Star,
      unlocked: playerStats.level >= 5,
      completed: completedEquations.length >= 30,
      stars: Math.min(3, Math.floor((completedEquations.length - 25) / 4)),
    },
    {
      id: 'level-7',
      number: 7,
      title: 'Double Displacement',
      description: 'Balance double replacement reactions',
      difficulty: 'advanced',
      requiredLevel: 6,
      equations: 10,
      xpReward: 200,
      icon: Trophy,
      unlocked: playerStats.level >= 6,
      completed: completedEquations.length >= 35,
      stars: Math.min(3, Math.floor((completedEquations.length - 30) / 4)),
    },
    {
      id: 'level-8',
      number: 8,
      title: 'Acid-Base Reactions',
      description: 'Neutralization and pH reactions',
      difficulty: 'advanced',
      requiredLevel: 7,
      equations: 10,
      xpReward: 225,
      icon: Flame,
      unlocked: playerStats.level >= 7,
      completed: completedEquations.length >= 40,
      stars: Math.min(3, Math.floor((completedEquations.length - 35) / 4)),
    },
    {
      id: 'level-9',
      number: 9,
      title: 'Redox Reactions',
      description: 'Oxidation-reduction reactions',
      difficulty: 'advanced',
      requiredLevel: 8,
      equations: 12,
      xpReward: 250,
      icon: Zap,
      unlocked: playerStats.level >= 8,
      completed: completedEquations.length >= 45,
      stars: Math.min(3, Math.floor((completedEquations.length - 40) / 5)),
    },
    {
      id: 'level-10',
      number: 10,
      title: 'Complex Balancing',
      description: 'Advanced multi-step equations',
      difficulty: 'expert',
      requiredLevel: 9,
      equations: 12,
      xpReward: 300,
      icon: Crown,
      unlocked: playerStats.level >= 9,
      completed: completedEquations.length >= 50,
      stars: Math.min(3, Math.floor((completedEquations.length - 45) / 5)),
    },
    {
      id: 'level-11',
      number: 11,
      title: 'Organic Chemistry',
      description: 'Balance organic compound reactions',
      difficulty: 'expert',
      requiredLevel: 10,
      equations: 15,
      xpReward: 350,
      icon: Star,
      unlocked: playerStats.level >= 10,
      completed: completedEquations.length >= 60,
      stars: Math.min(3, Math.floor((completedEquations.length - 50) / 6)),
    },
    {
      id: 'level-12',
      number: 12,
      title: 'Master Challenge',
      description: 'The ultimate chemistry test',
      difficulty: 'expert',
      requiredLevel: 12,
      equations: 20,
      xpReward: 500,
      icon: Trophy,
      unlocked: playerStats.level >= 12,
      completed: completedEquations.length >= 80,
      stars: Math.min(3, Math.floor((completedEquations.length - 60) / 10)),
    },
  ];

  const filteredLevels =
    selectedDifficulty === 'all'
      ? levels
      : levels.filter((l) => l.difficulty === selectedDifficulty);

  const completedLevels = levels.filter((l) => l.completed).length;
  const unlockedCount = levels.filter((l) => l.unlocked).length;

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      beginner: 'from-green-500 to-emerald-500',
      intermediate: 'from-blue-500 to-cyan-500',
      advanced: 'from-purple-500 to-pink-500',
      expert: 'from-yellow-500 to-orange-500',
    };
    return colors[difficulty] || 'from-gray-500 to-gray-600';
  };

  const getDifficultyBadgeColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      beginner: 'bg-green-50 text-green-700 border-green-300',
      intermediate: 'bg-blue-50 text-blue-700 border-blue-300',
      advanced: 'bg-purple-50 text-purple-700 border-purple-300',
      expert: 'bg-amber-50 text-amber-700 border-amber-300',
    };
    return colors[difficulty] || 'bg-gray-50 text-gray-700 border-gray-300';
  };

  const handleLevelClick = (level: Level) => {
    if (level.unlocked) {
      navigate('/play');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Choose Your Level</h1>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Completed Levels</div>
              <div className="text-3xl font-bold text-green-600">{completedLevels}</div>
            </div>
            <Trophy size={40} className="text-green-600" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Unlocked Levels</div>
              <div className="text-3xl font-bold text-blue-600">{unlockedCount}</div>
            </div>
            <Lock size={40} className="text-blue-600" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Your Level</div>
              <div className="text-3xl font-bold text-purple-600">{playerStats.level}</div>
            </div>
            <Star size={40} className="text-purple-600" />
          </div>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {['all', 'beginner', 'intermediate', 'advanced', 'expert'].map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setSelectedDifficulty(difficulty)}
            className={`px-4 py-2 rounded-lg border-2 transition-all capitalize ${
              selectedDifficulty === difficulty
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
            }`}
          >
            {difficulty}
          </button>
        ))}
      </div>

      {/* Levels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLevels.map((level, index) => {
          const Icon = level.icon;

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleLevelClick(level)}
              className={`card p-6 relative overflow-hidden transition-all ${
                level.unlocked
                  ? 'cursor-pointer hover:scale-105 hover:shadow-2xl'
                  : 'opacity-60 cursor-not-allowed'
              } ${level.completed ? 'border-2 border-green-300' : ''}`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getDifficultyColor(
                  level.difficulty
                )} opacity-10 rounded-full blur-3xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${getDifficultyColor(
                        level.difficulty
                      )}`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Level {level.number}</div>
                      <div className="text-2xl font-bold">{level.title}</div>
                    </div>
                  </div>
                  {level.completed && (
                    <div className="bg-green-100 p-2 rounded-full">
                      <Check size={20} className="text-green-600" />
                    </div>
                  )}
                  {!level.unlocked && (
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Lock size={20} className="text-gray-600" />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{level.description}</p>

                {/* Difficulty Badge */}
                <div className="mb-4">
                  <span className={`text-xs px-2 py-1 rounded border ${getDifficultyBadgeColor(level.difficulty)}`}>
                    {level.difficulty}
                  </span>
                </div>

                {/* Stars */}
                {level.unlocked && (
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        size={20}
                        className={
                          star <= level.stars
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Equations</div>
                    <div className="text-lg font-bold text-blue-600">{level.equations}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">XP Reward</div>
                    <div className="text-lg font-bold text-purple-600">{level.xpReward}</div>
                  </div>
                </div>

                {/* Unlock Requirement */}
                {!level.unlocked && (
                  <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
                    <Lock size={16} />
                    <span>Requires Level {level.requiredLevel}</span>
                  </div>
                )}

                {/* Play Button */}
                {level.unlocked && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary py-2 mt-2"
                  >
                    {level.completed ? 'Play Again' : 'Start Level'}
                  </motion.button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default LevelsPage;