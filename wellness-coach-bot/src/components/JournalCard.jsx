import MoodBadge from './MoodBadge';
import { deleteJournalEntry } from '../utils/storage';

/**
 * JournalCard Component - Displays a single journal entry
 */
export default function JournalCard({ entry, onDelete }) {
  const date = new Date(entry.timestamp);
  const dateStr = date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  const timeStr = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  
  // Truncate text to 100 characters
  const snippet = entry.text.length > 100 
    ? entry.text.substring(0, 100) + '...' 
    : entry.text;
  
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this entry?')) {
      deleteJournalEntry(entry.id);
      onDelete?.(entry.id);
    }
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg
      transition-all border border-slate-200 dark:border-slate-700">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            {dateStr} at {timeStr}
          </p>
        </div>
        <button
          onClick={handleDelete}
          className="text-slate-400 hover:text-red-500 transition-colors p-1"
          aria-label="Delete entry"
        >
          ✕
        </button>
      </div>
      
      <div className="mb-3">
        <MoodBadge mood={entry.mood} size="sm" />
      </div>
      
      <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-2 mb-3">
        {snippet}
      </p>
      
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-500 dark:text-slate-400">
          Wellness: <span className="font-semibold">{entry.wellnessScore}/100</span>
        </span>
        <span className="text-slate-400">
          {entry.text.split(/\s+/).length} words
        </span>
      </div>
    </div>
  );
}
