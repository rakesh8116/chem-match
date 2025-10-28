import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Element {
  symbol: string;
  name: string;
  number: number;
  mass: string;
  category: string;
  row: number;
  col: number;
}

const PeriodicTablePage: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  // Calculate electron configuration for visual model (simplified Bohr model)
  const getElectronShells = (atomicNumber: number): number[] => {
    const shells: number[] = [];
    let remainingElectrons = atomicNumber;

    // Shell capacity: 2, 8, 18, 32...  (2n²)
    // For simplicity, we'll use: 2, 8, 8, 18 for first 36 elements
    const shellCapacities = [2, 8, 8, 18, 18, 32];

    for (const capacity of shellCapacities) {
      if (remainingElectrons <= 0) break;
      const electronsInShell = Math.min(remainingElectrons, capacity);
      shells.push(electronsInShell);
      remainingElectrons -= electronsInShell;
    }

    return shells;
  };

  // Simplified periodic table data (first 36 elements for main layout)
  const elements: Element[] = [
    // Period 1
    { symbol: 'H', name: 'Hydrogen', number: 1, mass: '1.008', category: 'nonmetal', row: 1, col: 1 },
    { symbol: 'He', name: 'Helium', number: 2, mass: '4.003', category: 'noble-gas', row: 1, col: 18 },

    // Period 2
    { symbol: 'Li', name: 'Lithium', number: 3, mass: '6.941', category: 'alkali', row: 2, col: 1 },
    { symbol: 'Be', name: 'Beryllium', number: 4, mass: '9.012', category: 'alkaline', row: 2, col: 2 },
    { symbol: 'B', name: 'Boron', number: 5, mass: '10.81', category: 'metalloid', row: 2, col: 13 },
    { symbol: 'C', name: 'Carbon', number: 6, mass: '12.01', category: 'nonmetal', row: 2, col: 14 },
    { symbol: 'N', name: 'Nitrogen', number: 7, mass: '14.01', category: 'nonmetal', row: 2, col: 15 },
    { symbol: 'O', name: 'Oxygen', number: 8, mass: '16.00', category: 'nonmetal', row: 2, col: 16 },
    { symbol: 'F', name: 'Fluorine', number: 9, mass: '19.00', category: 'halogen', row: 2, col: 17 },
    { symbol: 'Ne', name: 'Neon', number: 10, mass: '20.18', category: 'noble-gas', row: 2, col: 18 },

    // Period 3
    { symbol: 'Na', name: 'Sodium', number: 11, mass: '22.99', category: 'alkali', row: 3, col: 1 },
    { symbol: 'Mg', name: 'Magnesium', number: 12, mass: '24.31', category: 'alkaline', row: 3, col: 2 },
    { symbol: 'Al', name: 'Aluminum', number: 13, mass: '26.98', category: 'post-transition', row: 3, col: 13 },
    { symbol: 'Si', name: 'Silicon', number: 14, mass: '28.09', category: 'metalloid', row: 3, col: 14 },
    { symbol: 'P', name: 'Phosphorus', number: 15, mass: '30.97', category: 'nonmetal', row: 3, col: 15 },
    { symbol: 'S', name: 'Sulfur', number: 16, mass: '32.07', category: 'nonmetal', row: 3, col: 16 },
    { symbol: 'Cl', name: 'Chlorine', number: 17, mass: '35.45', category: 'halogen', row: 3, col: 17 },
    { symbol: 'Ar', name: 'Argon', number: 18, mass: '39.95', category: 'noble-gas', row: 3, col: 18 },

    // Period 4 (partial)
    { symbol: 'K', name: 'Potassium', number: 19, mass: '39.10', category: 'alkali', row: 4, col: 1 },
    { symbol: 'Ca', name: 'Calcium', number: 20, mass: '40.08', category: 'alkaline', row: 4, col: 2 },
    { symbol: 'Sc', name: 'Scandium', number: 21, mass: '44.96', category: 'transition', row: 4, col: 3 },
    { symbol: 'Ti', name: 'Titanium', number: 22, mass: '47.87', category: 'transition', row: 4, col: 4 },
    { symbol: 'V', name: 'Vanadium', number: 23, mass: '50.94', category: 'transition', row: 4, col: 5 },
    { symbol: 'Cr', name: 'Chromium', number: 24, mass: '52.00', category: 'transition', row: 4, col: 6 },
    { symbol: 'Mn', name: 'Manganese', number: 25, mass: '54.94', category: 'transition', row: 4, col: 7 },
    { symbol: 'Fe', name: 'Iron', number: 26, mass: '55.85', category: 'transition', row: 4, col: 8 },
    { symbol: 'Co', name: 'Cobalt', number: 27, mass: '58.93', category: 'transition', row: 4, col: 9 },
    { symbol: 'Ni', name: 'Nickel', number: 28, mass: '58.69', category: 'transition', row: 4, col: 10 },
    { symbol: 'Cu', name: 'Copper', number: 29, mass: '63.55', category: 'transition', row: 4, col: 11 },
    { symbol: 'Zn', name: 'Zinc', number: 30, mass: '65.38', category: 'transition', row: 4, col: 12 },
    { symbol: 'Ga', name: 'Gallium', number: 31, mass: '69.72', category: 'post-transition', row: 4, col: 13 },
    { symbol: 'Ge', name: 'Germanium', number: 32, mass: '72.63', category: 'metalloid', row: 4, col: 14 },
    { symbol: 'As', name: 'Arsenic', number: 33, mass: '74.92', category: 'metalloid', row: 4, col: 15 },
    { symbol: 'Se', name: 'Selenium', number: 34, mass: '78.97', category: 'nonmetal', row: 4, col: 16 },
    { symbol: 'Br', name: 'Bromine', number: 35, mass: '79.90', category: 'halogen', row: 4, col: 17 },
    { symbol: 'Kr', name: 'Krypton', number: 36, mass: '83.80', category: 'noble-gas', row: 4, col: 18 },
  ];

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'alkali': 'bg-red-100 border-2 border-red-400 hover:bg-red-200 hover:border-red-500 text-red-900',
      'alkaline': 'bg-orange-100 border-2 border-orange-400 hover:bg-orange-200 hover:border-orange-500 text-orange-900',
      'transition': 'bg-pink-100 border-2 border-pink-400 hover:bg-pink-200 hover:border-pink-500 text-pink-900',
      'post-transition': 'bg-blue-100 border-2 border-blue-400 hover:bg-blue-200 hover:border-blue-500 text-blue-900',
      'metalloid': 'bg-teal-100 border-2 border-teal-400 hover:bg-teal-200 hover:border-teal-500 text-teal-900',
      'nonmetal': 'bg-green-100 border-2 border-green-400 hover:bg-green-200 hover:border-green-500 text-green-900',
      'halogen': 'bg-yellow-100 border-2 border-yellow-400 hover:bg-yellow-200 hover:border-yellow-500 text-yellow-900',
      'noble-gas': 'bg-purple-100 border-2 border-purple-400 hover:bg-purple-200 hover:border-purple-500 text-purple-900',
    };
    return colors[category] || 'bg-gray-100 border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-500 text-gray-900';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Interactive Periodic Table</h1>

      <div className="mb-8">
        <div className="grid grid-cols-18 gap-1 relative" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
          {elements.map((element) => (
            <motion.div
              key={element.number}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedElement(element)}
              className={`
                cursor-pointer rounded-xl p-3 text-center transition-all shadow-sm hover:shadow-md
                ${getCategoryColor(element.category)}
              `}
              style={{
                gridRow: element.row,
                gridColumn: element.col,
                minHeight: '90px',
              }}
            >
              <div className="text-xs font-semibold opacity-70">{element.number}</div>
              <div className="text-2xl font-bold my-1">{element.symbol}</div>
              <div className="text-xs font-medium truncate opacity-80">{element.name}</div>
              <div className="text-xs font-semibold opacity-70">{element.mass}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="card p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Element Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Alkali Metals', category: 'alkali' },
            { name: 'Alkaline Earth', category: 'alkaline' },
            { name: 'Transition Metals', category: 'transition' },
            { name: 'Post-transition', category: 'post-transition' },
            { name: 'Metalloids', category: 'metalloid' },
            { name: 'Nonmetals', category: 'nonmetal' },
            { name: 'Halogens', category: 'halogen' },
            { name: 'Noble Gases', category: 'noble-gas' },
          ].map((item) => (
            <div key={item.category} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-lg shadow-sm ${getCategoryColor(item.category)}`}></div>
              <span className="text-sm font-semibold text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Element Details with Atomic Model */}
      {selectedElement && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8"
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold gradient-text">{selectedElement.name}</h2>
            <button
              onClick={() => setSelectedElement(null)}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Two Column Layout: Info + Atomic Model */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Element Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-300">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Atomic Number</div>
                  <div className="text-3xl font-bold text-blue-700">{selectedElement.number}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-300">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Symbol</div>
                  <div className="text-3xl font-bold text-purple-700">{selectedElement.symbol}</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-2 border-green-300">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Atomic Mass</div>
                  <div className="text-3xl font-bold text-green-700">{selectedElement.mass}</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border-2 border-amber-300">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Category</div>
                  <div className="text-lg font-bold text-amber-800 capitalize">
                    {selectedElement.category.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Electron Configuration */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border-2 border-indigo-300">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">Electron Configuration</h3>
                <div className="flex flex-wrap gap-2">
                  {getElectronShells(selectedElement.number).map((electrons, shellIndex) => (
                    <div
                      key={shellIndex}
                      className="bg-white rounded-lg px-3 py-2 border-2 border-indigo-200 shadow-sm"
                    >
                      <span className="text-gray-600 font-semibold">Shell {shellIndex + 1}:</span>{' '}
                      <span className="text-indigo-700 font-bold">{electrons}</span>{' '}
                      <span className="text-gray-500 font-semibold">e⁻</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bohr Model Atomic Visualization */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Title */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Bohr Model</h3>
                  <p className="text-sm text-gray-600 font-semibold">Electron Shell Diagram</p>
                </div>

                {/* Atomic Model SVG */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' }}
                >
                  {/* Nucleus */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    cx="200"
                    cy="200"
                    r="20"
                    fill="url(#nucleusGradient)"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />

                  {/* Nucleus gradient */}
                  <defs>
                    <radialGradient id="nucleusGradient">
                      <stop offset="0%" stopColor="#fca5a5" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </radialGradient>
                  </defs>

                  {/* Nucleus Label */}
                  <text
                    x="200"
                    y="205"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {selectedElement.symbol}
                  </text>

                  {/* Electron Shells */}
                  {getElectronShells(selectedElement.number).map((electronCount, shellIndex) => {
                    const radius = 50 + shellIndex * 45;
                    const angleStep = (2 * Math.PI) / electronCount;

                    return (
                      <g key={shellIndex}>
                        {/* Shell orbit */}
                        <motion.circle
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: shellIndex * 0.1, type: 'spring' }}
                          cx="200"
                          cy="200"
                          r={radius}
                          fill="none"
                          stroke={`hsl(${shellIndex * 40 + 200}, 70%, 50%)`}
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          opacity="0.4"
                        />

                        {/* Electrons on this shell */}
                        {Array.from({ length: electronCount }).map((_, electronIndex) => {
                          const angle = electronIndex * angleStep - Math.PI / 2;
                          const x = 200 + radius * Math.cos(angle);
                          const y = 200 + radius * Math.sin(angle);

                          return (
                            <motion.g
                              key={electronIndex}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: shellIndex * 0.1 + electronIndex * 0.05,
                                type: 'spring',
                                damping: 8,
                              }}
                            >
                              {/* Electron glow */}
                              <circle
                                cx={x}
                                cy={y}
                                r="8"
                                fill={`hsl(${shellIndex * 40 + 200}, 90%, 60%)`}
                                opacity="0.3"
                              />
                              {/* Electron */}
                              <circle
                                cx={x}
                                cy={y}
                                r="5"
                                fill={`hsl(${shellIndex * 40 + 200}, 80%, 70%)`}
                                stroke="white"
                                strokeWidth="1"
                              />
                              {/* e- label on hover */}
                              <text
                                x={x}
                                y={y + 3}
                                textAnchor="middle"
                                fill="white"
                                fontSize="8"
                                fontWeight="bold"
                                opacity="0.8"
                              >
                                e⁻
                              </text>
                            </motion.g>
                          );
                        })}

                        {/* Shell label */}
                        <text
                          x="200"
                          y={200 - radius - 10}
                          textAnchor="middle"
                          fill={`hsl(${shellIndex * 40 + 200}, 70%, 70%)`}
                          fontSize="11"
                          fontWeight="bold"
                        >
                          Shell {shellIndex + 1} ({electronCount})
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="mt-4 flex justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span className="text-gray-300">Nucleus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">Electrons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PeriodicTablePage;