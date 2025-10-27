import React from 'react';
import { motion } from 'framer-motion';

const LevelsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Choose Your Level</h1>
      
      <div className="card p-8">
        <p className="text-xl text-gray-300 mb-4">
          Welcome to the Choose Your Level page!
        </p>
        <p className="text-gray-400">
          This is where you can choose your level.
          The full interactive features are available in the complete implementation.
        </p>
      </div>
    </motion.div>
  );
};

export default LevelsPage;