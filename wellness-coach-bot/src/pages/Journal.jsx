import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import MoodBadge from '../components/MoodBadge';
import SafetyAlert from '../components/SafetyAlert';
import ActivitySuggestion from '../components/ActivitySuggestion';
import WellnessScore from '../components/WellnessScore';
import { analyzeSentiment, detectMood, calculateWellnessScore } from '../utils/sentimentAnalysis';
import { detectSafetyRisk, getSafetyAlertContent } from '../utils/safetyDetection';
import { getSupportiveResponse, getActivitySuggestions } from '../utils/supportiveResponse';
import { saveJournalEntry } from '../utils/storage';

/**
 * Journal Page - Main journaling interface with mood detection
 */
export default function Journal() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showSafetyAlert, setShowSafetyAlert] = useState(false);
  const textareaRef = useRef(null);
  
  // Update word count
  useEffect(() => {
    const words = text.trim().split(/\s+/).filter((w) => w.length > 0);
    setWordCount(words.length);
  }, [text]);
  
  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 500) + 'px';
    }
  }, [text]);
  
  const handleAnalyze = async () => {
    if (text.trim().length === 0) {
      alert('Please write something first.');
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      // Check for safety risks FIRST
      const hasSafetyRisk = detectSafetyRisk(text);
      
      if (hasSafetyRisk) {
        setShowSafetyAlert(true);
        setAnalysisResult({
          isSafetyRisk: true,
          safetyContent: getSafetyAlertContent(),
        });
        setIsAnalyzing(false);
        return;
      }
      
      // If safe, proceed with normal analysis
      const sentimentScores = analyzeSentiment(text);
      const mood = detectMood(text, sentimentScores);
      const wellnessScore = calculateWellnessScore(sentimentScores.compound);
      const supportiveResponse = getSupportiveResponse(mood);
      const activities = getActivitySuggestions(mood);
      
      setAnalysisResult({
        isSafetyRisk: false,
        mood,
        sentimentScores,
        wellnessScore,
        supportiveResponse,
        activities,
      });
      
      setIsAnalyzing(false);
    }, 800);
  };
  
  const handleSaveEntry = () => {
    if (!analysisResult || analysisResult.isSafetyRisk) {
      alert('Cannot save this entry.');
      return;
    }
    
    const entry = saveJournalEntry({
      text,
      mood: analysisResult.mood,
      wellnessScore: analysisResult.wellnessScore,
      sentimentScores: analysisResult.sentimentScores,
    });
    
    if (entry) {
      alert('Entry saved successfully! 💾');
      setText('');
      setAnalysisResult(null);
      setShowSafetyAlert(false);
    }
  };
  
  const handleNewEntry = () => {
    setText('');
    setAnalysisResult(null);
    setShowSafetyAlert(false);
  };
  
  return (
    <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50
      dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            📔 Your Journal
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Write freely. Express yourself. Discover your emotions.
          </p>
        </motion.div>
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {!analysisResult ? (
            // Writing Mode
            <>
              {/* Text Area */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden
                border-2 border-transparent hover:border-blue-400 focus-within:border-blue-600
                transition-colors">
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write your thoughts, feelings, and experiences here. Be honest and authentic. Everything stays private."
                  className="w-full px-6 py-6 text-slate-800 dark:text-slate-100
                    bg-white dark:bg-slate-800 resize-none focus:outline-none
                    min-h-64 placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
              
              {/* Info Bar */}
              <div className="flex justify-between items-center bg-blue-50 dark:bg-slate-700
                rounded-lg px-4 py-3 border border-blue-200 dark:border-slate-600">
                <span className="text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">{wordCount}</span> words
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  All data saved locally in your browser
                </span>
              </div>
              
              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || text.trim().length === 0}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600
                  text-white font-bold rounded-xl hover:opacity-90 disabled:opacity-50
                  disabled:cursor-not-allowed transition-all transform hover:scale-105
                  flex items-center justify-center gap-2 shadow-lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent
                      rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Analyze My Entry
                  </>
                )}
              </button>
            </>
          ) : (
            // Results Mode
            <>
              {/* Safety Alert (if needed) */}
              {showSafetyAlert && analysisResult.isSafetyRisk && (
                <SafetyAlert content={analysisResult.safetyContent} />
              )}
              
              {/* Analysis Results (if safe) */}
              {!analysisResult.isSafetyRisk && (
                <>
                  {/* Mood Badge and Wellness Score */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Mood Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg
                        border border-slate-200 dark:border-slate-700 text-center"
                    >
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                        Detected Mood
                      </p>
                      <div className="flex justify-center mb-4">
                        <MoodBadge mood={analysisResult.mood} size="lg" />
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Sentiment compound: {analysisResult.sentimentScores.compound.toFixed(2)}
                      </p>
                    </motion.div>
                    
                    {/* Wellness Score Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg
                        border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center"
                    >
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                        Wellness Score
                      </p>
                      <WellnessScore score={analysisResult.wellnessScore} size="lg" />
                    </motion.div>
                  </div>
                  
                  {/* Supportive Response */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50
                      dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8
                      border-l-4 border-blue-600 shadow-md"
                  >
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      💙 Our Response
                    </p>
                    <p className="text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                      {analysisResult.supportiveResponse}
                    </p>
                  </motion.div>
                  
                  {/* Activity Suggestions */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                      ✨ Suggested Activities
                    </h3>
                    <div className="space-y-3">
                      {analysisResult.activities.map((activity, idx) => (
                        <ActivitySuggestion
                          key={idx}
                          activity={activity}
                          index={idx}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Your Entry Preview */}
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md
                    border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      Your Entry
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 max-h-32 overflow-y-auto">
                      <p className="text-slate-700 dark:text-slate-300 text-sm whitespace-pre-wrap">
                        {text}
                      </p>
                    </div>
                  </div>
                </>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-4 flex-col sm:flex-row">
                <button
                  onClick={handleNewEntry}
                  className="flex-1 py-3 border-2 border-slate-300 dark:border-slate-600
                    text-slate-700 dark:text-slate-200 font-bold rounded-xl
                    hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  ← New Entry
                </button>
                
                {!analysisResult.isSafetyRisk && (
                  <button
                    onClick={handleSaveEntry}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600
                      text-white font-bold rounded-xl hover:opacity-90 transition-all
                      transform hover:scale-105 shadow-lg"
                  >
                    💾 Save Entry
                  </button>
                )}
              </div>
            </>
          )}
        </motion.div>
        
        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-blue-50 dark:bg-slate-700 rounded-xl p-6 border border-blue-200
            dark:border-slate-600 flex gap-4"
        >
          <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
          <div className="text-sm text-slate-700 dark:text-slate-300">
            <p className="font-semibold mb-2">🔒 Your Privacy is Protected</p>
            <p>
              All your journal entries and analysis results are stored locally in your browser using localStorage.
              They never leave your device. No data is sent to servers or stored in the cloud.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
