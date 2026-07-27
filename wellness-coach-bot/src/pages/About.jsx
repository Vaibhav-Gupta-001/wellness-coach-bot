import { motion } from 'framer-motion';
import { Target, Lightbulb, Code, Zap, Users } from 'lucide-react';

/**
 * About Page - Problem statement, objectives, technology, and future scope
 */
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
            About Wellness Coach Bot
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building better mental health support through AI and compassion
          </p>
        </motion.div>
        
        {/* Problem Statement */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900
              dark:to-rose-900 rounded-2xl p-8 shadow-lg border border-red-200
              dark:border-red-700"
          >
            <h2 className="text-3xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-3">
              <Zap size={32} />
              The Problem
            </h2>
            <p className="text-lg text-red-700 dark:text-red-300 mb-4 leading-relaxed">
              <strong>Youth Mental Health Crisis:</strong> Globally, mental health issues among youth are rising,
              with suicide being a leading cause of death for young people. Many struggle silently without access
              to immediate mental health support or someone to talk to.
            </p>
            <p className="text-lg text-red-700 dark:text-red-300 leading-relaxed">
              <strong>SDG 3 - Good Health and Well-being:</strong> This app aligns with the UN Sustainable
              Development Goal 3, which aims to ensure healthy lives and promote well-being for all at all ages,
              with a focus on mental health.
            </p>
          </motion.div>
        </motion.section>
        
        {/* Objectives */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center flex items-center
            justify-center gap-3">
            <Target size={32} className="text-blue-600" />
            Our Objectives
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '💙 Provide Emotional Support',
                description:
                  'Offer a safe, judgment-free space for youth to express their feelings and receive compassionate responses.',
              },
              {
                title: '🎯 Detect Mental Health Risks',
                description:
                  'Use AI sentiment analysis to identify concerning patterns and provide early intervention resources.',
              },
              {
                title: '📊 Track Emotional Patterns',
                description:
                  'Help users understand their mood trends, triggers, and progress over time through data visualization.',
              },
              {
                title: '🆘 Prevent Suicide',
                description:
                  'Implement safety mechanisms to detect high-risk language and connect users with emergency mental health resources.',
              },
              {
                title: '🌱 Promote Wellness',
                description:
                  'Provide coping strategies, mindfulness exercises, and mental health tips for daily well-being.',
              },
              {
                title: '🔒 Ensure Privacy',
                description:
                  'Guarantee complete data privacy with local storage, no backend servers, and no sharing of personal information.',
              },
            ].map((obj, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md
                  border border-slate-200 dark:border-slate-700 hover:shadow-lg
                  transition-all"
              >
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {obj.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {obj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Technology Stack */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center flex items-center
            justify-center gap-3">
            <Code size={32} className="text-blue-600" />
            Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: '🎨 Frontend',
                techs: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
              },
              {
                category: '📊 Data & Storage',
                techs: ['Browser localStorage', 'Recharts', 'Vader Sentiment'],
              },
              {
                category: '🛠️ Tools & Libraries',
                techs: ['React Router', 'Lucide Icons', 'JavaScript ES6+'],
              },
              {
                category: '☁️ Deployment',
                techs: ['Vercel', 'Zero configuration', 'Static hosting'],
              },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-indigo-50
                  dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 shadow-md
                  border border-blue-200 dark:border-slate-500"
              >
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.techs.map((t, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-200 flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* AI Workflow */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg
            border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center flex items-center
            justify-center gap-3">
            <Lightbulb size={32} className="text-blue-600" />
            AI Workflow Explanation
          </h2>
          
          <div className="space-y-6">
            {[
              {
                step: '1️⃣',
                title: 'Journal Entry Input',
                desc: 'User writes their thoughts and feelings in the journal textarea.',
              },
              {
                step: '2️⃣',
                title: 'Safety Detection',
                desc: 'App checks for high-risk keywords related to suicidal ideation or self-harm. If detected, displays critical safety alert with helpline numbers.',
              },
              {
                step: '3️⃣',
                title: 'Sentiment Analysis',
                desc: 'Uses Vader Sentiment analyzer to compute sentiment scores (compound, positive, neutral, negative).',
              },
              {
                step: '4️⃣',
                title: 'Mood Detection',
                desc: 'Combines sentiment scores with keyword matching to classify mood into: Happy, Neutral, Sad, Anxious, Stressed, Angry, Lonely, or Depressed.',
              },
              {
                step: '5️⃣',
                title: 'Wellness Scoring',
                desc: 'Calculates wellness score (0-100) based on sentiment compound score. Higher compound = higher wellness.',
              },
              {
                step: '6️⃣',
                title: 'Supportive Response',
                desc: 'Generates empathetic AI response from pre-written templates tailored to the detected mood.',
              },
              {
                step: '7️⃣',
                title: 'Activity Suggestions',
                desc: 'Recommends 2-3 coping activities (meditation, breathing, walking, etc.) based on mood.',
              },
              {
                step: '8️⃣',
                title: 'Data Persistence',
                desc: 'Saves entry to browser localStorage with timestamp, mood, wellness score, and sentiment data.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 pb-6 border-b border-slate-200 dark:border-slate-700
                  last:border-b-0"
              >
                <div className="text-3xl flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Future Scope */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-purple-50 to-indigo-50
            dark:from-purple-900 dark:to-indigo-900 rounded-2xl p-8 shadow-lg
            border border-purple-200 dark:border-purple-700"
        >
          <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-8 text-center
            flex items-center justify-center gap-3">
            <Users size={32} />
            Future Scope & Roadmap
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '🔗 Backend Integration',
                desc: 'Connect with a secure backend for user authentication, cloud data sync, and account recovery.',
              },
              {
                title: '🤖 Advanced AI',
                desc: 'Integrate with GPT/LLM APIs for more nuanced, context-aware supportive responses.',
              },
              {
                title: '👨‍⚕️ Professional Support',
                desc: 'Partner with licensed therapists to provide professional mental health consultation.',
              },
              {
                title: '📱 Mobile App',
                desc: 'Develop iOS and Android apps for on-the-go journaling and mood tracking.',
              },
              {
                title: '👥 Community Features',
                desc: 'Add peer support groups, community forums, and moderated safe spaces for sharing.',
              },
              {
                title: '🔔 Smart Notifications',
                desc: 'Personalized reminders for journaling, meditation, and check-ins based on user preferences.',
              },
              {
                title: '🎯 Predictive Analytics',
                desc: 'Machine learning to predict mental health risks and suggest proactive interventions.',
              },
              {
                title: '🌍 Multi-language Support',
                desc: 'Expand to support multiple languages and regional mental health resources.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md
                  border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Commitment */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white
            rounded-2xl p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg opacity-95 max-w-2xl mx-auto leading-relaxed">
            We are committed to building a compassionate, accessible, and safe mental health support platform
            that empowers youth to understand themselves better and access the help they need. Mental health is
            not a luxury—it\'s a fundamental right. We\'re here to support that journey.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
