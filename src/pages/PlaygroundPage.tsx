import React from 'react';
import { motion } from 'framer-motion';

const PlaygroundPage: React.FC = () => {
  return (
    <motion.div
      initial={ opacity: 0, y: 20 }
      animate={ opacity: 1, y: 0 }
      transition={ duration: 0.5 }
      className="min-h-screen"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Equation Balancing Playground</h1>
      
      <div className="card p-8">
        <p className="text-xl text-gray-300 mb-4">
          Welcome to the Equation Balancing Playground page!
        </p>
        <p className="text-gray-400">
          This is where you can equation balancing playground.
          The full interactive features are available in the complete implementation.
        </p>
      </div>
    </motion.div>
  );
};

export default PlaygroundPage;