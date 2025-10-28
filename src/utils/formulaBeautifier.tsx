import React from 'react';

/**
 * Converts chemical formulas like H2O to H₂O with proper subscripts
 * Also handles superscripts for charges
 */

export function beautifyFormula(formula: string): React.ReactNode {
  if (!formula) return null;

  const parts: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < formula.length) {
    const char = formula[i];

    if (char === '(') {
      // Handle parentheses
      parts.push(<span key={key++}>{char}</span>);
      i++;
    } else if (char === ')') {
      parts.push(<span key={key++}>{char}</span>);
      i++;
      // Check for number after parenthesis
      let subscript = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        subscript += formula[i];
        i++;
      }
      if (subscript) {
        parts.push(<sub key={key++}>{subscript}</sub>);
      }
    } else if (/[A-Z]/.test(char)) {
      // Element (starts with uppercase)
      let element = char;
      i++;

      // Check for lowercase (like Ca, Cl)
      while (i < formula.length && /[a-z]/.test(formula[i])) {
        element += formula[i];
        i++;
      }

      parts.push(<span key={key++}>{element}</span>);

      // Check for subscript number
      let subscript = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        subscript += formula[i];
        i++;
      }
      if (subscript) {
        parts.push(<sub key={key++}>{subscript}</sub>);
      }
    } else if (char === '^' || char === '+' || char === '-') {
      // Handle charges (superscript)
      let superscript = char;
      i++;
      while (i < formula.length && /[\d+-]/.test(formula[i])) {
        superscript += formula[i];
        i++;
      }
      parts.push(<sup key={key++} className="text-xs">{superscript}</sup>);
    } else {
      // Any other character
      parts.push(<span key={key++}>{char}</span>);
      i++;
    }
  }

  return <>{parts}</>;
}

/**
 * Component wrapper for beautified formulas
 */
export const BeautifiedFormula: React.FC<{ formula: string; className?: string }> = ({
  formula,
  className = ''
}) => {
  return (
    <span className={`font-mono ${className}`}>
      {beautifyFormula(formula)}
    </span>
  );
};
