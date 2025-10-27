import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold mb-4">
          <span className="gradient-text">Master Chemistry</span>
          <br />
          <span className="text-white">Through Play</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Learn to balance chemical equations with our interactive, gamified learning platform.
          Perfect for students who want to make chemistry fun!
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/play">
            <button className="btn-primary text-lg px-8 py-4">
              Start Playing
            </button>
          </Link>
          <Link to="/tutorial">
            <button className="btn-secondary text-lg px-8 py-4">
              Tutorial
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="card p-6">
          <div className="text-3xl mb-4">🧪</div>
          <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
          <p className="text-gray-400">
            Drag, drop, and visualize chemical equations in real-time
          </p>
        </div>
        <div className="card p-6">
          <div className="text-3xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold mb-2">Gamified Progress</h3>
          <p className="text-gray-400">
            Earn points, unlock achievements, and climb the leaderboard
          </p>
        </div>
        <div className="card p-6">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-2">Beautiful Animations</h3>
          <p className="text-gray-400">
            Enjoy stunning visual feedback and engaging animations
          </p>
        </div>
        <div className="card p-6">
          <div className="text-3xl mb-4">👥</div>
          <h3 className="text-xl font-semibold mb-2">Multiplayer Challenges</h3>
          <p className="text-gray-400">
            Compete with friends in real-time equation battles
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;