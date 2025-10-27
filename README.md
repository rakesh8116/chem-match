# Chem-Match 🧪

A gamified chemistry learning platform that makes balancing chemical equations fun and interactive! Master chemistry through play with beautiful animations, progressive levels, and achievement tracking.

![Chemistry Game](https://img.shields.io/badge/Chemistry-Interactive-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite)

## Features

### 🎮 Interactive Gameplay
- **Equation Balancing Playground**: Practice with 5 chemical equations from beginner to advanced
- **Real-time Validation**: Instant feedback on your solutions
- **Hint System**: Get helpful tips when you're stuck (costs electron credits)
- **Progress Tracking**: Monitor your equations balanced, perfect balances, and streaks

### 📊 Progression System
- **12 Levels**: Progress through Chemistry Basics to Master Challenge
- **4 Difficulty Tiers**: Beginner, Intermediate, Advanced, and Expert
- **Star Ratings**: Earn up to 3 stars per level based on performance
- **XP & Leveling**: Gain experience points and unlock new content

### 🏆 Achievements
- **12 Achievements**: From "First Steps" to "Legendary Chemist"
- **Category-based**: Organized by difficulty level
- **Progress Bars**: Track your progress towards each achievement
- **Rewards**: Earn XP and points for unlocking achievements

### 🔬 Educational Content
- **Interactive Periodic Table**: Explore 36 elements with detailed information
- **Color-coded Categories**: Alkali metals, noble gases, halogens, and more
- **Element Details**: View atomic number, mass, and category information
- **Comprehensive Tutorial**: 5-step guide teaching equation balancing from scratch

### ⚙️ Customization
- **Audio Settings**: Toggle sound effects and music with volume control
- **Difficulty Levels**: Easy, Normal, or Hard gameplay
- **Animation Control**: Full, Reduced, or None
- **Theme Options**: Default, Blue, Purple, or Green
- **Multi-language Support**: English, Spanish, French, German, Chinese

### 📈 Player Stats
- Equations Balanced
- Perfect Balances
- Current Streak
- Best Streak
- Total XP
- Proton Points, Electron Credits, Neutron Nuggets

## Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.0
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **State Management**: Zustand with persist middleware
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript ESLint

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/rakesh8116/chem-match.git
cd chem-match
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
chem-match/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components (Header, Footer, etc.)
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── PlaygroundPage.tsx
│   │   ├── LevelsPage.tsx
│   │   ├── AchievementsPage.tsx
│   │   ├── PeriodicTablePage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── TutorialPage.tsx
│   ├── store/             # Zustand state management
│   │   └── gameStore.ts
│   ├── types/             # TypeScript type definitions
│   │   └── chemistry.ts
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # TailwindCSS configuration
```

## Pages Overview

### Home Page
Landing page with hero section, player stats, and feature highlights

### Playground
Interactive equation balancing with 5 practice equations, hints, and real-time validation

### Levels
12 progressive levels with unlock requirements and star ratings

### Achievements
Track your progress with 12 achievements across 4 difficulty categories

### Periodic Table
Explore 36 elements with interactive cards and detailed information

### Settings
Customize audio, gameplay, appearance, and language preferences

### Tutorial
5-step interactive guide teaching chemical equation balancing

## Game Mechanics

### Balancing Equations
1. Adjust the coefficient numbers in front of each molecule
2. Ensure equal numbers of each atom type on both sides
3. Click "Check Solution" to validate your answer
4. Earn XP and points for correct solutions

### Progression
- Complete equations to earn XP
- Level up to unlock new content
- Build streaks for bonus rewards
- Achieve perfect balances for extra points

### Currency System
- **Proton Points**: General currency
- **Electron Credits**: Used for hints
- **Neutron Nuggets**: Special rewards

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with React and modern web technologies
- Chemical data based on standard periodic table information
- Icons by Lucide React
- Animations powered by Framer Motion

## Author

**Ruhan Singh**
MYP3 Student, One World International School
Whitefield, Bangalore, India

Created as an IB school project to make chemistry learning fun and interactive!

## Contact

GitHub: [@rakesh8116](https://github.com/rakesh8116)
Project Link: [https://github.com/rakesh8116/chem-match](https://github.com/rakesh8116/chem-match)

## Credits

- **Developer**: Ruhan Singh (13 years old)
- **School**: One World International School, Whitefield, Bangalore
- **Program**: IB MYP3 (Middle Years Programme, Year 3)
- **Project Type**: School Chemistry Project
- **Year**: 2025

---

Made with ⚛️ and 💙 for chemistry education by a passionate student developer!