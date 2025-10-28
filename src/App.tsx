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
              background: '#ffffff',
              color: '#1f2937',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: '600',
            },
            success: {
              duration: 3000,
              style: {
                border: '2px solid #10b981',
              },
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              style: {
                border: '2px solid #ef4444',
              },
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