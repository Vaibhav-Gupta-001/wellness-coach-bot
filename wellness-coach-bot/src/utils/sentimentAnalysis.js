// Sentiment Analysis using vader-sentiment
import vader from 'vader-sentiment';

/**
 * Analyzes text sentiment and returns compound score
 * Compound score ranges from -1 (most negative) to +1 (most positive)
 */
export const analyzeSentiment = (text) => {
  if (!text || text.trim().length === 0) {
    return { compound: 0, positive: 0, neutral: 1, negative: 0 };
  }
  
  try {
    const scores = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    return scores;
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    return { compound: 0, positive: 0, neutral: 1, negative: 0 };
  }
};

/**
 * Maps compound sentiment score to mood category
 * Compound: -1 to 1
 */
export const detectMood = (text, sentimentScores) => {
  const { compound } = sentimentScores;
  
  // Keyword matching for more nuanced mood detection
  const lowerText = text.toLowerCase();
  
  const moodKeywords = {
    happy: ['happy', 'joy', 'excited', 'wonderful', 'amazing', 'great', 'fantastic', 'love', 'beautiful', 'blessed'],
    anxious: ['anxious', 'worried', 'nervous', 'stressed', 'tension', 'tense', 'fear', 'afraid'],
    stressed: ['stress', 'overwhelmed', 'pressure', 'burden', 'exhausted', 'tired'],
    angry: ['angry', 'furious', 'rage', 'mad', 'irritated', 'frustrated', 'annoyed'],
    lonely: ['lonely', 'alone', 'isolated', 'disconnected', 'abandoned'],
    depressed: ['depressed', 'hopeless', 'worthless', 'despair', 'dark', 'numb', 'empty'],
  };
  
  // Count keyword matches
  const moodScores = {};
  for (const [mood, keywords] of Object.entries(moodKeywords)) {
    moodScores[mood] = keywords.filter(kw => lowerText.includes(kw)).length;
  }
  
  // Determine mood based on sentiment score and keywords
  const maxKeywordScore = Math.max(...Object.values(moodScores));
  
  if (maxKeywordScore > 0) {
    // If strong keyword matches, use that
    for (const [mood, score] of Object.entries(moodScores)) {
      if (score === maxKeywordScore) {
        return mood;
      }
    }
  }
  
  // Otherwise, use sentiment compound score
  if (compound > 0.5) return 'happy';
  if (compound > 0.1) return 'neutral';
  if (compound > -0.2) return 'neutral';
  if (compound > -0.5) return 'sad';
  if (compound > -0.7) return 'anxious';
  return 'depressed';
};

/**
 * Calculates wellness score (0-100) based on sentiment
 * Higher compound score = higher wellness
 */
export const calculateWellnessScore = (compound) => {
  // Convert compound (-1 to 1) to wellness score (0 to 100)
  const score = Math.round(((compound + 1) / 2) * 100);
  return Math.max(0, Math.min(100, score));
};

/**
 * Get mood color for UI display
 */
export const getMoodColor = (mood) => {
  const colors = {
    happy: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    neutral: 'bg-blue-100 text-blue-800 border-blue-300',
    sad: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    anxious: 'bg-orange-100 text-orange-800 border-orange-300',
    stressed: 'bg-red-100 text-red-800 border-red-300',
    angry: 'bg-red-200 text-red-900 border-red-400',
    lonely: 'bg-purple-100 text-purple-800 border-purple-300',
    depressed: 'bg-slate-200 text-slate-800 border-slate-400',
    hopeless: 'bg-slate-300 text-slate-900 border-slate-500',
  };
  return colors[mood] || colors.neutral;
};

/**
 * Get emoji for mood
 */
export const getMoodEmoji = (mood) => {
  const emojis = {
    happy: '😊',
    neutral: '😐',
    sad: '😢',
    anxious: '😰',
    stressed: '😟',
    angry: '😠',
    lonely: '😔',
    depressed: '😞',
    hopeless: '💔',
  };
  return emojis[mood] || '😐';
};
