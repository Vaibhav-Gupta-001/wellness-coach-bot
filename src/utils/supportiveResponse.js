/**
 * Supportive Response Generator
 * Provides empathetic AI responses based on detected mood
 */

const supportiveResponses = {
  happy: [
    "I'm so glad you're feeling happy! Keep cherishing these positive moments. 🌟",
    "Your joy is wonderful! Remember to share this happiness with those around you. ✨",
    "That's beautiful! May this happiness continue to fill your days. 💫",
    "I can feel the positive energy in your words! Keep shining! 🌈",
  ],
  neutral: [
    "Thanks for sharing. Every moment is a chance for growth and understanding. 🌱",
    "I appreciate you taking time to reflect. That's already a positive step. 💭",
    "It's okay to have these calm, steady days. They're moments to recharge. 🌙",
  ],
  sad: [
    "I hear that you're struggling right now, and that's okay. Sadness is part of being human. Let me help you find some light. 💙",
    "Your feelings matter, and it's brave to express them. Better days are coming. 🌤️",
    "I see your pain. Please remember that tough times are temporary. You have strength within you. 💪",
  ],
  anxious: [
    "I understand anxiety can feel overwhelming. Let's take this one breath at a time. You're safe. 🧘",
    "Anxiety is trying to protect you, but right now you need calm. I'm here to help. 🕊️",
    "What you're feeling is valid. Let's ground you in the present moment. ✨",
  ],
  stressed: [
    "Stress is weighing on you, but you don't have to carry it alone. Let's lighten the load together. 🤝",
    "I can see you're under pressure. Remember: you've overcome challenges before. 💪",
    "Take a deep breath. You're doing better than you think. Rest is productive too. 😌",
  ],
  angry: [
    "Your anger is valid. It's telling you that something matters to you. Let's channel it constructively. 🔥",
    "I feel your frustration. It's okay to be upset. Now let's find peace. ☮️",
    "Anger can be overwhelming, but it can also motivate change. You're strong. 💪",
  ],
  lonely: [
    "Loneliness can be painful, but you're never truly alone. Reach out—connection is within reach. 🤗",
    "I hear the isolation in your words. Consider reaching out to someone today. 📞",
    "Feeling lonely is tough, but community and connection exist for you. You matter. 💛",
  ],
  depressed: [
    "I'm sensing deep sadness. Please know that depression lies—you ARE worth it. Your life matters. 💙",
    "Depression is heavy, and I'm here to support you. Professional help can make a difference. 🏥",
    "Dark thoughts are part of depression, not reality. Please reach out to someone you trust. 🤝",
  ],
};

/**
 * Get random supportive response for mood
 */
export const getSupportiveResponse = (mood) => {
  const responses = supportiveResponses[mood] || supportiveResponses.neutral;
  return responses[Math.floor(Math.random() * responses.length)];
};

/**
 * Activity suggestions based on mood
 */
const activitySuggestions = {
  happy: [
    { name: 'Share your joy', emoji: '🎉', description: 'Tell someone you care about what made you happy' },
    { name: 'Gratitude journaling', emoji: '📝', description: 'Write down 3 things you\'re grateful for' },
    { name: 'Celebrate yourself', emoji: '🌟', description: 'Do something special to honor your happiness' },
  ],
  neutral: [
    { name: 'Mindful breathing', emoji: '🫁', description: '5 minutes of deep breathing exercises' },
    { name: 'Light walk', emoji: '🚶', description: 'A gentle walk to refresh your mind' },
    { name: 'Creative activity', emoji: '🎨', description: 'Drawing, music, or any creative outlet' },
  ],
  sad: [
    { name: 'Meditation', emoji: '🧘', description: '10 minutes of guided meditation for comfort' },
    { name: 'Call a friend', emoji: '📞', description: 'Reach out to someone who cares about you' },
    { name: 'Warm beverage', emoji: '☕', description: 'Make tea or hot chocolate and sit with your feelings' },
  ],
  anxious: [
    { name: 'Deep breathing', emoji: '🫁', description: 'Box breathing: 4-4-4-4 pattern' },
    { name: 'Progressive relaxation', emoji: '💆', description: 'Tense and release each muscle group' },
    { name: 'Grounding exercise', emoji: '🌍', description: '5 senses: name 5 things you see, hear, feel' },
  ],
  stressed: [
    { name: 'Yoga flow', emoji: '🧘', description: 'Gentle yoga to release tension' },
    { name: 'Nature walk', emoji: '🌳', description: 'Time in nature to decompress' },
    { name: 'Bath/shower', emoji: '🛁', description: 'Warm bath with calming music' },
  ],
  angry: [
    { name: 'Physical activity', emoji: '🏃', description: 'Run, dance, or exercise to channel energy' },
    { name: 'Write it out', emoji: '✍️', description: 'Express anger freely in writing, then let it go' },
    { name: 'Cold water splash', emoji: '💧', description: 'Splash cold water on your face to reset' },
  ],
  lonely: [
    { name: 'Text a friend', emoji: '💬', description: 'Send a message to someone who matters' },
    { name: 'Join a community', emoji: '👥', description: 'Online or offline groups with shared interests' },
    { name: 'Call someone', emoji: '☎️', description: 'Hear a familiar voice today' },
  ],
  depressed: [
    { name: 'Professional support', emoji: '🏥', description: 'Consider speaking with a therapist' },
    { name: 'Gentle movement', emoji: '🚶', description: 'Even a short walk can help' },
    { name: 'Self-compassion', emoji: '💙', description: 'Treat yourself like you\'d treat a friend in pain' },
  ],
};

/**
 * Get activity suggestions for mood
 */
export const getActivitySuggestions = (mood) => {
  const activities = activitySuggestions[mood] || activitySuggestions.neutral;
  // Return 2-3 random activities
  const shuffled = [...activities].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(3, shuffled.length));
};
