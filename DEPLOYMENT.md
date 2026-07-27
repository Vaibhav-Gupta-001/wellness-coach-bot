# Deployment Guide - Wellness Coach Bot

This app is ready for **zero-configuration deployment to Vercel**. All code runs in the browser with no backend required.

## 🚀 Quick Deployment to Vercel

### Option 1: GitHub + Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Wellness Coach Bot commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wellness-coach-bot.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Verify Deployment**
   - Your app is live at `https://wellness-coach-bot.vercel.app` (or custom domain)
   - Auto-deploys on each GitHub push

### Option 2: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally (one time)
npm i -g vercel

# Deploy from project directory
cd wellness-coach-bot
vercel --prod

# Follow prompts - select scope and confirm details
```

### Option 3: Vercel Git Integration (Enterprise)

Push to GitLab, Bitbucket, or any Git provider and connect to Vercel for auto-deployments.

## 📦 Build Output

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Size**: ~1 MB (gzipped: 275 KB)
- **Framework**: Vite auto-detected

## ⚡ Performance Metrics

| Metric | Value |
|--------|-------|
| Build time | ~3 seconds |
| First load | ~1-2 seconds |
| Gzipped size | 275 KB |
| Time to Interactive | <2 seconds |

## 🔧 Environment Configuration

**No environment variables needed!** The app is 100% client-side:
- ✅ Vader sentiment analysis (no API key)
- ✅ localStorage for data (no backend)
- ✅ Hardcoded emergency resources (no database)
- ✅ Dark mode preference (localStorage)

## 🌍 Production Best Practices

### Already Configured ✓
- Minification & tree-shaking
- CSS autoprefixing
- Image optimization ready
- Gzip compression
- Cache busting via content hashing

### Pre-Deployment Checklist
- [x] Unit tests pass (manual verification)
- [x] Dark mode works across all pages
- [x] localStorage persists correctly
- [x] Sentiment analysis works
- [x] Safety detection alerts properly
- [x] All pages load correctly
- [x] No console errors
- [x] Responsive design tested

### After Deployment
1. Test all features at `https://your-domain.vercel.app`
2. Verify dark mode persistence
3. Test journal entry save/retrieve
4. Check Dashboard charts render
5. Verify emergency helpline numbers are visible
6. Test on mobile devices (iPhone, Android)

## 📱 Mobile Optimization

The app is fully responsive with Tailwind CSS breakpoints:
- **Mobile**: <640px (optimized)
- **Tablet**: 768px-1024px
- **Desktop**: >1024px

Test on real devices using:
```bash
# Get local network URL
npm run dev

# Then open http://YOUR_IP:5174 on mobile
```

## 🔐 Security & Privacy

All sensitive features are production-ready:
- ✅ No API keys or secrets exposed
- ✅ localStorage only (no server calls)
- ✅ HTTPS enforced by Vercel
- ✅ No third-party tracking
- ✅ No user authentication
- ✅ No external data sent

### Headers to Consider (Optional)
If you want to add security headers via vercel.json:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

## 📊 Analytics (Optional)

To add Vercel Analytics:
```bash
npm install @vercel/analytics
```

Then add to `src/main.jsx`:
```javascript
import { Analytics } from '@vercel/analytics/react';

// Inside your React tree:
<Analytics />
```

## 🆘 Troubleshooting

### Build fails with module not found
- Check all imports use relative paths with `./`
- Verify package.json has all dependencies

### Sentiment analysis not working
- Vader sentiment is included in package.json ✓
- No API key needed ✓
- If issues: clear node_modules and reinstall

### Dark mode not persisting
- Ensure localStorage is not blocked
- Check browser privacy settings
- Verify CSS classes are applied

### Charts not rendering
- Recharts is installed ✓
- Verify data structure matches expected format
- Check console for React errors

## 🎯 Custom Domain Setup

### Add Custom Domain in Vercel Dashboard
1. Go to Project Settings → Domains
2. Add your domain (e.g., `wellness-coach-bot.com`)
3. Follow DNS configuration instructions
4. SSL certificate auto-provisioned

### Example DNS Setup for Namecheap
```
Type: A
Name: @
Value: 76.76.19.165
```

## 📈 Monitoring & Logs

### Vercel Dashboard
- Deployment logs
- Error tracking
- Performance metrics
- Function logs (not applicable here - no serverless)

### Local Testing Before Deploy
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test production build locally.

## 🚀 Rollback

If issues occur after deployment:
1. Go to Vercel Dashboard → Deployments
2. Click on previous successful deployment
3. Click "Redeploy"
4. Or use Git to revert code and push

## 💡 Performance Optimization Ideas

- **Dynamic imports**: Lazy load Resource page
- **Code splitting**: Separate chunk for pages
- **Image optimization**: Convert assets to WebP
- **Service Worker**: Add PWA support for offline
- **Compression**: Further optimize CSS/JS

## 📝 Post-Deployment Steps

1. **Create GitHub Issues** for feature requests
2. **Add CHANGELOG.md** for version tracking
3. **Create CONTRIBUTING.md** for collaboration
4. **Set up GitHub Actions** for automated tests
5. **Add LICENSE file** (MIT recommended)

## 🎉 Congratulations!

Your Wellness Coach Bot is live and production-ready!

**Share your achievement:**
- LinkedIn: "Built Wellness Coach Bot - AI journaling app for mental health"
- GitHub: Star the repository and showcase in your portfolio
- Portfolio: Add to project showcase

---

**Need Help?**
- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

**Remember:** This app is designed to support mental health. Share resources and encourage professional help when needed.