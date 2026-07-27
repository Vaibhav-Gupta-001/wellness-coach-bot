import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MoodBadge from '../components/MoodBadge';
import JournalCard from '../components/JournalCard';
import WellnessScore from '../components/WellnessScore';
import {
  getJournalEntries,
  getCurrentWellnessScore,
  getAverageWellnessScore,
  calculatePositiveStreak,
  getMoodStats,
  getEntriesLastDays,
} from '../utils/storage';
import { getMoodColor } from '../utils/sentimentAnalysis';

/**
 * Dashboard Page - Analytics and mood tracking
 */
export default function Dashboard() {
  const [days, setDays] = useState(7);
  const [deletedId, setDeletedId] = useState(null);
  
  // Fetch all data
  const allEntries = useMemo(() => {
    return getJournalEntries();
  }, [deletedId]);
  
  const recentEntries = useMemo(() => {
    return getEntriesLastDays(days).sort((a, b) =>
      new Date(b.timestamp) - new Date(a.timestamp)
    );
  }, [days, deletedId]);
  
  const currentScore = useMemo(() => {
    return getCurrentWellnessScore();
  }, [allEntries]);
  
  const averageScore = useMemo(() => {
    return getAverageWellnessScore(days);
  }, [days, deletedId]);
  
  const positiveStreak = useMemo(() => {
    return calculatePositiveStreak();
  }, [allEntries]);
  
  const moodStats = useMemo(() => {
    return getMoodStats(days);
  }, [days, deletedId]);
  
  // Prepare chart data
  const moodChartData = useMemo(() => {
    return Object.entries(moodStats).map(([mood, count]) => ({
      name: mood.charAt(0).toUpperCase() + mood.slice(1),
      value: count,
      color: getMoodColor(mood),
    }));
  }, [moodStats]);
  
  const trendChartData = useMemo(() => {
    const entries = getEntriesLastDays(days);
    const grouped = {};
    
    entries.forEach((entry) => {
      const date = new Date(entry.timestamp).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(entry.wellnessScore);
    });
    
    return Object.entries(grouped)
      .map(([date, scores]) => ({
        date,
        average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [days, deletedId]);
  
  const colorMap = {
    happy: '#FCD34D',
    neutral: '#93C5FD',
    sad: '#A5F3FC',
    anxious: '#FED7AA',
    stressed: '#FCA5A5',
    angry: '#F87171',
    lonely: '#C084FC',
    depressed: '#CBD5E1',
  };
  
  const handleDeleteEntry = (id) => {
    setDeletedId(id);
  };
  
  if (allEntries.length === 0) {
    return (
      <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50
        dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              📊 Your Dashboard
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center shadow-lg
              border border-slate-200 dark:border-slate-700"
          >
            <div className="text-6xl mb-4">📔</div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              No entries yet
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
              Start your journaling journey to see mood tracking, wellness insights, and emotional patterns.
            </p>
            <a
              href="/journal"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Begin Journaling
            </a>
          </motion.div>
        </div>
      </div>
    );
  }
  
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
            📊 Your Wellness Dashboard
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Track your mood, wellness insights, and emotional patterns
          </p>
        </motion.div>
        
        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {/* Current Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border
              border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Current Score
            </p>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {currentScore}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Latest entry
            </p>
          </motion.div>
          
          {/* Average Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border
              border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
              {days}-Day Average
            </p>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {averageScore}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Wellness trend
            </p>
          </motion.div>
          
          {/* Total Entries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border
              border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Total Entries
            </p>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {allEntries.length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              All time
            </p>
          </motion.div>
          
          {/* Positive Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border
              border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Positive Streak
            </p>
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
              {positiveStreak}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Days
            </p>
          </motion.div>
        </div>
        
        {/* Time Period Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex gap-2 flex-wrap"
        >
          {[7, 14, 30].map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                days === d
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {d} Days
            </button>
          ))}
        </motion.div>
        
        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Wellness Trend */}
          {trendChartData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg
                border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
                📈 Wellness Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="date" stroke="#64748b" />
                  <YAxis stroke="#64748b" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="average"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          )}
          
          {/* Mood Distribution */}
          {moodChartData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg
                border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
                🎭 Mood Distribution ({days} days)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={moodChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {moodChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={Object.values(colorMap)[index % Object.values(colorMap).length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          )}
        </div>
        
        {/* Recent Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            📝 Recent Entries
          </h3>
          
          {recentEntries.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center
              border border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400">
                No entries in the selected period
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {recentEntries.map((entry, idx) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <JournalCard entry={entry} onDelete={handleDeleteEntry} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
