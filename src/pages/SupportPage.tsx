import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, School, Award, Heart, Lightbulb, Code, Sparkles } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">About & Support</h1>

      {/* About the Project */}
      <div className="card p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles size={32} className="text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-800">About Chem-Match</h2>
        </div>
        <div className="space-y-4 text-gray-700">
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
      <div className="card p-8 mb-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300">
        <div className="flex items-center gap-3 mb-6">
          <Award size={32} className="text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">About the Developer</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl mb-4">
              <img
                src="/images/ruhan-profile.jpg"
                alt="Ruhan Singh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">RS</div>';
                  }
                }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold gradient-text mb-1">Ruhan Singh</h3>
              <p className="text-sm text-gray-600">Student Developer • Age 13</p>
            </div>
          </div>

          {/* Info Column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Code size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Full Stack Developer</h3>
                <p className="text-gray-600 text-sm">React, TypeScript, Web Technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <School size={24} className="text-green-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">One World International School</h3>
                <p className="text-gray-600 text-sm">Whitefield, Bangalore, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award size={24} className="text-purple-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">IB MYP3</h3>
                <p className="text-gray-600 text-sm">Middle Years Programme - Year 3</p>
              </div>
            </div>
          </div>

          {/* Motivation Column */}
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Heart size={20} className="text-red-500" />
              Project Motivation
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              "I created this project to make chemistry more fun and accessible for students like me.
              Balancing equations can be challenging, but with the right tools and gamification,
              it becomes an engaging learning experience!"
            </p>
            <p className="text-xs text-gray-600 italic">
              - Ruhan Singh, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="card p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Code size={32} className="text-green-600" />
          <h2 className="text-3xl font-bold text-gray-800">Technologies Used</h2>
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
              className="bg-gray-50 rounded-lg p-4 text-center border-2 border-gray-200 hover:border-gray-400 transition-all"
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
          <Lightbulb size={32} className="text-amber-600" />
          <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Interactive Gameplay', desc: '20 practice equations with 7 reaction types' },
            { title: '12 Progressive Levels', desc: 'From Chemistry Basics to Master Challenge' },
            { title: 'Achievement System', desc: '12 achievements to unlock and collect' },
            { title: 'Periodic Table', desc: '36 interactive elements with detailed info' },
            { title: 'Comprehensive Tutorial', desc: '6-step guide including orbitals and equation balancing' },
            { title: 'Customization', desc: 'Audio, difficulty, theme, and language settings' },
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
              <h3 className="font-semibold text-blue-700 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Support */}
      <div className="card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail size={32} className="text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Contact & Feedback</h2>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700">
            Have suggestions, found a bug, or want to contribute? I'd love to hear from you!
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/rakesh8116/chem-match"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-all"
            >
              <Github size={24} className="text-gray-800" />
              <div>
                <div className="font-semibold text-gray-800">GitHub Repository</div>
                <div className="text-sm text-gray-600">View code, report issues, or contribute</div>
              </div>
            </a>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Lightbulb size={24} className="text-amber-600" />
              Future Improvements
            </h3>
            <p className="text-gray-700 mb-3">
              This project is continuously evolving! Planned features include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>More equation types (acid-base, redox, organic chemistry)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Multiplayer challenges and leaderboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Mobile app version</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>More interactive periodic table features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Teacher dashboard for classroom use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SupportPage;
