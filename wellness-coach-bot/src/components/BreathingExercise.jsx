import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * BreathingExercise Component - Interactive Box Breathing Guide
 * Single circular button with animated SVG progress ring
 * Box breathing: 4 seconds in, 4 hold, 4 out, 4 hold (16 seconds total per cycle)
 */
export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0); // 0=inhale, 1=hold, 2=exhale, 3=hold
  const [phaseProgress, setPhaseProgress] = useState(0); // 0-1 for current phase
  const [secondsRemaining, setSecondsRemaining] = useState(4);
  const [roundsCompleted, setRoundsCompleted] = useState(0);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const cycleStartTimeRef = useRef(null);
  
  const phases = [
    { name: 'Inhale', instruction: 'Breathe in through your nose', scale: 1.15 },
    { name: 'Hold', instruction: 'Hold your breath', scale: 1.15 },
    { name: 'Exhale', instruction: 'Breathe out through your mouth', scale: 0.95 },
    { name: 'Hold', instruction: 'Hold before next breath', scale: 0.95 },
  ];
  
  const PHASE_DURATION = 4000; // 4 seconds per phase in milliseconds
  const CYCLE_DURATION = 16000; // 16 seconds total cycle
  
  const toggleExercise = () => {
    if (isActive) {
      stopExercise();
    } else {
      startExercise();
    }
  };
  
  const startExercise = () => {
    setIsActive(true);
    setCurrentPhase(0);
    setPhaseProgress(0);
    setSecondsRemaining(4);
    setRoundsCompleted(0);
    startTimeRef.current = Date.now();
    cycleStartTimeRef.current = Date.now();
  };
  
  const stopExercise = () => {
    setIsActive(false);
    setCurrentPhase(0);
    setPhaseProgress(0);
    setSecondsRemaining(4);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };
  
  useEffect(() => {
    if (!isActive) return;
    
    const updateProgress = () => {
      const now = Date.now();
      const elapsedInCycle = (now - cycleStartTimeRef.current) % CYCLE_DURATION;
      const newPhase = Math.floor(elapsedInCycle / PHASE_DURATION);
      const phaseElapsed = elapsedInCycle % PHASE_DURATION;
      const progress = phaseElapsed / PHASE_DURATION;
      const remaining = Math.max(1, Math.ceil((PHASE_DURATION - phaseElapsed) / 1000));
      
      setCurrentPhase(newPhase);
      setPhaseProgress(progress);
      setSecondsRemaining(remaining);
      
      // Check if we completed a full cycle
      if (elapsedInCycle < PHASE_DURATION && newPhase === 0 && now - startTimeRef.current > CYCLE_DURATION) {
        setRoundsCompleted((prev) => prev + 1);
        cycleStartTimeRef.current = now;
      }
      
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    };
    
    animationFrameRef.current = requestAnimationFrame(updateProgress);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive]);
  
  const phase = phases[currentPhase];
  const totalProgress = (currentPhase + phaseProgress) / 4; // 0-1 for entire cycle
  const circumference = 2 * Math.PI * 45; // SVG circle radius = 45
  const strokeDashoffset = circumference * (1 - totalProgress);
  
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
        Box Breathing Exercise
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-md">
        4-4-4-4 breathing helps calm your nervous system. Take it slow and find your peace.
      </p>
      
      {/* Main Circular Button with SVG Progress Ring */}
      <div className="relative mb-8">
        {/* SVG Progress Ring */}
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          className="absolute inset-0"
        >
          {/* Background circle */}
          <circle
            cx="110"
            cy="110"
            r="100"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2"
            className="dark:stroke-slate-700"
          />
          
          {/* Progress ring with gradient */}
          <defs>
            <linearGradient id="breathingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          
          {/* Main progress stroke */}
          <circle
            cx="110"
            cy="110"
            r="45"
            fill="none"
            stroke="url(#breathingGradient)"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-100"
            style={{
              filter: isActive ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'none',
            }}
          />
          
          {/* Quarter tick marks */}
          {[0, 90, 180, 270].map((angle) => {
            const radian = (angle - 90) * (Math.PI / 180);
            const x1 = 110 + 95 * Math.cos(radian);
            const y1 = 110 + 95 * Math.sin(radian);
            const x2 = 110 + 105 * Math.cos(radian);
            const y2 = 110 + 105 * Math.sin(radian);
            return (
              <line
                key={`tick-${angle}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#94a3b8"
                strokeWidth="2"
                className="dark:stroke-slate-500"
              />
            );
          })}
        </svg>
        
        {/* Circular Button */}
        <motion.button
          onClick={toggleExercise}
          animate={{
            scale: isActive ? phase.scale : 1,
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: isActive ? Infinity : 0,
          }}
          className="relative w-56 h-56 rounded-full 
            bg-gradient-to-br from-blue-400 to-indigo-600
            hover:from-blue-500 hover:to-indigo-700
            active:scale-95 transition-all duration-200
            shadow-xl hover:shadow-2xl
            flex flex-col items-center justify-center
            text-white font-semibold
            focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-indigo-500"
        >
          {isActive ? (
            <div className="flex flex-col items-center gap-2">
              <div className="text-xl font-bold">{secondsRemaining}</div>
              <div className="text-lg font-semibold">{phase.name}</div>
              <div className="text-sm text-blue-100 text-center px-4 leading-tight">
                {phase.instruction}
              </div>
            </div>
          ) : (
            <div className="text-2xl font-bold">Start Exercise</div>
          )}
        </motion.button>
      </div>
      
      {/* Stop Exercise Link */}
      {isActive && (
        <button
          onClick={stopExercise}
          className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 
            underline cursor-pointer transition-colors mb-6"
        >
          Stop exercise
        </button>
      )}
      
      {/* Rounds Counter */}
      {isActive && (
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Rounds completed: <span className="text-blue-600 dark:text-blue-400">{roundsCompleted}</span>
          </p>
        </div>
      )}
      
      {/* Instructions */}
      <div className="max-w-md bg-blue-50 dark:bg-slate-800 rounded-lg p-4 text-sm
        text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-slate-700">
        <p className="font-semibold mb-2">How Box Breathing Works:</p>
        <ul className="space-y-1 text-xs">
          <li>• <strong>Inhale</strong> for 4 seconds through your nose</li>
          <li>• <strong>Hold</strong> for 4 seconds</li>
          <li>• <strong>Exhale</strong> for 4 seconds through your mouth</li>
          <li>• <strong>Hold</strong> for 4 seconds</li>
          <li>• Repeat for as long as you need</li>
        </ul>
        <p className="mt-3 font-semibold">Benefits: Reduces anxiety, lowers heart rate, improves focus</p>
      </div>
    </div>
  );
}
