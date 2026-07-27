import { motion } from 'framer-motion';

/**
 * SafetyAlert Component - Critical warning for suicidal/self-harm language
 */
export default function SafetyAlert({ content }) {
  if (!content) return null;
  
  const resources = content.resources || [];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-50 dark:bg-red-900 border-2 border-red-400 rounded-2xl p-6 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">❤️</div>
        <div>
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-200">
            {content.title}
          </h2>
          <p className="text-red-600 dark:text-red-300 font-semibold mt-1">
            {content.message}
          </p>
        </div>
      </div>
      
      {/* Action Items */}
      <div className="bg-red-100 dark:bg-red-800 rounded-xl p-4 mb-4">
        <p className="font-bold text-red-800 dark:text-red-100 mb-3">
          Take these steps now:
        </p>
        <ul className="space-y-2">
          {content.actionItems?.map((item, idx) => (
            <li key={idx} className="text-red-700 dark:text-red-200 flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Emergency Helplines */}
      <div className="mb-4">
        <p className="font-bold text-red-800 dark:text-red-100 mb-3">
          📞 Emergency Mental Health Helplines:
        </p>
        <div className="space-y-2">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-700 rounded-lg p-3 border-l-4 border-red-400"
            >
              <p className="font-semibold text-red-700 dark:text-red-200">
                {resource.name}: <span className="text-lg font-bold">{resource.number}</span>
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Important Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700
        rounded-lg p-3">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>⚠️ Important:</strong> This AI chatbot is <strong>NOT a substitute for professional mental health care.</strong>
          If you're experiencing suicidal thoughts or self-harm urges, please reach out to a mental health professional,
          crisis counselor, or emergency services immediately.
        </p>
      </div>
      
      {/* Additional Support */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-300 dark:border-blue-700">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>You are not alone.</strong> There are people who care about you and want to help.
          Your life has value, and there are always other options available.
        </p>
      </div>
    </motion.div>
  );
}
