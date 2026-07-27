import { getMoodColor, getMoodEmoji } from '../utils/sentimentAnalysis';

/**
 * MoodBadge Component - Displays mood with emoji and color
 */
export default function MoodBadge({ mood, size = 'md' }) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };
  
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium transition-all
        ${getMoodColor(mood)} ${sizeClasses[size]}`}
    >
      <span>{getMoodEmoji(mood)}</span>
      <span className="capitalize">{mood}</span>
    </span>
  );
}
