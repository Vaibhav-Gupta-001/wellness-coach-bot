/**
 * LocalStorage Management for Journal Entries
 * Persists entries without backend/database
 */

const STORAGE_KEY = 'wellness_journal_entries';
const THEME_KEY = 'wellness_theme';

/**
 * Save journal entry to localStorage
 */
export const saveJournalEntry = (entry) => {
  try {
    const entries = getJournalEntries();
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...entry,
    };
    entries.push(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    return newEntry;
  } catch (error) {
    console.error('Error saving entry:', error);
    return null;
  }
};

/**
 * Get all journal entries from localStorage
 */
export const getJournalEntries = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving entries:', error);
    return [];
  }
};

/**
 * Get single journal entry by ID
 */
export const getJournalEntry = (id) => {
  const entries = getJournalEntries();
  return entries.find((e) => e.id === id);
};

/**
 * Delete journal entry
 */
export const deleteJournalEntry = (id) => {
  try {
    const entries = getJournalEntries();
    const filtered = entries.filter((e) => e.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting entry:', error);
    return false;
  }
};

/**
 * Get entries for a specific date
 */
export const getEntriesByDate = (date) => {
  const entries = getJournalEntries();
  const dateStr = new Date(date).toLocaleDateString();
  return entries.filter((e) => {
    const entryDate = new Date(e.timestamp).toLocaleDateString();
    return entryDate === dateStr;
  });
};

/**
 * Get entries for the last N days
 */
export const getEntriesLastDays = (days) => {
  const entries = getJournalEntries();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return entries.filter((e) => new Date(e.timestamp) >= cutoffDate);
};

/**
 * Calculate mood streak (consecutive non-negative mood days)
 */
export const calculatePositiveStreak = () => {
  const entries = getJournalEntries();
  if (entries.length === 0) return 0;
  
  // Sort by timestamp descending
  const sorted = [...entries].sort((a, b) => 
    new Date(b.timestamp) - new Date(a.timestamp)
  );
  
  const positiveMoods = ['happy', 'neutral'];
  let streak = 0;
  let currentDate = new Date();
  
  for (let i = 0; i < sorted.length; i++) {
    const entryDate = new Date(sorted[i].timestamp);
    const dayDifference = Math.floor(
      (currentDate - entryDate) / (1000 * 60 * 60 * 24)
    );
    
    // Break if there's a gap in days
    if (dayDifference > streak + 1) break;
    
    // Count if mood is positive
    if (positiveMoods.includes(sorted[i].mood)) {
      streak++;
    } else {
      break;
    }
    
    currentDate = entryDate;
  }
  
  return streak;
};

/**
 * Get current theme preference
 */
export const getTheme = () => {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch {
    return 'light';
  }
};

/**
 * Set theme preference
 */
export const setTheme = (theme) => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error('Error setting theme:', error);
  }
};

/**
 * Get mood statistics
 */
export const getMoodStats = (days = 7) => {
  const entries = getEntriesLastDays(days);
  const moodCounts = {};
  
  entries.forEach((entry) => {
    moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
  });
  
  return moodCounts;
};

/**
 * Get average wellness score
 */
export const getAverageWellnessScore = (days = 7) => {
  const entries = getEntriesLastDays(days);
  if (entries.length === 0) return 0;
  
  const sum = entries.reduce((acc, entry) => acc + (entry.wellnessScore || 0), 0);
  return Math.round(sum / entries.length);
};

/**
 * Get current wellness score (from latest entry)
 */
export const getCurrentWellnessScore = () => {
  const entries = getJournalEntries();
  if (entries.length === 0) return 0;
  
  const latest = entries[entries.length - 1];
  return latest.wellnessScore || 0;
};

/**
 * Clear all data (for testing/reset)
 */
export const clearAllData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};
