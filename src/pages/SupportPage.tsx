import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, School, Award, Heart, Lightbulb, Code, Sparkles } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">About & Support</h1>

      {/* About the Project */}
      <div className="card p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles size={32} className="text-purple-400" />
          <h2 className="text-3xl font-bold">About Chem-Match</h2>
        </div>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            Chem-Match is an educational chemistry game that makes learning chemical equation balancing
            fun and interactive! Created as a school project to help students master chemistry through
            gamification and engaging visual feedback.
          </p>
          <p>
            This project combines modern web technologies with educational content to create an
            immersive learning experience. Students can practice balancing equations, explore the
            periodic table, earn achievements, and progress through challenging levels.
          </p>
        </div>
      </div>

      {/* Author Info */}
      <div className="card p-8 mb-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <Award size={32} className="text-blue-400" />
          <h2 className="text-3xl font-bold">About the Developer</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Code size={24} className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Ruhan Singh</h3>
                <p className="text-gray-400">Student Developer, Age 13</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <School size={24} className="text-green-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">One World International School</h3>
                <p className="text-gray-400">Whitefield, Bangalore, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award size={24} className="text-purple-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">IB MYP3</h3>
                <p className="text-gray-400">Middle Years Programme - Year 3</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Heart size={20} className="text-red-400" />
              Project Motivation
            </h3>
            <p className="text-gray-300 mb-4">
              "I created this project to make chemistry more fun and accessible for students like me.
              Balancing equations can be challenging, but with the right tools and gamification,
              it becomes an engaging learning experience!"
            </p>
            <p className="text-sm text-gray-400 italic">
              - Ruhan Singh, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="card p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Code size={32} className="text-green-400" />
          <h2 className="text-3xl font-bold">Technologies Used</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'React 18', color: 'from-cyan-500 to-blue-500' },
            { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
            { name: 'Vite', color: 'from-purple-500 to-pink-500' },
            { name: 'TailwindCSS', color: 'from-sky-500 to-cyan-500' },
            { name: 'Framer Motion', color: 'from-pink-500 to-rose-500' },
            { name: 'Zustand', color: 'from-orange-500 to-yellow-500' },
            { name: 'React Router', color: 'from-red-500 to-orange-500' },
            { name: 'Lucide Icons', color: 'from-green-500 to-emerald-500' },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Highlight */}
      <div className="card p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb size={32} className="text-yellow-400" />
          <h2 className="text-3xl font-bold">Key Features</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Interactive Gameplay', desc: '5 practice equations with real-time validation' },
            { title: '12 Progressive Levels', desc: 'From Chemistry Basics to Master Challenge' },
            { title: 'Achievement System', desc: '12 achievements to unlock and collect' },
            { title: 'Periodic Table', desc: '36 interactive elements with detailed info' },
            { title: 'Comprehensive Tutorial', desc: '5-step guide for learning equation balancing' },
            { title: 'Customization', desc: 'Audio, difficulty, theme, and language settings' },
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <h3 className="font-semibold text-blue-400 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Support */}
      <div className="card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail size={32} className="text-blue-400" />
          <h2 className="text-3xl font-bold">Contact & Feedback</h2>
        </div>
        <div className="space-y-4">
          <p className="text-gray-300">
            Have suggestions, found a bug, or want to contribute? I'd love to hear from you!
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/rakesh8116/chem-match"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
            >
              <Github size={24} className="text-white" />
              <div>
                <div className="font-semibold">GitHub Repository</div>
                <div className="text-sm text-gray-400">View code, report issues, or contribute</div>
              </div>
            </a>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Lightbulb size={24} className="text-yellow-400" />
              Future Improvements
            </h3>
            <p className="text-gray-300 mb-3">
              This project is continuously evolving! Planned features include:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>More equation types (acid-base, redox, organic chemistry)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Multiplayer challenges and leaderboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Mobile app version</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>More interactive periodic table features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Teacher dashboard for classroom use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-400">
        <p className="mb-2">
          Made with <Heart size={16} className="inline text-red-400" /> for chemistry education
        </p>
        <p className="text-sm">
          © 2025 Ruhan Singh • IB MYP3 Project • One World International School
        </p>
      </div>
    </motion.div>
  );
};

export default SupportPage;
