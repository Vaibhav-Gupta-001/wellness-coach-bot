import { motion } from 'framer-motion';

/**
 * WellnessScore Component - Displays wellness score with circular progress
 */
export default function WellnessScore({ score = 0, size = 'lg' }) {
  const radius = size === 'sm' ? 35 : size === 'md' ? 45 : 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  
  // Determine color based on score
  let color = 'text-red-500';
  let bgColor = 'from-red-500 to-pink-500';
  
  if (score >= 70) {
    color = 'text-green-500';
    bgColor = 'from-green-500 to-emerald-500';
  } else if (score >= 50) {
    color = 'text-yellow-500';
    bgColor = 'from-yellow-500 to-orange-500';
  } else if (score >= 30) {
    color = 'text-orange-500';
    bgColor = 'from-orange-500 to-red-500';
  }
  
  const textSize = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  }[size];
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-fit">
        <svg width={radius * 2 + 20} height={radius * 2 + 20} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={radius + 10}
            cy={radius + 10}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-200 dark:text-slate-700"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={radius + 10}
            cy={radius + 10}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`${color} transition-colors`}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Score Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className={`font-bold ${textSize} ${color}`}>
              {Math.round(score)}
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              / 100
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`mt-4 font-semibold text-slate-600 dark:text-slate-400 text-sm`}
      >
        {score >= 70 ? '✨ Thriving' : score >= 50 ? '🌱 Growing' : score >= 30 ? '💙 Reflecting' : '🫂 Seeking Support'}
      </motion.p>
    </div>
  );
}
