import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from '@/components/LoadingScreen';
import Layout from '@/components/Layout';

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const PlaygroundPage = lazy(() => import('@/pages/PlaygroundPage'));
const LevelsPage = lazy(() => import('@/pages/LevelsPage'));
const AchievementsPage = lazy(() => import('@/pages/AchievementsPage'));
const PeriodicTablePage = lazy(() => import('@/pages/PeriodicTablePage'));
const TutorialPage = lazy(() => import('@/pages/TutorialPage'));
const SettingsPage = lazy(() => import('@/pages/SettingsPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/play" element={<PlaygroundPage />} />
              <Route path="/levels" element={<LevelsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/periodic-table" element={<PeriodicTablePage />} />
              <Route path="/tutorial" element={<TutorialPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </Suspense>
        </Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </Router>
    </DndProvider>
  );
}

export default App;