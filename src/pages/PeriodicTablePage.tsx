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
      'alkali': 'bg-red-500/20 border-red-500 hover:bg-red-500/30',
      'alkaline': 'bg-orange-500/20 border-orange-500 hover:bg-orange-500/30',
      'transition': 'bg-pink-500/20 border-pink-500 hover:bg-pink-500/30',
      'post-transition': 'bg-blue-400/20 border-blue-400 hover:bg-blue-400/30',
      'metalloid': 'bg-teal-500/20 border-teal-500 hover:bg-teal-500/30',
      'nonmetal': 'bg-green-500/20 border-green-500 hover:bg-green-500/30',
      'halogen': 'bg-yellow-500/20 border-yellow-500 hover:bg-yellow-500/30',
      'noble-gas': 'bg-purple-500/20 border-purple-500 hover:bg-purple-500/30',
    };
    return colors[category] || 'bg-gray-500/20 border-gray-500 hover:bg-gray-500/30';
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
                cursor-pointer border-2 rounded-lg p-2 text-center transition-all
                ${getCategoryColor(element.category)}
              `}
              style={{
                gridRow: element.row,
                gridColumn: element.col,
                minHeight: '80px',
              }}
            >
              <div className="text-xs text-gray-400">{element.number}</div>
              <div className="text-xl font-bold text-white">{element.symbol}</div>
              <div className="text-xs text-gray-300 truncate">{element.name}</div>
              <div className="text-xs text-gray-400">{element.mass}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="card p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Element Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
            <div key={item.category} className="flex items-center gap-2">
              <div className={`w-4 h-4 border-2 rounded ${getCategoryColor(item.category)}`}></div>
              <span className="text-sm text-gray-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Element Details */}
      {selectedElement && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold gradient-text">{selectedElement.name}</h2>
            <button
              onClick={() => setSelectedElement(null)}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-1">Atomic Number</div>
              <div className="text-2xl font-bold text-blue-400">{selectedElement.number}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Symbol</div>
              <div className="text-2xl font-bold text-purple-400">{selectedElement.symbol}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Atomic Mass</div>
              <div className="text-2xl font-bold text-green-400">{selectedElement.mass}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Category</div>
              <div className="text-lg font-semibold text-yellow-400 capitalize">
                {selectedElement.category.replace('-', ' ')}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PeriodicTablePage;