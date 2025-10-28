/**
 * Chemistry utility functions for parsing and validating chemical equations
 */

interface AtomCount {
  [element: string]: number;
}

/**
 * Parse a chemical formula and return atom counts
 * Examples: H2O -> {H: 2, O: 1}, Ca(OH)2 -> {Ca: 1, O: 2, H: 2}
 */
export function parseFormula(formula: string): AtomCount {
  const atoms: AtomCount = {};

  // Remove state indicators like (s), (l), (g), (aq)
  const cleanFormula = formula.replace(/\([slgaq]+\)/g, '');

  // Stack to handle nested parentheses
  const stack: AtomCount[] = [{}];
  let i = 0;

  while (i < cleanFormula.length) {
    const char = cleanFormula[i];

    if (char === '(') {
      // Start new group
      stack.push({});
      i++;
    } else if (char === ')') {
      // End group and multiply by following number
      i++;
      let multiplier = '';
      while (i < cleanFormula.length && /\d/.test(cleanFormula[i])) {
        multiplier += cleanFormula[i];
        i++;
      }
      const mult = parseInt(multiplier) || 1;

      // Pop group and merge with multiplier
      const group = stack.pop() || {};
      const current = stack[stack.length - 1];

      for (const [element, count] of Object.entries(group)) {
        current[element] = (current[element] || 0) + count * mult;
      }
    } else if (/[A-Z]/.test(char)) {
      // Element symbol (starts with uppercase)
      let element = char;
      i++;

      // Check for lowercase letters (e.g., Ca, Cl)
      while (i < cleanFormula.length && /[a-z]/.test(cleanFormula[i])) {
        element += cleanFormula[i];
        i++;
      }

      // Get the count (number after element)
      let count = '';
      while (i < cleanFormula.length && /\d/.test(cleanFormula[i])) {
        count += cleanFormula[i];
        i++;
      }
      const num = parseInt(count) || 1;

      // Add to current group
      const current = stack[stack.length - 1];
      current[element] = (current[element] || 0) + num;
    } else {
      // Skip unknown characters
      i++;
    }
  }

  return stack[0];
}

/**
 * Count atoms in a list of molecules with coefficients
 */
export function countAtomsWithCoefficients(
  molecules: Array<{ formula: string; coefficient: number }>
): AtomCount {
  const totalAtoms: AtomCount = {};

  for (const molecule of molecules) {
    const atoms = parseFormula(molecule.formula);

    for (const [element, count] of Object.entries(atoms)) {
      totalAtoms[element] = (totalAtoms[element] || 0) + count * molecule.coefficient;
    }
  }

  return totalAtoms;
}

/**
 * Check if two atom count objects are equal
 */
export function areAtomCountsEqual(atoms1: AtomCount, atoms2: AtomCount): boolean {
  const allElements = new Set([
    ...Object.keys(atoms1),
    ...Object.keys(atoms2),
  ]);

  for (const element of allElements) {
    if ((atoms1[element] || 0) !== (atoms2[element] || 0)) {
      return false;
    }
  }

  return true;
}

/**
 * Validate if an equation is balanced
 */
export function isEquationBalanced(
  reactants: Array<{ formula: string; coefficient: number }>,
  products: Array<{ formula: string; coefficient: number }>
): boolean {
  const reactantAtoms = countAtomsWithCoefficients(reactants);
  const productAtoms = countAtomsWithCoefficients(products);

  return areAtomCountsEqual(reactantAtoms, productAtoms);
}

/**
 * Get detailed comparison of atoms on both sides
 */
export function getAtomComparison(
  reactants: Array<{ formula: string; coefficient: number }>,
  products: Array<{ formula: string; coefficient: number }>
): {
  balanced: boolean;
  reactantAtoms: AtomCount;
  productAtoms: AtomCount;
  unbalancedElements: string[];
} {
  const reactantAtoms = countAtomsWithCoefficients(reactants);
  const productAtoms = countAtomsWithCoefficients(products);

  const allElements = new Set([
    ...Object.keys(reactantAtoms),
    ...Object.keys(productAtoms),
  ]);

  const unbalancedElements: string[] = [];

  for (const element of allElements) {
    if ((reactantAtoms[element] || 0) !== (productAtoms[element] || 0)) {
      unbalancedElements.push(element);
    }
  }

  return {
    balanced: unbalancedElements.length === 0,
    reactantAtoms,
    productAtoms,
    unbalancedElements,
  };
}

/**
 * Format atom counts for display
 * Example: {H: 4, O: 2} -> "4 H, 2 O"
 */
export function formatAtomCounts(atoms: AtomCount): string {
  return Object.entries(atoms)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([element, count]) => `${count} ${element}`)
    .join(', ');
}
