/**
 * Safety Detection - Identifies high-risk suicidal/self-harm language
 * This is critical for preventing suicide
 */

const CRITICAL_RISK_KEYWORDS = [
  // Suicidal ideation
  'suicide', 'suicidal', 'kill myself', 'kill me', 'end my life', 'end it all',
  'want to die', 'wanna die', 'don\'t want to live', 'not worth living',
  'better off dead', 'no point', 'pointless', 'reason to live', 'can\'t take it',
  
  // Self-harm
  'cut myself', 'cutting', 'self harm', 'self-harm', 'hurt myself', 'hurting myself',
  'self injury', 'overdose', 'od', 'slash my wrists', 'slit wrists',
  
  // Despair/hopelessness
  'hopeless', 'helpless', 'nothing matters', 'nobody cares', 'no one cares',
  'nobody loves me', 'everyone hates me', 'worthless', 'useless', 'burden',
  'trouble to everyone', 'better without me',
];

const CONTEXT_KEYWORDS = [
  'death', 'die', 'dying', 'dead', 'goodbye', 'farewell', 'rope', 'pills',
  'bridge', 'jump', 'crash', 'drown', 'poison',
];

/**
 * Detects if text contains high-risk suicidal/self-harm language
 * Returns true if risk is detected, false otherwise
 */
export const detectSafetyRisk = (text) => {
  if (!text || text.trim().length === 0) return false;
  
  const lowerText = text.toLowerCase();
  
  // Check for critical risk keywords
  for (const keyword of CRITICAL_RISK_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      return true;
    }
  }
  
  // Check for combinations of context keywords (increased risk if multiple present)
  let contextCount = 0;
  for (const keyword of CONTEXT_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      contextCount++;
    }
  }
  
  // If 3+ context keywords present with negative sentiment, flag as risk
  if (contextCount >= 3) {
    return true;
  }
  
  return false;
};

/**
 * Get emergency resources
 */
export const getEmergencyResources = () => {
  return [
    {
      name: 'iCall',
      number: '9152987821',
      description: '24/7 emotional support helpline for India',
    },
    {
      name: 'Vandrevala Foundation',
      number: '1860-266-2345',
      description: 'Crisis management helpline',
    },
    {
      name: 'KIRAN - Suicide Prevention Helpline',
      number: '1800-599-0019',
      description: 'Ministry of Social Justice & Empowerment',
    },
  ];
};

/**
 * Generate safety alert content
 */
export const getSafetyAlertContent = () => {
  return {
    title: 'We Care About You ❤️',
    message:
      'We detected concerning language in your entry. Your wellbeing is important to us.',
    actionItems: [
      '📞 Call a trusted family member or friend right now',
      '🏥 Reach out to a mental health professional',
      '🆘 Contact one of the emergency helplines below',
      'Remember: This AI is not a substitute for professional mental health care',
    ],
    resources: getEmergencyResources(),
  };
};
