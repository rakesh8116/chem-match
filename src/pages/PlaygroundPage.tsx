import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Trophy, AlertCircle } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { getAtomComparison, formatAtomCounts } from '@/utils/chemistryUtils';
import { soundEffects } from '@/utils/soundEffects';
import { equations } from '@/data/equations';
import SuccessModal from '@/components/playground/SuccessModal';
import confetti from 'canvas-confetti';

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

  const [currentEquationIndex, setCurrentEquationIndex] = useState(0);
  const [coefficients, setCoefficients] = useState<{ [key: string]: number }>({});
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [completedEquations, setCompletedEquations] = useState<Set<string>>(new Set());
  const [atomDetails, setAtomDetails] = useState<{ reactants: string; products: string; unbalanced: string[] } | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const checkSolution = () => {
    // Build reactants and products with user coefficients
    const reactantsWithCoeffs = currentEquation.reactants.map((r, i) => ({
      formula: r.formula,
      coefficient: getCoefficient('reactant', i),
    }));

    const productsWithCoeffs = currentEquation.products.map((p, i) => ({
      formula: p.formula,
      coefficient: getCoefficient('product', i),
    }));

    // Use real chemistry validation
    const comparison = getAtomComparison(reactantsWithCoeffs, productsWithCoeffs);

    // Store atom details for display
    setAtomDetails({
      reactants: formatAtomCounts(comparison.reactantAtoms),
      products: formatAtomCounts(comparison.productAtoms),
      unbalanced: comparison.unbalancedElements,
    });

    if (comparison.balanced) {
      // Success! Play sound and confetti
      soundEffects.playSuccess();
      fireConfetti();

      setFeedback({ type: 'success', message: 'Perfect! The equation is balanced!' });
      setCompletedEquations(new Set([...completedEquations, currentEquation.id]));
      addExperience(50);
      addPoints(10, 'proton');

      // Show success modal after a short delay
      setTimeout(() => {
        setShowSuccessModal(true);
      }, 500);
    } else {
      // Error - play error sound
      soundEffects.playError();

      const unbalancedMsg = comparison.unbalancedElements.length > 0
        ? ` Unbalanced: ${comparison.unbalancedElements.join(', ')}`
        : '';
      setFeedback({
        type: 'error',
        message: `Not quite right!${unbalancedMsg} Check your coefficients and try again!`
      });

      setTimeout(() => {
        setFeedback({ type: null, message: '' });
        setAtomDetails(null);
      }, 5000);
    }
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
    setHintsUsed(0);
    setFeedback({ type: null, message: '' });
    setAtomDetails(null);
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

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setFeedback({ type: null, message: '' });
    setAtomDetails(null);
  };

  const handleNextFromModal = () => {
    setShowSuccessModal(false);
    nextEquation();
    resetEquation();
  };

  const handleReplayFromModal = () => {
    setShowSuccessModal(false);
    resetEquation();
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
            <span className="text-gray-600">Level:</span>
            <span className="ml-2 text-blue-600 font-bold">{playerStats.level}</span>
          </div>
          <div className="card px-4 py-2">
            <span className="text-gray-600">XP:</span>
            <span className="ml-2 text-purple-600 font-bold">{playerStats.experience}</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="card p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700">Progress</span>
          <span className="text-blue-600">{completedEquations.size} / {equations.length} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
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
            <span className="text-sm text-gray-600">Equation {currentEquationIndex + 1} of {equations.length}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs px-2 py-1 rounded ${
                currentEquation.difficulty === 'Beginner' ? 'bg-green-50 text-green-700' :
                currentEquation.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700' :
                'bg-red-50 text-red-700'
              }`}>
                {currentEquation.difficulty}
              </span>
              {completedEquations.has(currentEquation.id) && (
                <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 flex items-center gap-1">
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
                  className="w-16 px-2 py-1 bg-white border-2 border-gray-300 rounded text-center text-gray-800 focus:border-blue-500 focus:outline-none"
                />
                <span className="text-2xl text-gray-800 font-mono">{reactant.formula}</span>
                {reactant.state && <span className="text-sm text-gray-600">({reactant.state})</span>}
              </div>
              {index < currentEquation.reactants.length - 1 && (
                <span className="text-2xl text-gray-600">+</span>
              )}
            </React.Fragment>
          ))}

          <span className="text-3xl text-blue-600 mx-4">→</span>

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
                  className="w-16 px-2 py-1 bg-white border-2 border-gray-300 rounded text-center text-gray-800 focus:border-blue-500 focus:outline-none"
                />
                <span className="text-2xl text-gray-800 font-mono">{product.formula}</span>
                {product.state && <span className="text-sm text-gray-600">({product.state})</span>}
              </div>
              {index < currentEquation.products.length - 1 && (
                <span className="text-2xl text-gray-600">+</span>
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
            onClick={() => {
              if (!showHint) {
                setHintsUsed(hintsUsed + 1);
              }
              setShowHint(!showHint);
            }}
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
          {showHint && currentEquation.hints && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 bg-amber-50 border-2 border-amber-300 rounded-lg"
            >
              <div className="flex items-start gap-2">
                <Lightbulb size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-amber-800 font-semibold mb-2">Hint {Math.min(hintsUsed, currentEquation.hints.length)}/{currentEquation.hints.length}</p>
                  <p className="text-amber-800">{currentEquation.hints[Math.min(hintsUsed - 1, currentEquation.hints.length - 1)]}</p>
                </div>
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
              className={`mt-6 p-4 rounded-lg ${
                feedback.type === 'success'
                  ? 'bg-green-50 border-2 border-green-300'
                  : 'bg-red-50 border-2 border-red-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {feedback.type === 'success' ? (
                  <CheckCircle2 size={24} className="text-green-600" />
                ) : (
                  <XCircle size={24} className="text-red-600" />
                )}
                <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.message}
                </p>
              </div>

              {/* Atom Count Details */}
              {atomDetails && (
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-300">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle size={16} className="text-blue-600" />
                      <span className="text-sm font-semibold text-blue-700">Reactants (Left)</span>
                    </div>
                    <p className="text-sm text-gray-700">{atomDetails.reactants}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle size={16} className="text-purple-600" />
                      <span className="text-sm font-semibold text-purple-700">Products (Right)</span>
                    </div>
                    <p className="text-sm text-gray-700">{atomDetails.products}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4">How to Play</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Adjust the coefficient numbers in front of each molecule to balance the equation</li>
          <li>• Make sure the number of atoms of each element is equal on both sides</li>
          <li>• Click "Check Solution" when you think you've balanced the equation</li>
          <li>• Use "Show Hint" if you get stuck (costs 10 electron credits)</li>
          <li>• Earn XP and Proton Points for each correct solution!</li>
        </ul>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
        onNextEquation={handleNextFromModal}
        onReplay={handleReplayFromModal}
        equation={{
          id: currentEquation.id,
          type: currentEquation.type,
          difficulty: currentEquation.difficulty,
          explanation: currentEquation.explanation,
        }}
        stats={{
          xpGained: 50,
          pointsGained: 10,
          currentStreak: playerStats.currentStreak,
          hintsUsed: hintsUsed,
        }}
      />
    </motion.div>
  );
};

export default PlaygroundPage;