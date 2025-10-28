import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Zap, TrendingUp, ArrowRight, RotateCcw, X, Flame } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextEquation: () => void;
  onReplay: () => void;
  equation: {
    id: string;
    type: string;
    difficulty: string;
    explanation?: string;
  };
  stats: {
    xpGained: number;
    pointsGained: number;
    currentStreak: number;
    hintsUsed: number;
    timeSpent?: number;
  };
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  onNextEquation,
  onReplay,
  equation,
  stats,
}) => {
  const [animatedXP, setAnimatedXP] = useState(0);
  const [animatedPoints, setAnimatedPoints] = useState(0);

  // Calculate star rating (1-3 stars based on hints used)
  const getStarRating = () => {
    if (stats.hintsUsed === 0) return 3;
    if (stats.hintsUsed <= 2) return 2;
    return 1;
  };

  const stars = getStarRating();

  // Animate numbers counting up
  useEffect(() => {
    if (isOpen) {
      const duration = 1000;
      const steps = 30;
      const xpStep = stats.xpGained / steps;
      const pointsStep = stats.pointsGained / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setAnimatedXP(Math.floor(xpStep * currentStep));
        setAnimatedPoints(Math.floor(pointsStep * currentStep));

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedXP(stats.xpGained);
          setAnimatedPoints(stats.pointsGained);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isOpen, stats.xpGained, stats.pointsGained]);

  // Get reaction emoji based on type
  const getReactionEmoji = () => {
    switch (equation.type) {
      case 'combustion':
        return '🔥';
      case 'synthesis':
        return '⚗️';
      case 'decomposition':
        return '💥';
      case 'acid-base':
        return '🧪';
      case 'redox':
        return '⚡';
      case 'single-replacement':
        return '🔄';
      case 'double-replacement':
        return '🔁';
      default:
        return '✨';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-emerald-400 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>

            <div className="relative p-8">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', damping: 10 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-6">
                    <Trophy size={48} className="text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              >
                Equation Balanced!
              </motion.h2>

              {/* Reaction Type Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center items-center gap-2 mb-6"
              >
                <span className="text-3xl">{getReactionEmoji()}</span>
                <span className="text-gray-700 capitalize font-semibold">
                  {equation.type.replace('-', ' ')} Reaction
                </span>
                <span className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-700 border-2 border-blue-300 font-semibold">
                  {equation.difficulty}
                </span>
              </motion.div>

              {/* Star Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-2 mb-6"
              >
                {[1, 2, 3].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + star * 0.1, type: 'spring' }}
                  >
                    <Star
                      size={40}
                      className={
                        star <= stars
                          ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                          : 'text-gray-600'
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* XP Gained */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/30 rounded-lg">
                      <TrendingUp size={24} className="text-purple-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">XP Gained</div>
                      <div className="text-3xl font-bold text-purple-600">
                        +{animatedXP}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Points Gained */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/30 rounded-lg">
                      <Zap size={24} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">Proton Points</div>
                      <div className="text-3xl font-bold text-blue-600">
                        +{animatedPoints}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Streak */}
                {stats.currentStreak > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="col-span-2 bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-xl p-4 border border-orange-500/30"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Flame size={32} className="text-orange-400" />
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Current Streak</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                          {stats.currentStreak} 🔥
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Explanation */}
              {equation.explanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-700"
                >
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">
                    💡 Did You Know?
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {equation.explanation}
                  </p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-3"
              >
                <button
                  onClick={onReplay}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all font-semibold"
                >
                  <RotateCcw size={20} />
                  Replay
                </button>
                <button
                  onClick={onNextEquation}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl transition-all font-semibold shadow-lg shadow-green-500/30"
                >
                  Next Equation
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;