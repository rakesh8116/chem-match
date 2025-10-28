import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Trophy, Zap, Lightbulb, FlaskConical, Star, CheckCircle2, Award, Atom } from 'lucide-react';
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
          <p className="text-gray-700">
            A chemical equation shows the reactants (starting materials) on the left and products (end results) on the right, separated by an arrow (→).
          </p>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
            <p className="text-center text-2xl font-mono text-gray-800 mb-2">
              H₂ + O₂ → H₂O
            </p>
            <p className="text-sm text-gray-600 text-center">
              Hydrogen + Oxygen → Water
            </p>
          </div>
          <p className="text-gray-700">
            This equation is <span className="text-red-600 font-semibold">NOT balanced</span> because we have:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Left side: 2 H atoms, 2 O atoms</li>
            <li>Right side: 2 H atoms, 1 O atom</li>
          </ul>
          <p className="text-amber-700 font-semibold">
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
          <p className="text-gray-700">
            To balance an equation, we add <span className="text-blue-700 font-semibold">coefficients</span> (numbers) in front of molecules. These numbers multiply the entire molecule.
          </p>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
            <p className="text-center text-2xl font-mono text-gray-800 mb-2">
              2 H₂ + O₂ → 2 H₂O
            </p>
            <p className="text-sm text-gray-600 text-center">
              This is now BALANCED!
            </p>
          </div>
          <p className="text-gray-700">
            Let's verify:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Left Side (Reactants)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>2 H₂ = 4 H atoms</li>
                <li>1 O₂ = 2 O atoms</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">Right Side (Products)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>2 H₂O = 4 H atoms</li>
                <li>2 H₂O = 2 O atoms</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-700 bg-green-50 border-2 border-green-300 rounded-lg p-3">
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
          <p className="text-gray-700">
            Follow these steps to balance any equation:
          </p>
          <div className="space-y-3">
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                Count the atoms
              </h4>
              <p className="text-gray-700 text-sm">
                List all atoms on both sides of the equation and count how many of each you have.
              </p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                Start with complex molecules
              </h4>
              <p className="text-gray-700 text-sm">
                Balance molecules with the most atoms first, or those that appear only once on each side.
              </p>
            </div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                Balance one element at a time
              </h4>
              <p className="text-gray-700 text-sm">
                Work on one element at a time. Adjust coefficients to match the number of atoms.
              </p>
            </div>
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
              <h4 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                Verify and adjust
              </h4>
              <p className="text-gray-700 text-sm">
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
          <p className="text-gray-700">
            Let's balance this combustion reaction step by step:
          </p>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
            <p className="text-center text-2xl font-mono text-gray-800 mb-2">
              CH₄ + O₂ → CO₂ + H₂O
            </p>
            <p className="text-sm text-gray-600 text-center">
              Methane + Oxygen → Carbon Dioxide + Water
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Step 1: Count atoms</h4>
              <p className="text-sm text-gray-700">
                Left: 1 C, 4 H, 2 O | Right: 1 C, 2 H, 3 O
              </p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 mb-2">Step 2: Balance hydrogen</h4>
              <p className="text-sm text-gray-700 mb-2">
                We have 4 H on left but only 2 H on right. Add coefficient 2 to H₂O:
              </p>
              <p className="text-center text-xl font-mono text-gray-800">
                CH₄ + O₂ → CO₂ + <span className="text-amber-600 font-bold">2</span> H₂O
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">Step 3: Balance oxygen</h4>
              <p className="text-sm text-gray-700 mb-2">
                Now we have 4 O on right (2 from CO₂ + 2 from 2 H₂O). We need 2 O₂:
              </p>
              <p className="text-center text-xl font-mono text-gray-800">
                CH₄ + <span className="text-amber-600 font-bold">2</span> O₂ → CO₂ + 2 H₂O
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <CheckCircle2 size={20} />
                Balanced!
              </h4>
              <p className="text-sm text-gray-700">
                Left: 1 C, 4 H, 4 O | Right: 1 C, 4 H, 4 O ✓
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'orbitals',
      title: 'Electron Orbitals (s p d f)',
      icon: Atom,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Electrons don't orbit the nucleus in simple circles like planets. Instead, they exist in complex 3D regions called <span className="text-blue-700 font-semibold">orbitals</span>.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-6">
            <h4 className="font-semibold text-xl text-purple-700 mb-4 flex items-center gap-2">
              <Atom size={24} />
              The Four Types of Orbitals
            </h4>

            {/* s Orbital */}
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                      s
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-blue-700 mb-2">s Orbital - Spherical</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <span className="text-blue-600 font-semibold">Shape:</span> Perfect sphere around the nucleus</li>
                      <li>• <span className="text-blue-600 font-semibold">Capacity:</span> Holds up to 2 electrons</li>
                      <li>• <span className="text-blue-600 font-semibold">Number:</span> 1 orbital per energy level</li>
                      <li>• <span className="text-blue-600 font-semibold">Examples:</span> 1s, 2s, 3s, 4s...</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* p Orbital */}
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-3xl shadow-lg transform rotate-45">
                      <span className="transform -rotate-45">p</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-green-700 mb-2">p Orbital - Dumbbell</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <span className="text-green-600 font-semibold">Shape:</span> Two lobes (like a dumbbell or figure-8)</li>
                      <li>• <span className="text-green-600 font-semibold">Capacity:</span> 6 electrons total (2 per orbital)</li>
                      <li>• <span className="text-green-600 font-semibold">Number:</span> 3 orbitals (px, py, pz) per level</li>
                      <li>• <span className="text-green-600 font-semibold">Examples:</span> 2p, 3p, 4p...</li>
                      <li>• <span className="text-green-600 font-semibold">Start at:</span> Energy level 2 and above</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* d Orbital */}
              <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}>
                      d
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-orange-700 mb-2">d Orbital - Cloverleaf</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <span className="text-orange-600 font-semibold">Shape:</span> Four-leaf clover pattern</li>
                      <li>• <span className="text-orange-600 font-semibold">Capacity:</span> 10 electrons total (2 per orbital)</li>
                      <li>• <span className="text-orange-600 font-semibold">Number:</span> 5 orbitals per level</li>
                      <li>• <span className="text-orange-600 font-semibold">Examples:</span> 3d, 4d, 5d...</li>
                      <li>• <span className="text-orange-600 font-semibold">Start at:</span> Energy level 3 and above</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* f Orbital */}
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0" style={{background: 'radial-gradient(circle, transparent 30%, purple 30%, transparent 40%, purple 40%, transparent 50%)'}}></div>
                      <span className="relative z-10">f</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-purple-700 mb-2">f Orbital - Complex</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <span className="text-purple-600 font-semibold">Shape:</span> Very complex multi-lobed shapes</li>
                      <li>• <span className="text-purple-600 font-semibold">Capacity:</span> 14 electrons total (2 per orbital)</li>
                      <li>• <span className="text-purple-600 font-semibold">Number:</span> 7 orbitals per level</li>
                      <li>• <span className="text-purple-600 font-semibold">Examples:</span> 4f, 5f, 6f...</li>
                      <li>• <span className="text-purple-600 font-semibold">Start at:</span> Energy level 4 and above</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Electron Capacity Summary */}
            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
              <h5 className="text-lg font-bold text-amber-700 mb-3">Maximum Electron Capacity</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-blue-100 rounded-lg p-3 text-center border-2 border-blue-400">
                  <div className="text-3xl font-bold text-blue-700">2</div>
                  <div className="text-sm text-gray-700">s orbital</div>
                </div>
                <div className="bg-green-100 rounded-lg p-3 text-center border-2 border-green-400">
                  <div className="text-3xl font-bold text-green-700">6</div>
                  <div className="text-sm text-gray-700">p orbitals</div>
                </div>
                <div className="bg-orange-100 rounded-lg p-3 text-center border-2 border-orange-400">
                  <div className="text-3xl font-bold text-orange-700">10</div>
                  <div className="text-sm text-gray-700">d orbitals</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 text-center border-2 border-purple-400">
                  <div className="text-3xl font-bold text-purple-700">14</div>
                  <div className="text-sm text-gray-700">f orbitals</div>
                </div>
              </div>
            </div>

            {/* Electron Configuration Examples */}
            <div className="mt-6 space-y-3">
              <h5 className="text-lg font-bold text-gray-800 mb-3">Electron Configuration Examples</h5>

              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-700">Hydrogen (H) - 1 electron</span>
                  <span className="text-sm text-gray-600">Atomic #1</span>
                </div>
                <code className="text-gray-800 font-mono text-lg">1s¹</code>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-700">Carbon (C) - 6 electrons</span>
                  <span className="text-sm text-gray-600">Atomic #6</span>
                </div>
                <code className="text-gray-800 font-mono text-lg">1s² 2s² 2p²</code>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-700">Oxygen (O) - 8 electrons</span>
                  <span className="text-sm text-gray-600">Atomic #8</span>
                </div>
                <code className="text-gray-800 font-mono text-lg">1s² 2s² 2p⁴</code>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-700">Iron (Fe) - 26 electrons</span>
                  <span className="text-sm text-gray-600">Atomic #26</span>
                </div>
                <code className="text-gray-800 font-mono text-lg">1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</code>
              </div>
            </div>

            {/* Filling Order */}
            <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-300">
              <h5 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Star size={20} />
                Aufbau Principle - Orbital Filling Order
              </h5>
              <p className="text-gray-700 text-sm mb-3">
                Electrons fill orbitals from lowest to highest energy. Use this order:
              </p>
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 font-mono text-center">
                <div className="text-gray-800 text-lg leading-relaxed">
                  1s → 2s → 2p → 3s → 3p → <span className="text-amber-700 font-bold">4s</span> → <span className="text-amber-700 font-bold">3d</span> → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
                </div>
              </div>
              <p className="text-amber-700 text-sm mt-3 font-semibold">
                💡 Notice: 4s fills <strong>before</strong> 3d! This is a key concept in chemistry.
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
          <p className="text-gray-700">
            Now you're ready to play! Here's how the game works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-4">
              <Zap size={32} className="text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-700 mb-2">Adjust Coefficients</h4>
              <p className="text-sm text-gray-700">
                Use the input fields to change the numbers in front of each molecule.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-4">
              <CheckCircle2 size={32} className="text-green-600 mb-2" />
              <h4 className="font-semibold text-green-700 mb-2">Check Your Answer</h4>
              <p className="text-sm text-gray-700">
                Click "Check Solution" to see if you've balanced the equation correctly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-4">
              <Lightbulb size={32} className="text-amber-600 mb-2" />
              <h4 className="font-semibold text-amber-700 mb-2">Use Hints</h4>
              <p className="text-sm text-gray-700">
                Stuck? Click "Show Hint" for helpful tips (costs electron credits).
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-4">
              <Award size={32} className="text-purple-600 mb-2" />
              <h4 className="font-semibold text-purple-700 mb-2">Earn Rewards</h4>
              <p className="text-sm text-gray-700">
                Complete equations to earn XP, level up, and unlock achievements!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-xl text-blue-700 mb-3 flex items-center gap-2">
              <Star size={24} />
              Pro Tips
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Start with elements that appear in only one compound on each side</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Balance polyatomic ions as a unit when they appear on both sides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Leave hydrogen and oxygen for last as they appear in many compounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
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
          <h2 className="text-xl font-semibold text-gray-800">Tutorial Progress</h2>
          <span className="text-blue-600 font-semibold">
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
                  : 'bg-gray-300'
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
                  ? 'border-blue-500 bg-blue-100 text-blue-700'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-semibold">{step.title}</span>
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
            className: 'text-blue-600',
          })}
          <h2 className="text-3xl font-bold text-gray-800">{steps[activeStep].title}</h2>
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