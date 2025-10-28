export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  valency: number[];
  electronConfiguration: string;
  group: number;
  period: number;
  category: 'metal' | 'nonmetal' | 'metalloid' | 'noble-gas';
  color: string;
}

export interface Molecule {
  id: string;
  atoms: any[];
  bonds: any[];
  coefficient: number;
  charge: number;
  formula: string;
  name?: string;
  state?: 'solid' | 'liquid' | 'gas' | 'aqueous';
}

export type ReactionType =
  | 'synthesis'
  | 'decomposition'
  | 'combustion'
  | 'single-replacement'
  | 'double-replacement'
  | 'acid-base'
  | 'redox';

export interface ChemicalEquation {
  id: string;
  reactants: Molecule[];
  products: Molecule[];
  isBalanced: boolean;
  type: ReactionType;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  hints?: string[];
  explanation?: string;
}

export interface PlayerStats {
  level: number;
  experience: number;
  protonPoints: number;
  electronCredits: number;
  neutronNuggets: number;
  equationsBalanced: number;
  perfectBalances: number;
  totalPlayTime: number;
  currentStreak: number;
  bestStreak: number;
  achievements: any[];
}

export interface UserPreferences {
  soundEnabled: boolean;
  musicEnabled: boolean;
  soundVolume: number;
  musicVolume: number;
  theme: string;
  difficulty: 'easy' | 'normal' | 'hard';
  hintsEnabled: boolean;
  animations: 'full' | 'reduced' | 'none';
  language: string;
}

export interface GameSession {
  id: string;
  startTime: number;
  endTime?: number;
  equationsAttempted: string[];
  score: number;
}

export interface EquationAttempt {
  equationId: string;
  timestamp: number;
  isCorrect: boolean;
  timeSpent: number;
  hintsUsed: number;
}