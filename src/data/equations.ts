import { ChemicalEquation } from '@/types/chemistry';

export const equations: ChemicalEquation[] = [
  {
    id: 'eq-001',
    reactants: [
      {
        id: 'h2',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'H₂',
        name: 'Hydrogen gas',
        state: 'gas',
      },
      {
        id: 'o2',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'O₂',
        name: 'Oxygen gas',
        state: 'gas',
      },
    ],
    products: [
      {
        id: 'h2o',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'H₂O',
        name: 'Water',
        state: 'liquid',
      },
    ],
    isBalanced: false,
    type: 'synthesis',
    difficulty: 'beginner',
    hints: [
      'Count the hydrogen atoms on each side',
      'Count the oxygen atoms on each side',
      'You need 2 H₂ molecules to balance the hydrogen',
      'The balanced equation is: 2H₂ + O₂ → 2H₂O',
    ],
    explanation: 'Hydrogen combines with oxygen to form water. This is a synthesis reaction where two elements combine to form a compound.',
  },
  {
    id: 'eq-002',
    reactants: [
      {
        id: 'h2o2',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'H₂O₂',
        name: 'Hydrogen peroxide',
        state: 'liquid',
      },
    ],
    products: [
      {
        id: 'h2o',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'H₂O',
        name: 'Water',
        state: 'liquid',
      },
      {
        id: 'o2',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'O₂',
        name: 'Oxygen gas',
        state: 'gas',
      },
    ],
    isBalanced: false,
    type: 'decomposition',
    difficulty: 'beginner',
    hints: [
      'Count all hydrogen atoms',
      'Count all oxygen atoms',
      'You need 2 H₂O₂ molecules',
      'The balanced equation is: 2H₂O₂ → 2H₂O + O₂',
    ],
    explanation: 'Hydrogen peroxide decomposes into water and oxygen gas.',
  },
  {
    id: 'eq-003',
    reactants: [
      {
        id: 'c3h8',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'C₃H₈',
        name: 'Propane',
        state: 'gas',
      },
      {
        id: 'o2',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'O₂',
        name: 'Oxygen gas',
        state: 'gas',
      },
    ],
    products: [
      {
        id: 'co2',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'CO₂',
        name: 'Carbon dioxide',
        state: 'gas',
      },
      {
        id: 'h2o',
        atoms: [],
        bonds: [],
        coefficient: 1,
        charge: 0,
        formula: 'H₂O',
        name: 'Water',
        state: 'gas',
      },
    ],
    isBalanced: false,
    type: 'combustion',
    difficulty: 'advanced',
    hints: [
      'Balance carbon atoms first',
      'Then balance hydrogen atoms',
      'Finally balance oxygen atoms',
      'The balanced equation is: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    ],
    explanation: 'Propane burns in oxygen to produce carbon dioxide and water.',
  },
];

export const parseFormula = (formula: string): { element: string; count: number }[] => {
  const regex = /([A-Z][a-z]?)(\d*)/g;
  const atoms: { element: string; count: number }[] = [];
  let match;

  while ((match = regex.exec(formula)) !== null) {
    const element = match[1];
    const count = match[2] ? parseInt(match[2], 10) : 1;
    atoms.push({ element, count });
  }

  return atoms;
};

export const countAtoms = (molecules: { formula: string; coefficient: number }[]): Record<string, number> => {
  const atomCount: Record<string, number> = {};

  molecules.forEach(molecule => {
    const atoms = parseFormula(molecule.formula);
    atoms.forEach(({ element, count }) => {
      const totalCount = count * molecule.coefficient;
      atomCount[element] = (atomCount[element] || 0) + totalCount;
    });
  });

  return atomCount;
};

export const isEquationBalanced = (equation: ChemicalEquation): boolean => {
  const reactantAtoms = countAtoms(equation.reactants);
  const productAtoms = countAtoms(equation.products);

  const allElements = new Set([...Object.keys(reactantAtoms), ...Object.keys(productAtoms)]);

  for (const element of allElements) {
    if (reactantAtoms[element] !== productAtoms[element]) {
      return false;
    }
  }

  return true;
};

export const getEquationById = (id: string): ChemicalEquation | undefined => {
  return equations.find(eq => eq.id === id);
};