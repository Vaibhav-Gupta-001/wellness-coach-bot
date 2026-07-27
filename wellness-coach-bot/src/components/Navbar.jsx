import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Navbar Component - Navigation and theme toggle
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('wellness_theme') || 'light';
    const isDarkMode = stored === 'dark';
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);
  
  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('wellness_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('wellness_theme', 'light');
    }
  };
  
  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    updateTheme(newDark);
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/journal' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-md z-50
      border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r 
              from-blue-600 to-indigo-600 bg-clip-text text-transparent
              hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">💙</span>
            <span>Wellness Coach</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-200
                  hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700
                hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-slate-700 dark:text-slate-200" />
              ) : (
                <Menu size={24} className="text-slate-700 dark:text-slate-200" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-200
                  hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
