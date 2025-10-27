import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block mb-4"
        >
          <FlaskConical className="text-blue-400" size={64} />
        </motion.div>
        
        <h2 className="text-2xl font-bold gradient-text mb-2">Loading ChemMatch</h2>
        
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              className="w-3 h-3 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;