import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-white hover:text-blue-400 transition-colors">
            CodiGo
          </Link>
          <p className="text-gray-300 mt-2">Welcome back! Sign in to continue your coding journey.</p>
        </div>

        {/* Clerk Sign In Component */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <ClerkSignIn 
            routing="path"
            path="/signin"
            redirectUrl="/dashboard"
            signUpUrl="/signup"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
                card: 'bg-transparent shadow-none',
                headerTitle: 'text-white text-2xl font-bold',
                headerSubtitle: 'text-gray-300',
                socialButtonsBlockButton: 'bg-white/10 border border-white/20 text-white hover:bg-white/20',
                formFieldLabel: 'text-gray-300',
                formFieldInput: 'bg-white/10 border border-white/20 text-white placeholder:text-gray-400',
                footerActionLink: 'text-blue-400 hover:text-blue-300'
              }
            }}
          />
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
              Sign up
            </Link>
          </p>
          <div className="mt-4">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
