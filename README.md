# Wellness Coach Bot

An AI-powered journaling app that detects mood from journal entries and provides supportive guidance for mental health and emotional wellness. Designed to prevent youth suicide through compassionate AI support, aligning with UN SDG 3: Good Health and Well-being.

## 🎯 Features

### Core Features
- **📔 Secure Journaling** - Write freely in a safe, private space with local-only data storage
- **🤖 AI Mood Detection** - Sentiment analysis combined with keyword matching to detect mood (Happy, Neutral, Sad, Anxious, Stressed, Angry, Lonely, Depressed)
- **💙 Empathetic AI Responses** - Receive compassionate, supportive messages tailored to your emotional state
- **🆘 Safety Detection** - High-risk language detection for suicidal ideation and self-harm with emergency resources
- **📊 Dashboard & Analytics** - Track mood trends, wellness scores, and emotional patterns over time
- **🌗 Dark Mode** - Easy on the eyes with full dark mode support
- **🧘 Breathing Exercises** - Guided box breathing (4-4-4-4) for anxiety relief
- **💡 Wellness Tips** - 8 evidence-based mental health tips and daily practices
- **📱 Fully Responsive** - Works perfectly on mobile, tablet, and desktop

### Safety Features
- **Critical Safety Alerts** - Detects concerning language patterns and displays emergency helplines
- **India Mental Health Hotlines**:
  - iCall: 9152987821
  - Vandrevala Foundation: 1860-266-2345
  - KIRAN: 1800-599-0019

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing

### AI & Data
- **Vader Sentiment** - Sentiment analysis (no API key required)
- **Browser localStorage** - Client-side data persistence
- **Recharts** - Interactive charts and visualizations
- **Lucide React** - Beautiful icon library

### Tools & Libraries
- **JavaScript ES6+** - Modern JavaScript features
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Quick Start

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The app will open at `http://localhost:5173`

## 📁 Project Structure

```
wellness-coach-bot/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with dark mode toggle
│   │   ├── Footer.jsx           # Footer with helplines & links
│   │   ├── MoodBadge.jsx        # Mood emoji and label display
│   │   ├── JournalCard.jsx      # Entry preview card
│   │   ├── SafetyAlert.jsx      # High-risk content warning
│   │   ├── ActivitySuggestion.jsx # Coping activity suggestions
│   │   ├── BreathingExercise.jsx  # Interactive breathing guide
│   │   └── WellnessScore.jsx    # Circular progress indicator
│   ├── pages/
│   │   ├── Landing.jsx          # Hero & features page
│   │   ├── Journal.jsx          # Main journaling interface
│   │   ├── Dashboard.jsx        # Analytics & mood tracking
│   │   ├── Resources.jsx        # Tips, exercises, FAQs
│   │   └── About.jsx            # Problem, objectives, tech, future
│   ├── utils/
│   │   ├── sentimentAnalysis.js # Mood detection logic
│   │   ├── safetyDetection.js   # Risk detection & resources
│   │   ├── supportiveResponse.js # AI response templates
│   │   └── storage.js           # localStorage management
│   ├── App.jsx                  # Main app with routing
│   ├── App.css                  # Global styles
│   ├── index.css                # Tailwind & base styles
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🚀 How It Works

### AI Workflow

1. **Journal Entry** → User writes thoughts and feelings
2. **Safety Check** → App checks for high-risk language patterns
   - If detected: Display critical safety alert with helplines
   - If safe: Proceed to analysis
3. **Sentiment Analysis** → Vader sentiment analyzer computes compound score
4. **Mood Detection** → Combines sentiment + keyword matching → 9 mood categories
5. **Wellness Score** → Calculated from sentiment (0-100)
6. **Supportive Response** → Generates empathetic message from templates
7. **Activity Suggestions** → Recommends 2-3 coping strategies
8. **Data Persistence** → Saves to browser localStorage

### Key Technologies Explained

#### Vader Sentiment
- **No API keys required** - runs entirely in browser
- Analyzes text and returns compound score (-1 to +1)
- Works well for journal entries and social media text

#### Mood Categories
- Happy: Positive sentiment + joy keywords
- Neutral: Balanced emotional state
- Sad: Negative sentiment + melancholy keywords
- Anxious: Worry/nervousness patterns
- Stressed: Pressure/overwhelm keywords
- Angry: Frustration/rage keywords
- Lonely: Isolation keywords
- Depressed: Hopelessness/despair keywords
- Hopeless: Severe depression indicators

#### Safety Detection
- Scans for 30+ high-risk keywords (suicide, self-harm, etc.)
- Context analysis: 3+ concerning keywords triggers alert
- Shows critical warning + emergency helplines
- Does NOT save entries with detected risks
- Encourages professional help

#### Data Privacy
- **100% client-side**: Data never leaves your browser
- Uses browser localStorage (5-10 MB available)
- No backend server, no cloud storage, no tracking
- Users can clear data anytime via browser settings

## 📋 Pages & Components

### Landing Page
- Hero section with app mission
- 4 feature cards (Journal, Tracking, AI, Resources)
- "How it works" section with 3 steps
- Call-to-action button to Journal
- Footer with helplines

### Journal Page
- Large textarea with auto-resize
- Live word counter
- "Analyze" button (with loading state)
- Post-analysis:
  - Mood badge with emoji
  - Wellness score (0-100)
  - Supportive AI response
  - 2-3 activity suggestions
  - Entry preview
  - "Save" & "New Entry" buttons

### Dashboard Page
- **KPI Cards**: Current score, average, total entries, positive streak
- **Time Period Selector**: 7, 14, 30-day views
- **Wellness Trend Chart**: Line chart of wellness scores
- **Mood Distribution Pie Chart**: Percentage breakdown
- **Recent Entries List**: Sortable, deletable journal cards

### Resources Page
- Emergency helpline cards (iCall, Vandrevala, KIRAN)
- Interactive breathing exercise (4-4-4-4 box breathing)
- 8 mental health tips
- 6 FAQ items
- Mental health awareness message

### About Page
- Problem statement (SDG 3, youth mental health)
- 6 key objectives
- Technology stack breakdown
- 8-step AI workflow explanation
- 8 future roadmap items
- Team commitment statement

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) & Indigo (#6366F1)
- **Accent**: Lavender, Soft Blue, Pastel Green
- **Mood Colors**: Unique colors per mood (yellow happy, red angry, etc.)
- **Dark Mode**: Slate grays (#0f172a to #e2e8f0)

### Typography
- **Font**: Poppins (Google Fonts)
- **Sizes**: Responsive (15px mobile, 16px desktop)
- **Weights**: 300-800 for hierarchy

### Components
- **Cards**: Rounded (xl), shadow, borders, hover effects
- **Buttons**: Gradient, rounded, with scale on hover
- **Inputs**: Full width, clear focus states
- **Modals**: Overlay with animations
- **Icons**: Lucide React for consistency

### Animations
- Fade-in on page load
- Slide-up on scroll (Intersection Observer)
- Scale on hover
- Smooth color transitions
- Framer Motion for advanced animations

## 🌐 Deployment to Vercel

### Zero-Configuration Deployment

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Or: Push to GitHub and connect repository to Vercel dashboard
# https://vercel.com/new
```

**Features**:
- Auto-deploys from Git pushes
- Automatic HTTPS
- Edge network CDN
- Preview URLs for PRs
- Analytics & monitoring

**Vercel Settings**:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- (All auto-detected for Vite)

## 💾 Browser Storage

### localStorage Keys
- `wellness_journal_entries`: Array of all journal entries
- `wellness_theme`: 'light' or 'dark'

### Entry Structure
```javascript
{
  id: timestamp,
  timestamp: ISO string,
  text: "Journal entry text",
  mood: "happy|neutral|sad|anxious|stressed|angry|lonely|depressed",
  wellnessScore: 0-100,
  sentimentScores: { compound, positive, neutral, negative }
}
```

### Storage Limits
- ~5-10 MB available per domain
- ~500 entries of average length fit easily
- Users can manually delete entries from Dashboard

## 🔒 Privacy & Security

- ✅ No authentication required
- ✅ No user accounts or profiles
- ✅ No data sent to servers
- ✅ No third-party analytics
- ✅ No cookies or tracking pixels
- ✅ No AI API calls (Vader runs locally)
- ✅ Data deleted when browser cache cleared

## 🧪 Testing Mood Detection

Try these phrases to test different moods:

```
Happy:    "I'm so excited and happy today!"
Neutral:  "It was an average day"
Sad:      "I'm feeling really down and unhappy"
Anxious:  "I'm so nervous about my presentation"
Stressed: "I'm overwhelmed with everything"
Angry:    "I'm furious about what happened"
Lonely:   "I feel so isolated and alone"
Depressed: "Nothing matters anymore"
```

## ⚠️ Safety Testing

**Do NOT enter real concerning content**. For testing safety detection, these are detected:

```
"I want to kill myself"
"I can't take this anymore, I should just die"
"Nobody would miss me"
```

When detected: Safety alert displays, entry NOT saved.

## 🚀 Future Enhancements

- Backend integration for cloud sync & multi-device
- Advanced LLM integration (GPT-4) for better responses
- Professional therapist consultation
- Mobile app (iOS/Android)
- Community features & peer support
- Predictive analytics & proactive interventions
- Multi-language support
- Voice journaling

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- [Vader Sentiment GitHub](https://github.com/cjhutto/vaderSentiment)

## 💬 Support & Feedback

This is an educational project built for good. If you're struggling with mental health:

- **Talk to someone**: Friend, family, school counselor
- **Call a helpline**:
  - iCall: 9152987821
  - Vandrevala: 1860-266-2345
  - KIRAN: 1800-599-0019
- **Seek professional help**: Therapy can change your life

## 📄 License

This project is open source and available for educational and non-profit use.

---

**Built with ❤️ for mental health awareness and youth support**
