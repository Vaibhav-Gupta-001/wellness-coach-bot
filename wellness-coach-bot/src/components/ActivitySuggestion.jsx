import { motion } from 'framer-motion';

/**
 * ActivitySuggestion Component - Displays suggested coping activities
 */
export default function ActivitySuggestion({ activity, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 
        dark:to-slate-600 rounded-xl p-4 border border-blue-200 dark:border-slate-500
        hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{activity.emoji}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100">
            {activity.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            {activity.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
