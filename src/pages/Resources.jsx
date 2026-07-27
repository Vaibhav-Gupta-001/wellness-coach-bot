import { motion } from 'framer-motion';
import { AlertCircle, Heart, Lightbulb, Phone } from 'lucide-react';
import BreathingExercise from '../components/BreathingExercise';

/**
 * Resources Page - Mental health tips, breathing exercises, and helplines
 */
export default function Resources() {
  const tips = [
    {
      title: '🧘 Practice Mindfulness',
      description: 'Spend 5-10 minutes daily being present. Notice your thoughts without judgment.',
    },
    {
      title: '💤 Prioritize Sleep',
      description: 'Aim for 7-9 hours of quality sleep. Create a consistent sleep schedule.',
    },
    {
      title: '🏃 Move Your Body',
      description: 'Exercise releases endorphins. Even a 20-minute walk can improve mood.',
    },
    {
      title: '🍎 Eat Mindfully',
      description: 'Nourish your body with whole foods. Avoid excessive caffeine and sugar.',
    },
    {
      title: '🤝 Connect with Others',
      description: 'Reach out to friends, family, or support groups. Connection is healing.',
    },
    {
      title: '📚 Learn & Grow',
      description: 'Read, listen to podcasts, or take courses that inspire you.',
    },
    {
      title: '🎵 Enjoy Music',
      description: 'Listen to music that uplifts you. Create a personal wellness playlist.',
    },
    {
      title: '🌿 Spend Time in Nature',
      description: 'Nature reduces stress and improves mental clarity. Go outside regularly.',
    },
  ];
  
  const faqs = [
    {
      q: 'Is my data private?',
      a: 'Yes! All your journal entries are stored locally in your browser. No data is sent to any server or stored in the cloud.',
    },
    {
      q: 'Can I export my entries?',
      a: 'Currently, entries are stored in your browser\'s localStorage. You can view them all in the Dashboard and take screenshots as needed.',
    },
    {
      q: 'What if I have suicidal thoughts?',
      a: 'Please reach out for help immediately. Contact iCall (9152987821), Vandrevala Foundation (1860-266-2345), or KIRAN (1800-599-0019). Talk to a trusted friend or family member.',
    },
    {
      q: 'Is this app a substitute for therapy?',
      a: 'No. This app is a supportive tool, not a replacement for professional mental health care. Please seek professional help if you\'re struggling.',
    },
    {
      q: 'How often should I journal?',
      a: 'Journaling frequency is personal. Some people benefit from daily entries, others prefer weekly. Find what works best for you.',
    },
    {
      q: 'Can I clear my data?',
      a: 'Yes. You can manually delete individual entries from the Dashboard. To clear all data, clear your browser\'s localStorage for this site.',
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
    <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50
      dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            🌟 Wellness Resources
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tools, tips, and support for your mental health journey
          </p>
        </motion.div>
        
        {/* Emergency Helplines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-red-50 dark:bg-red-900 rounded-2xl p-8 border-2 border-red-300
            dark:border-red-700 shadow-lg"
        >
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="text-red-600 dark:text-red-300 flex-shrink-0 mt-1" size={28} />
            <div>
              <h2 className="text-2xl font-bold text-red-700 dark:text-red-200 mb-2">
                In Crisis? Get Help Now
              </h2>
              <p className="text-red-600 dark:text-red-300">
                If you\'re experiencing suicidal thoughts or self-harm urges, please reach out immediately.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'iCall',
                number: '9152987821',
                desc: 'Emotional support & suicide prevention',
              },
              {
                name: 'Vandrevala Foundation',
                number: '1860-266-2345',
                desc: 'Mental health crisis management',
              },
              {
                name: 'KIRAN',
                number: '1800-599-0019',
                desc: 'Ministry of Social Justice helpline',
              },
            ].map((helpline, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-red-500"
              >
                <h3 className="font-bold text-red-700 dark:text-red-200 mb-1">
                  {helpline.name}
                </h3>
                <p className="text-2xl font-bold text-red-600 dark:text-red-300 mb-2">
                  <Phone className="inline mr-2" size={24} />
                  {helpline.number}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {helpline.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Breathing Exercise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg
            border border-slate-200 dark:border-slate-700"
        >
          <BreathingExercise />
        </motion.section>
        
        {/* Mental Health Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            💡 Daily Wellness Tips
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tips.map((tip, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md
                  border border-slate-200 dark:border-slate-700 hover:shadow-lg
                  transition-all"
              >
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            ❓ Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200
                  dark:border-slate-700 shadow-md overflow-hidden group
                  hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-800
                  dark:text-slate-100 flex items-center justify-between hover:bg-slate-50
                  dark:hover:bg-slate-700 transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180
                    transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700
                  bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </motion.section>
        
        {/* Important Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 border-2 border-blue-300
            dark:border-blue-700"
        >
          <div className="flex gap-4 mb-4">
            <Heart className="text-blue-600 dark:text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">
                A Message About Mental Health
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-3">
                Mental health is as important as physical health. If you\'re struggling, please know:
              </p>
              <ul className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                <li>✓ You are not alone in what you\'re feeling</li>
                <li>✓ There is no shame in seeking help</li>
                <li>✓ Professional help can make a real difference</li>
                <li>✓ This app is a supportive tool, not a replacement for therapy</li>
                <li>✓ Your life has value, and you matter</li>
              </ul>
              <p className="mt-4 text-blue-700 dark:text-blue-300 font-semibold">
                If you\'re in crisis, please reach out to a helpline or trusted person immediately.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
