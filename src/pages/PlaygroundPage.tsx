import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Trophy } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

interface EquationPart {
  formula: string;
  coefficient: number;
  state?: string;
}

interface Equation {
  id: string;
  reactants: EquationPart[];
  products: EquationPart[];
  difficulty: string;
  hint: string;
  solution: { reactants: number[]; products: number[] };
}

const PlaygroundPage: React.FC = () => {
  const { addExperience, addPoints, playerStats } = useGameStore();

  const equations: Equation[] = [
    {
      id: 'eq1',
      reactants: [{ formula: 'H₂', coefficient: 1 }, { formula: 'O₂', coefficient: 1 }],
      products: [{ formula: 'H₂O', coefficient: 1 }],
      difficulty: 'Beginner',
      hint: 'Count the hydrogen and oxygen atoms on each side. You need 2 H₂O to balance the oxygen.',
      solution: { reactants: [2, 1], products: [2] },
    },
    {
      id: 'eq2',
      reactants: [{ formula: 'N₂', coefficient: 1 }, { formula: 'H₂', coefficient: 1 }],
      products: [{ formula: 'NH₃', coefficient: 1 }],
      difficulty: 'Beginner',
      hint: 'Each N₂ molecule has 2 nitrogen atoms. You need to balance both nitrogen and hydrogen.',
      solution: { reactants: [1, 3], products: [2] },
    },
    {
      id: 'eq3',
      reactants: [{ formula: 'CH₄', coefficient: 1 }, { formula: 'O₂', coefficient: 1 }],
      products: [{ formula: 'CO₂', coefficient: 1 }, { formula: 'H₂O', coefficient: 1 }],
      difficulty: 'Intermediate',
      hint: 'Start by balancing carbon, then hydrogen, and finally oxygen.',
      solution: { reactants: [1, 2], products: [1, 2] },
    },
    {
      id: 'eq4',
      reactants: [{ formula: 'Fe', coefficient: 1 }, { formula: 'O₂', coefficient: 1 }],
      products: [{ formula: 'Fe₂O₃', coefficient: 1 }],
      difficulty: 'Intermediate',
      hint: 'You need 4 Fe atoms and 3 O₂ molecules to form 2 Fe₂O₃.',
      solution: { reactants: [4, 3], products: [2] },
    },
    {
      id: 'eq5',
      reactants: [{ formula: 'C₃H₈', coefficient: 1 }, { formula: 'O₂', coefficient: 1 }],
      products: [{ formula: 'CO₂', coefficient: 1 }, { formula: 'H₂O', coefficient: 1 }],
      difficulty: 'Advanced',
      hint: 'This is propane combustion. Balance carbon first (3), then hydrogen (4), and finally oxygen (5).',
      solution: { reactants: [1, 5], products: [3, 4] },
    },
  ];

  const [currentEquationIndex, setCurrentEquationIndex] = useState(0);
  const [coefficients, setCoefficients] = useState<{ [key: string]: number }>({});
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [completedEquations, setCompletedEquations] = useState<Set<string>>(new Set());

  const currentEquation = equations[currentEquationIndex];

  const getCoefficientKey = (type: 'reactant' | 'product', index: number) => {
    return `${currentEquation.id}-${type}-${index}`;
  };

  const getCoefficient = (type: 'reactant' | 'product', index: number) => {
    const key = getCoefficientKey(type, index);
    return coefficients[key] || 1;
  };

  const setCoefficient = (type: 'reactant' | 'product', index: number, value: number) => {
    const key = getCoefficientKey(type, index);
    setCoefficients({ ...coefficients, [key]: Math.max(1, Math.min(20, value)) });
  };

  const checkSolution = () => {
    const userReactants = currentEquation.reactants.map((_, i) => getCoefficient('reactant', i));
    const userProducts = currentEquation.products.map((_, i) => getCoefficient('product', i));

    const isCorrect =
      JSON.stringify(userReactants) === JSON.stringify(currentEquation.solution.reactants) &&
      JSON.stringify(userProducts) === JSON.stringify(currentEquation.solution.products);

    if (isCorrect) {
      setFeedback({ type: 'success', message: 'Perfect! The equation is balanced!' });
      setCompletedEquations(new Set([...completedEquations, currentEquation.id]));
      addExperience(50);
      addPoints(10, 'proton');
    } else {
      setFeedback({ type: 'error', message: 'Not quite right. Check your coefficients and try again!' });
    }

    setTimeout(() => setFeedback({ type: null, message: '' }), 3000);
  };

  const resetEquation = () => {
    const newCoeffs = { ...coefficients };
    currentEquation.reactants.forEach((_, i) => {
      delete newCoeffs[getCoefficientKey('reactant', i)];
    });
    currentEquation.products.forEach((_, i) => {
      delete newCoeffs[getCoefficientKey('product', i)];
    });
    setCoefficients(newCoeffs);
    setShowHint(false);
    setFeedback({ type: null, message: '' });
  };

  const nextEquation = () => {
    setCurrentEquationIndex((currentEquationIndex + 1) % equations.length);
    setShowHint(false);
    setFeedback({ type: null, message: '' });
  };

  const prevEquation = () => {
    setCurrentEquationIndex((currentEquationIndex - 1 + equations.length) % equations.length);
    setShowHint(false);
    setFeedback({ type: null, message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold gradient-text">Equation Balancing Playground</h1>
        <div className="flex gap-4 text-sm">
          <div className="card px-4 py-2">
            <span className="text-gray-400">Level:</span>
            <span className="ml-2 text-blue-400 font-bold">{playerStats.level}</span>
          </div>
          <div className="card px-4 py-2">
            <span className="text-gray-400">XP:</span>
            <span className="ml-2 text-purple-400 font-bold">{playerStats.experience}</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="card p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">Progress</span>
          <span className="text-blue-400">{completedEquations.size} / {equations.length} completed</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
            style={{ width: `${(completedEquations.size / equations.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Equation Card */}
      <div className="card p-8 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-sm text-gray-400">Equation {currentEquationIndex + 1} of {equations.length}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs px-2 py-1 rounded ${
                currentEquation.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                currentEquation.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {currentEquation.difficulty}
              </span>
              {completedEquations.has(currentEquation.id) && (
                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 flex items-center gap-1">
                  <Trophy size={12} /> Completed
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={prevEquation} className="btn-secondary px-4 py-2">←</button>
            <button onClick={nextEquation} className="btn-secondary px-4 py-2">→</button>
          </div>
        </div>

        {/* Equation Display */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          {/* Reactants */}
          {currentEquation.reactants.map((reactant, index) => (
            <React.Fragment key={`reactant-${index}`}>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={getCoefficient('reactant', index)}
                  onChange={(e) => setCoefficient('reactant', index, parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-center text-white focus:border-blue-500 focus:outline-none"
                />
                <span className="text-2xl text-white font-mono">{reactant.formula}</span>
                {reactant.state && <span className="text-sm text-gray-400">({reactant.state})</span>}
              </div>
              {index < currentEquation.reactants.length - 1 && (
                <span className="text-2xl text-gray-400">+</span>
              )}
            </React.Fragment>
          ))}

          <span className="text-3xl text-blue-400 mx-4">→</span>

          {/* Products */}
          {currentEquation.products.map((product, index) => (
            <React.Fragment key={`product-${index}`}>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={getCoefficient('product', index)}
                  onChange={(e) => setCoefficient('product', index, parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-center text-white focus:border-blue-500 focus:outline-none"
                />
                <span className="text-2xl text-white font-mono">{product.formula}</span>
                {product.state && <span className="text-sm text-gray-400">({product.state})</span>}
              </div>
              {index < currentEquation.products.length - 1 && (
                <span className="text-2xl text-gray-400">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkSolution}
            className="btn-primary px-6 py-3 flex items-center gap-2"
          >
            <CheckCircle2 size={20} />
            Check Solution
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHint(!showHint)}
            className="btn-secondary px-6 py-3 flex items-center gap-2"
          >
            <Lightbulb size={20} />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetEquation}
            className="btn-secondary px-6 py-3 flex items-center gap-2"
          >
            <RotateCcw size={20} />
            Reset
          </motion.button>
        </div>

        {/* Hint */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
            >
              <div className="flex items-start gap-2">
                <Lightbulb size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-yellow-100">{currentEquation.hint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {feedback.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-6 p-4 rounded-lg flex items-center gap-2 ${
                feedback.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 size={24} className="text-green-400" />
              ) : (
                <XCircle size={24} className="text-red-400" />
              )}
              <p className={feedback.type === 'success' ? 'text-green-100' : 'text-red-100'}>
                {feedback.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4">How to Play</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Adjust the coefficient numbers in front of each molecule to balance the equation</li>
          <li>• Make sure the number of atoms of each element is equal on both sides</li>
          <li>• Click "Check Solution" when you think you've balanced the equation</li>
          <li>• Use "Show Hint" if you get stuck (costs 10 electron credits)</li>
          <li>• Earn XP and Proton Points for each correct solution!</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default PlaygroundPage;