import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ProblemSolver from './pages/ProblemSolver';
import EasyProblems from './pages/EasyProblems';
import IntermediateProblems from './pages/IntermediateProblems';
import AdvancedProblems from './pages/AdvancedProblems';
import RealWorldProjects from './pages/RealWorldProjects';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import './index.css';

const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected routes */}
            <Route path="/home" element={
              <SignedIn>
                <HomePage />
              </SignedIn>
            } />
            <Route path="/dashboard" element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            } />
            <Route path="/problems/easy" element={
              <SignedIn>
                <EasyProblems />
              </SignedIn>
            } />
            <Route path="/problems/intermediate" element={
              <SignedIn>
                <IntermediateProblems />
              </SignedIn>
            } />
            <Route path="/problems/advanced" element={
              <SignedIn>
                <AdvancedProblems />
              </SignedIn>
            } />
            <Route path="/projects" element={
              <SignedIn>
                <RealWorldProjects />
              </SignedIn>
            } />
            <Route path="/problem/:id" element={
              <SignedIn>
                <ProblemSolver />
              </SignedIn>
            } />
            <Route path="/project/:id" element={
              <SignedIn>
                <ProblemSolver />
              </SignedIn>
            } />
            <Route path="/problems" element={
              <SignedIn>
                <ProblemSolver />
              </SignedIn>
            } />
            <Route path="/leaderboard" element={
              <SignedIn>
                <Leaderboard />
              </SignedIn>
            } />
            
            {/* Redirect to signin if not authenticated */}
            <Route path="*" element={
              <SignedOut>
                <Navigate to="/signin" replace />
              </SignedOut>
            } />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
