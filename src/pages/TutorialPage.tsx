import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Trophy, Zap, Lightbulb, FlaskConical, Star, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TutorialPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'basics',
      title: 'Understanding Chemical Equations',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            A chemical equation shows the reactants (starting materials) on the left and products (end results) on the right, separated by an arrow (→).
          </p>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-center text-2xl font-mono text-white mb-2">
              H₂ + O₂ → H₂O
            </p>
            <p className="text-sm text-gray-400 text-center">
              Hydrogen + Oxygen → Water
            </p>
          </div>
          <p className="text-gray-300">
            This equation is <span className="text-red-400 font-semibold">NOT balanced</span> because we have:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Left side: 2 H atoms, 2 O atoms</li>
            <li>Right side: 2 H atoms, 1 O atom</li>
          </ul>
          <p className="text-yellow-400">
            The number of atoms must be equal on both sides!
          </p>
        </div>
      ),
    },
    {
      id: 'coefficients',
      title: 'Using Coefficients',
      icon: Target,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            To balance an equation, we add <span className="text-blue-400 font-semibold">coefficients</span> (numbers) in front of molecules. These numbers multiply the entire molecule.
          </p>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-center text-2xl font-mono text-white mb-2">
              2 H₂ + O₂ → 2 H₂O
            </p>
            <p className="text-sm text-gray-400 text-center">
              This is now BALANCED!
            </p>
          </div>
          <p className="text-gray-300">
            Let's verify:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Left Side (Reactants)</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>2 H₂ = 4 H atoms</li>
                <li>1 O₂ = 2 O atoms</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Right Side (Products)</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>2 H₂O = 4 H atoms</li>
                <li>2 H₂O = 2 O atoms</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-400 bg-green-500/10 rounded-lg p-3">
            <CheckCircle2 size={20} />
            <span>Equal atoms on both sides = Balanced equation!</span>
          </div>
        </div>
      ),
    },
    {
      id: 'strategy',
      title: 'Balancing Strategy',
      icon: Lightbulb,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Follow these steps to balance any equation:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                Count the atoms
              </h4>
              <p className="text-gray-300 text-sm">
                List all atoms on both sides of the equation and count how many of each you have.
              </p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                Start with complex molecules
              </h4>
              <p className="text-gray-300 text-sm">
                Balance molecules with the most atoms first, or those that appear only once on each side.
              </p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                Balance one element at a time
              </h4>
              <p className="text-gray-300 text-sm">
                Work on one element at a time. Adjust coefficients to match the number of atoms.
              </p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                Verify and adjust
              </h4>
              <p className="text-gray-300 text-sm">
                Double-check all atoms. If needed, adjust coefficients and recount.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'example',
      title: 'Practice Example',
      icon: FlaskConical,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Let's balance this combustion reaction step by step:
          </p>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-center text-2xl font-mono text-white mb-2">
              CH₄ + O₂ → CO₂ + H₂O
            </p>
            <p className="text-sm text-gray-400 text-center">
              Methane + Oxygen → Carbon Dioxide + Water
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Step 1: Count atoms</h4>
              <p className="text-sm text-gray-300">
                Left: 1 C, 4 H, 2 O | Right: 1 C, 2 H, 3 O
              </p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Step 2: Balance hydrogen</h4>
              <p className="text-sm text-gray-300 mb-2">
                We have 4 H on left but only 2 H on right. Add coefficient 2 to H₂O:
              </p>
              <p className="text-center text-xl font-mono text-white">
                CH₄ + O₂ → CO₂ + <span className="text-yellow-400">2</span> H₂O
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Step 3: Balance oxygen</h4>
              <p className="text-sm text-gray-300 mb-2">
                Now we have 4 O on right (2 from CO₂ + 2 from 2 H₂O). We need 2 O₂:
              </p>
              <p className="text-center text-xl font-mono text-white">
                CH₄ + <span className="text-yellow-400">2</span> O₂ → CO₂ + 2 H₂O
              </p>
            </div>

            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                <CheckCircle2 size={20} />
                Balanced!
              </h4>
              <p className="text-sm text-gray-300">
                Left: 1 C, 4 H, 4 O | Right: 1 C, 4 H, 4 O ✓
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'gameplay',
      title: 'How to Play',
      icon: Trophy,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Now you're ready to play! Here's how the game works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4">
              <Zap size={32} className="text-blue-400 mb-2" />
              <h4 className="font-semibold text-blue-400 mb-2">Adjust Coefficients</h4>
              <p className="text-sm text-gray-300">
                Use the input fields to change the numbers in front of each molecule.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
              <CheckCircle2 size={32} className="text-green-400 mb-2" />
              <h4 className="font-semibold text-green-400 mb-2">Check Your Answer</h4>
              <p className="text-sm text-gray-300">
                Click "Check Solution" to see if you've balanced the equation correctly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4">
              <Lightbulb size={32} className="text-yellow-400 mb-2" />
              <h4 className="font-semibold text-yellow-400 mb-2">Use Hints</h4>
              <p className="text-sm text-gray-300">
                Stuck? Click "Show Hint" for helpful tips (costs electron credits).
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
              <Award size={32} className="text-purple-400 mb-2" />
              <h4 className="font-semibold text-purple-400 mb-2">Earn Rewards</h4>
              <p className="text-sm text-gray-300">
                Complete equations to earn XP, level up, and unlock achievements!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-xl text-blue-400 mb-3 flex items-center gap-2">
              <Star size={24} />
              Pro Tips
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Start with elements that appear in only one compound on each side</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Balance polyatomic ions as a unit when they appear on both sides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Leave hydrogen and oxygen for last as they appear in many compounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Use fractions if needed, then multiply everything to get whole numbers</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Learn How to Play</h1>

      {/* Progress Indicator */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Tutorial Progress</h2>
          <span className="text-blue-400">
            Step {activeStep + 1} of {steps.length}
          </span>
        </div>
        <div className="flex gap-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-1 h-2 rounded-full transition-all ${
                index <= activeStep
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Navigation */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all whitespace-nowrap ${
                activeStep === index
                  ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                  : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="card p-8 mb-6"
      >
        <div className="flex items-center gap-3 mb-6">
          {React.createElement(steps[activeStep].icon, {
            size: 32,
            className: 'text-blue-400',
          })}
          <h2 className="text-3xl font-bold">{steps[activeStep].title}</h2>
        </div>
        {steps[activeStep].content}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="btn-secondary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {activeStep < steps.length - 1 ? (
          <button
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            className="btn-primary px-6 py-3"
          >
            Next Step
          </button>
        ) : (
          <Link to="/play">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 flex items-center gap-2"
            >
              <Trophy size={20} />
              Start Playing!
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default TutorialPage;