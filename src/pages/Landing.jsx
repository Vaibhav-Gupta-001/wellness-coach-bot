import { Link } from 'react-router-dom';
import { ArrowRight, Heart, TrendingUp, Lightbulb, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Landing Page - Hero section, features, and call to action
 */
export default function Landing() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Journal Safely',
      description: 'Write freely and express yourself in a secure, private space.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Track Your Mood',
      description: 'Monitor your emotional patterns over time with visual insights.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'AI Guidance',
      description: 'Get empathetic, supportive responses tailored to your mood.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Wellness Tips',
      description: 'Discover coping strategies and mental health resources.',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100
        dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                bg-clip-text text-transparent">
                Your Wellness Journey
              </span>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4">
              💙 AI-Powered Journaling for Mental Health & Emotional Awareness
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Wellness Coach Bot is your compassionate AI companion. Express yourself through journaling,
            discover your emotional patterns, and receive personalized, supportive guidance—all in a
            safe, private space. Your mental health journey starts here.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/journal"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold
                rounded-xl hover:opacity-90 transition-all transform hover:scale-105
                shadow-lg"
            >
              Start Journaling Now
              <ArrowRight size={20} />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4
                border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold
                rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
            >
              Learn More
            </a>
          </motion.div>
          
          {/* Hero Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden
              shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200
              dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💙</div>
                <p className="text-slate-600 dark:text-slate-300 font-semibold">
                  Your Safe Space for Emotional Wellness
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Features Built for Your Wellness
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to understand yourself better and nurture your mental health.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700
                  dark:to-slate-600 rounded-xl p-6 border border-blue-200 dark:border-slate-500
                  hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50
        dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              How It Works
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Write Your Journal Entry',
                description: 'Express yourself freely. Share your thoughts, feelings, and experiences.',
              },
              {
                step: '2',
                title: 'AI Analyzes Your Mood',
                description: 'Advanced sentiment analysis detects your emotional state and mood.',
              },
              {
                step: '3',
                title: 'Receive Support & Guidance',
                description: 'Get personalized, empathetic responses and coping strategies.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-slate-700 rounded-xl p-8 text-center
                  shadow-md h-full border-t-4 border-blue-600">
                  <div className="text-5xl font-bold text-blue-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
                
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={32} className="text-blue-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600
            text-white rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Start journaling today and discover the power of self-reflection combined with compassionate AI support.
          </p>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600
              font-bold rounded-xl hover:bg-slate-100 transition-all transform hover:scale-105"
          >
            Start Journaling
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
