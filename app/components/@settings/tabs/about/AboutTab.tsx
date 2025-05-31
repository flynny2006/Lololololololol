import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '~/utils/classNames';

export default function AboutTab() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* AI Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={classNames(
            'p-6 rounded-2xl',
            'bg-white/50 dark:bg-gray-800/50',
            'border border-red-100 dark:border-red-800/50',
            'backdrop-blur-sm',
            'shadow-lg shadow-red-500/5',
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">AI Software Engineer</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your intelligent coding companion</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <div className="i-ph:robot w-6 h-6 text-red-500" />
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="i-ph:spinner-gap w-8 h-8 text-red-500 animate-spin" />
            </div>
          ) : (
            <div className="space-y-6">
              {/* AI Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={classNames(
                    'p-4 rounded-xl',
                    'bg-red-50 dark:bg-red-900/20',
                    'border border-red-100 dark:border-red-800/50',
                  )}
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Key Features</div>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="i-ph:check-circle w-4 h-4 text-green-500 mr-2" />
                      Full-stack development expertise
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="i-ph:check-circle w-4 h-4 text-green-500 mr-2" />
                      Modern UI/UX implementation
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="i-ph:check-circle w-4 h-4 text-green-500 mr-2" />
                      Real-time code assistance
                    </li>
                  </ul>
                </div>
                <div
                  className={classNames(
                    'p-4 rounded-xl',
                    'bg-gray-50 dark:bg-gray-800/50',
                    'border border-gray-200 dark:border-gray-700/50',
                  )}
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Best Practices</div>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="i-ph:check-circle w-4 h-4 text-green-500 mr-2" />
                      Clean code principles
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="i-ph:check-circle w-4 h-4 text-green-500 mr-2" />
                      Security-first approach
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <div className="i-ph:check-circle w-4 h-4 text-green-500 mr-2" />
                      Performance optimization
                    </li>
                  </ul>
                </div>
              </div>

              {/* Usage Guide */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">How to Use</span>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50">
                  <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 mr-3 flex-shrink-0">1</span>
                      <span>Describe your coding task or problem in natural language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 mr-3 flex-shrink-0">2</span>
                      <span>The AI will analyze your request and provide a solution with explanations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 mr-3 flex-shrink-0">3</span>
                      <span>Review the code, ask for modifications, or request additional features</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Special Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={classNames(
            'p-6 rounded-2xl',
            'bg-white/50 dark:bg-gray-800/50',
            'border border-red-100 dark:border-red-800/50',
            'backdrop-blur-sm',
            'shadow-lg shadow-red-500/5',
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Special Features</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">What makes our AI unique</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
              <div className="i-ph:sparkle w-6 h-6 text-purple-500" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 border border-red-100 dark:border-red-800/50">
                <div className="flex items-center mb-2">
                  <div className="i-ph:code w-5 h-5 text-red-500 mr-2" />
                  <h3 className="font-medium text-gray-900 dark:text-white">Smart Code Generation</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generates clean, efficient, and well-documented code following best practices and modern standards.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-100 dark:border-purple-800/50">
                <div className="flex items-center mb-2">
                  <div className="i-ph:lightbulb w-5 h-5 text-purple-500 mr-2" />
                  <h3 className="font-medium text-gray-900 dark:text-white">Intelligent Problem Solving</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Understands complex requirements and provides innovative solutions with detailed explanations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 