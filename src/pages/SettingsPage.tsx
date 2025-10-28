import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music, Palette, Zap, Globe, AlertCircle, RotateCcw, Save } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

const SettingsPage: React.FC = () => {
  const { userPreferences, updatePreferences, resetProgress } = useGameStore();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = () => {
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    setSaveMessage('Progress reset successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-12"
    >
      <h1 className="text-4xl font-bold gradient-text mb-8">Settings & Preferences</h1>

      {/* Save Message */}
      {saveMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg flex items-center gap-2"
        >
          <Save size={20} className="text-green-600" />
          <span className="text-green-800">{saveMessage}</span>
        </motion.div>
      )}

      {/* Audio Settings */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Volume2 size={24} className="text-blue-600" />
          <h2 className="text-2xl font-semibold">Audio Settings</h2>
        </div>

        <div className="space-y-6">
          {/* Sound Effects Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {userPreferences.soundEnabled ? (
                <Volume2 size={20} className="text-blue-600" />
              ) : (
                <VolumeX size={20} className="text-gray-600" />
              )}
              <div>
                <div className="text-lg font-medium">Sound Effects</div>
                <div className="text-sm text-gray-600">Enable or disable sound effects</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={userPreferences.soundEnabled}
                onChange={(e) => updatePreferences({ soundEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Sound Volume */}
          {userPreferences.soundEnabled && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Sound Volume</label>
                <span className="text-sm text-blue-600">{Math.round(userPreferences.soundVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={userPreferences.soundVolume}
                onChange={(e) => updatePreferences({ soundVolume: parseFloat(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          )}

          {/* Music Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Music size={20} className="text-purple-600" />
              <div>
                <div className="text-lg font-medium">Background Music</div>
                <div className="text-sm text-gray-600">Enable or disable background music</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={userPreferences.musicEnabled}
                onChange={(e) => updatePreferences({ musicEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Music Volume */}
          {userPreferences.musicEnabled && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Music Volume</label>
                <span className="text-sm text-purple-600">{Math.round(userPreferences.musicVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={userPreferences.musicVolume}
                onChange={(e) => updatePreferences({ musicVolume: parseFloat(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          )}
        </div>
      </div>

      {/* Game Settings */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Zap size={24} className="text-amber-600" />
          <h2 className="text-2xl font-semibold">Game Settings</h2>
        </div>

        <div className="space-y-6">
          {/* Difficulty */}
          <div>
            <label className="text-lg font-medium mb-3 block">Difficulty Level</label>
            <div className="grid grid-cols-3 gap-3">
              {(['easy', 'normal', 'hard'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => updatePreferences({ difficulty: level })}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    userPreferences.difficulty === level
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold capitalize">{level}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hints */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-medium">Enable Hints</div>
              <div className="text-sm text-gray-600">Allow hint system during gameplay</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={userPreferences.hintsEnabled}
                onChange={(e) => updatePreferences({ hintsEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Animations */}
          <div>
            <label className="text-lg font-medium mb-3 block">Animation Level</label>
            <div className="grid grid-cols-3 gap-3">
              {(['full', 'reduced', 'none'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => updatePreferences({ animations: level })}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    userPreferences.animations === level
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold capitalize">{level}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Palette size={24} className="text-pink-600" />
          <h2 className="text-2xl font-semibold">Appearance</h2>
        </div>

        <div className="space-y-6">
          {/* Theme */}
          <div>
            <label className="text-lg font-medium mb-3 block">Theme</label>
            <div className="grid grid-cols-2 gap-3">
              {['default', 'blue', 'purple', 'green'].map((theme) => (
                <button
                  key={theme}
                  onClick={() => updatePreferences({ theme })}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    userPreferences.theme === theme
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold capitalize">{theme}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="text-lg font-medium mb-3 flex items-center gap-2">
              <Globe size={20} />
              Language
            </label>
            <select
              value={userPreferences.language}
              onChange={(e) => updatePreferences({ language: e.target.value })}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card p-6 border-2 border-red-300">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle size={24} className="text-red-600" />
          <h2 className="text-2xl font-semibold text-red-700">Danger Zone</h2>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            Resetting your progress will delete all your achievements, statistics, and completed levels. This action cannot be undone.
          </p>

          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-6 py-3 bg-red-50 border-2 border-red-500 text-red-700 rounded-lg hover:bg-red-100 transition-all flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Reset All Progress
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-amber-700 font-semibold">Are you sure? This cannot be undone!</p>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                >
                  Yes, Reset Everything
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="btn-primary px-8 py-3 flex items-center gap-2"
        >
          <Save size={20} />
          Save Settings
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SettingsPage;