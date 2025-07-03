import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleFAQ = (element) => {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = faqItem.querySelector('.faq-arrow svg');
    
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
    
    if (isOpen) {
      answer.style.maxHeight = '0px';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      arrow.style.transform = 'rotate(180deg)';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="rotate-180">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              CodiGo
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/signin"
                className="px-6 py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Log in
              </Link>
              <Link 
                to="/signup"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xl text-gray-300 mb-4">Welcome to</p>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
                CODIGO
              </h1>
            </div>
            
            <div className="mb-12">
              <p className="text-xl text-gray-300 mb-2">
                AI-powered competitive coding platform where you can practice, compete
              </p>
              <p className="text-xl text-gray-300">
                with developers, get real-time feedback, and optimize code efficiently.
              </p>
            </div>
            
            <div className="mb-16">
              <Link 
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Let's dive in →
              </Link>
            </div>
          </div>
          
          {/* Floating Globe/Dashboard Image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-20">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Practice & Compete</h3>
                <p className="text-gray-300">
                  Solve coding challenges across multiple difficulty levels and compete with developers worldwide.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Assistance</h3>
                <p className="text-gray-300">
                  Get real-time hints, explanations, and code optimization suggestions from our advanced AI.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
                <p className="text-gray-300">
                  Monitor your coding journey with detailed analytics and performance insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor" className="mr-3">
                <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z"/>
              </svg>
              <h2 className="text-4xl font-bold">MEET THE TEAM</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Vikash<br />Gupta</h3>
                </div>
                <div className="text-gray-300 mb-6">
                  <p>Delivers intuitive <span className="text-blue-400 font-semibold">user experiences</span> through clean, scalable frontend development</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Rajbeer<br />Saha</h3>
                </div>
                <div className="text-gray-300 mb-6">
                  <p>Implements accessible, <span className="text-purple-400 font-semibold">high quality</span> interfaces using modern frontend development practices</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/pixelpioneer404" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Archisman<br />Pal</h3>
                </div>
                <div className="text-gray-300 mb-6">
                  <p>Builds secure, efficient <span className="text-green-400 font-semibold">APIs</span> with a focus on <span className="text-green-400 font-semibold">performance</span>, scalability, and long-term maintainability</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6">Why Us?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Empowering developers with intelligent tools<br />for faster, smarter coding.
                </p>
                <a href="#faq" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                  FAQs →
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                <p className="text-gray-300">
                  AI-powered coding assistance that boosts productivity, simplifies debugging, and accelerates development — all in one intuitive platform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions (FAQs)</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is CodiGo and how does it help developers?",
                  answer: "CodiGo is an AI-powered competitive coding platform that helps developers practice, compete, and improve their coding skills with real-time feedback and intelligent assistance."
                },
                {
                  question: "How does the AI coding assistant work?",
                  answer: "It analyzes your code in real-time, suggests completions, catches bugs, and explains errors — helping you write cleaner code faster and with more confidence."
                },
                {
                  question: "Which programming languages and frameworks are supported?",
                  answer: "We support a wide range of popular languages like C, C++, Python and Java, more languages are coming soon."
                },
                {
                  question: "Is my code and data secure on this platform?",
                  answer: "Yes. We prioritize security with encrypted data handling, strict access controls, and no code sharing without your consent. Your work remains private and protected."
                },
                {
                  question: "Can beginners use this platform effectively?",
                  answer: "Absolutely. The interface is beginner-friendly, and the AI provides contextual guidance that makes it easier to learn and grow while building real-world projects."
                },
                {
                  question: "Does the platform integrate with popular development tools or IDEs?",
                  answer: "Yes. We offer seamless integration with tools like VS Code, GitHub, and other essential parts of your development workflow."
                }
              ].map((faq, index) => (
                <div key={index} className="faq-item bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
                  <div 
                    className="faq-question p-6 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-all duration-300"
                    onClick={(e) => toggleFAQ(e.target)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="faq-arrow ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="transition-transform duration-300">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
                    <div className="p-6 pt-0">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com/" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com/" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
          </div>
          <div className="text-gray-400">
            <p>&copy; 2025 All rights reserved.</p>
            <p>Alpha Coders</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
