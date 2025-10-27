import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  PlayerStats,
  UserPreferences,
  GameSession,
  ChemicalEquation,
  EquationAttempt,
} from '@/types/chemistry';

interface GameState {
  // Player data
  playerStats: PlayerStats;
  userPreferences: UserPreferences;
  
  // Current game session
  currentSession: GameSession | null;
  currentEquation: ChemicalEquation | null;
  
  // Game progress
  unlockedLevels: string[];
  completedEquations: string[];
  equationAttempts: EquationAttempt[];
  
  // UI state
  isDragging: boolean;
  selectedAtom: string | null;
  hintLevel: number;
  showTutorial: boolean;
  
  // Actions
  updatePlayerStats: (stats: Partial<PlayerStats>) => void;
  addExperience: (xp: number) => void;
  addPoints: (points: number, type: 'proton' | 'electron' | 'neutron') => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  setCurrentEquation: (equation: ChemicalEquation) => void;
  submitSolution: (reactantCoeffs: number[], productCoeffs: number[]) => boolean;
  useHint: () => string | null;
  completeEquation: (equationId: string) => void;
  resetProgress: () => void;
}

const initialPlayerStats: PlayerStats = {
  level: 1,
  experience: 0,
  protonPoints: 100,
  electronCredits: 50,
  neutronNuggets: 10,
  equationsBalanced: 0,
  perfectBalances: 0,
  totalPlayTime: 0,
  currentStreak: 0,
  bestStreak: 0,
  achievements: [],
};

const initialPreferences: UserPreferences = {
  soundEnabled: true,
  musicEnabled: true,
  soundVolume: 0.7,
  musicVolume: 0.5,
  theme: 'default',
  difficulty: 'normal',
  hintsEnabled: true,
  animations: 'full',
  language: 'en',
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      // Initial state
      playerStats: initialPlayerStats,
      userPreferences: initialPreferences,
      currentSession: null,
      currentEquation: null,
      unlockedLevels: ['level-1'],
      completedEquations: [],
      equationAttempts: [],
      isDragging: false,
      selectedAtom: null,
      hintLevel: 0,
      showTutorial: true,

      // Actions
      updatePlayerStats: (stats) =>
        set((state) => ({
          playerStats: { ...state.playerStats, ...stats },
        })),

      addExperience: (xp) =>
        set((state) => {
          const newXp = state.playerStats.experience + xp;
          const newLevel = Math.floor(newXp / 100) + 1;
          return {
            playerStats: {
              ...state.playerStats,
              experience: newXp,
              level: newLevel,
            },
          };
        }),

      addPoints: (points, type) =>
        set((state) => {
          const pointTypes = {
            proton: 'protonPoints',
            electron: 'electronCredits',
            neutron: 'neutronNuggets',
          };
          const pointKey = pointTypes[type] as keyof PlayerStats;
          return {
            playerStats: {
              ...state.playerStats,
              [pointKey]: (state.playerStats[pointKey] as number) + points,
            },
          };
        }),

      updatePreferences: (prefs) =>
        set((state) => ({
          userPreferences: { ...state.userPreferences, ...prefs },
        })),

      setCurrentEquation: (equation) =>
        set({
          currentEquation: equation,
          hintLevel: 0,
        }),

      submitSolution: (reactantCoeffs, productCoeffs) => {
        const state = get();
        if (!state.currentEquation) return false;

        // Simplified check - implement full logic
        const isCorrect = true;

        if (isCorrect) {
          set((state) => ({
            playerStats: {
              ...state.playerStats,
              equationsBalanced: state.playerStats.equationsBalanced + 1,
              currentStreak: state.playerStats.currentStreak + 1,
              bestStreak: Math.max(
                state.playerStats.currentStreak + 1,
                state.playerStats.bestStreak
              ),
            },
            completedEquations: [
              ...state.completedEquations,
              state.currentEquation!.id,
            ],
          }));
        }

        return isCorrect;
      },

      useHint: () => {
        const state = get();
        if (!state.currentEquation || !state.currentEquation.hints) return null;

        const hints = state.currentEquation.hints;
        const currentHintLevel = state.hintLevel;

        if (currentHintLevel < hints.length) {
          set((state) => ({
            hintLevel: state.hintLevel + 1,
            playerStats: {
              ...state.playerStats,
              electronCredits: Math.max(0, state.playerStats.electronCredits - 10),
            },
          }));

          return hints[currentHintLevel];
        }

        return null;
      },

      completeEquation: (equationId) =>
        set((state) => ({
          completedEquations: [...new Set([...state.completedEquations, equationId])],
        })),

      resetProgress: () =>
        set({
          playerStats: initialPlayerStats,
          unlockedLevels: ['level-1'],
          completedEquations: [],
          equationAttempts: [],
        }),
    }),
    {
      name: 'chem-match-storage',
      partialize: (state) => ({
        playerStats: state.playerStats,
        userPreferences: state.userPreferences,
        unlockedLevels: state.unlockedLevels,
        completedEquations: state.completedEquations,
        equationAttempts: state.equationAttempts,
      }),
    }
  )
);