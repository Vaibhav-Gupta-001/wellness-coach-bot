import { Heart } from 'lucide-react';

/**
 * Footer Component
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💙</span>
              <span className="font-bold text-lg text-slate-800 dark:text-slate-100">
                Wellness Coach Bot
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              An AI-powered journaling app for mental wellness and emotional support.
              Detect mood, get supportive guidance, and track your wellbeing journey.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/journal" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Start Journaling
                </a>
              </li>
              <li>
                <a href="/resources" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4">
              In Crisis?
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                <strong>iCall:</strong> 9152987821
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <strong>Vandrevala:</strong> 1860-266-2345
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <strong>KIRAN:</strong> 1800-599-0019
              </p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 mb-6">
            <p className="text-xs text-blue-800 dark:text-blue-200">
              <strong>Disclaimer:</strong> This app is for supportive journaling only and is 
              <strong> NOT a substitute for professional mental healthcare.</strong> If you're experiencing 
              thoughts of self-harm or suicide, please reach out to a mental health professional or 
              contact one of the emergency helplines immediately.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
            <p className="flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> for mental wellness © {currentYear}
            </p>
            <p className="mt-4 md:mt-0">
              Committed to SDG 3: Good Health and Well-being
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
