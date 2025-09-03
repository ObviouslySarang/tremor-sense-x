# 🌍 SeismoWatch

**Real-Time Earthquake Detection System Powered by Social Media Intelligence**

SeismoWatch leverages real-time Twitter data to detect earthquakes faster than traditional seismic networks, providing instant alerts with crowdsourced evidence and media verification.

![SeismoWatch Dashboard](https://img.shields.io/badge/Status-In%20Development-orange) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-06B6D4)

---

## 🚀 Features

### 🔍 **Real-Time Detection**
- Twitter/X streaming API integration for live earthquake mentions
- Location-based clustering and volume spike detection
- Multi-language keyword monitoring (English, Japanese, Spanish, etc.)

### 📊 **Intelligence & Scoring**
- Confidence scoring based on tweet volume, verified users, and location density
- NLP-powered content classification to filter false positives
- Real-time authenticity assessment

### 🗺️ **Interactive Visualization**
- Live earthquake activity map with clickable event pins
- Real-time tweet feed with media attachments
- Confidence scores and event timelines

### 🔔 **Alert System**
- Email and SMS notifications for subscribed users
- Customizable alert thresholds and regional preferences
- Links to relevant tweets, videos, and media evidence

### 👤 **User Management**
- User registration and authentication
- Personalized alert preferences
- Regional subscription management

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** with TypeScript
- **TailwindCSS** + **ShadCN UI** components
- **React Query** for state management
- **React Router** for navigation
- **Recharts** for data visualization
- **Mapbox/Leaflet** for interactive maps *(planned)*

### **Backend** *(planned)*
- **Node.js** + **Express.js** + TypeScript
- **MongoDB** + **Mongoose**
- **Twitter API v2** / Streaming API
- **Socket.IO** for real-time updates
- **OpenAI API** for NLP classification

### **Notifications** *(planned)*
- **Twilio API** for SMS alerts
- **SendGrid API** for email notifications

---

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**
- **Twitter API** credentials *(for backend)*

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/seismowatch.git
cd seismowatch
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
bun install
```

### 3. Start the development server
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

### 4. Open your browser
Navigate to `http://localhost:5173` to see the application.

---

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   ├── SeismoHero.tsx  # Landing page hero section
│   ├── LiveDashboard.tsx # Real-time dashboard
│   └── FeatureSection.tsx # Feature showcase
├── pages/              # Route components
│   ├── Index.tsx       # Landing page
│   ├── Dashboard.tsx   # Main dashboard
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

---

## 🎯 Key Components

### **SeismoHero**
Landing page hero section with animated seismic waves and call-to-action buttons.

### **LiveDashboard** 
Real-time earthquake monitoring interface with:
- Live event feed
- Confidence scoring
- Location filtering
- Alert management

### **FeatureSection**
Showcases core platform capabilities and differentiators.

---

## 🔮 Planned API Endpoints

### **Earthquake Detection**
- `GET /api/tweets/live-feed` - Recent earthquake-related tweets
- `GET /api/events` - Detected seismic events
- `POST /api/events/verify` - Event verification workflow

### **User Management**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/user/preferences` - Alert preferences
- `PUT /api/user/preferences` - Update preferences

### **Notifications**
- `POST /api/alerts/send` - Trigger alert notifications
- `GET /api/alerts/history` - Alert history

---

## 🧮 Authenticity Algorithm

SeismoWatch uses a multi-factor confidence scoring system:

```typescript
function calculateEventConfidence(tweetCluster: TweetCluster): number {
  const volumeScore = Math.min(tweetCluster.count / 10, 1);
  const verifiedUserRatio = tweetCluster.verifiedUsers / tweetCluster.totalUsers;
  const locationDensity = 1 - (tweetCluster.uniqueLocations / tweetCluster.count);
  
  return (0.6 * volumeScore) + (0.3 * verifiedUserRatio) + (0.1 * locationDensity);
}
```

**Factors:**
- **Tweet Volume** (60%): Spike in earthquake mentions
- **User Verification** (30%): Ratio of verified Twitter accounts
- **Location Clustering** (10%): Geographic concentration of reports

---

## 🎨 Design System

SeismoWatch uses a custom seismic-themed design system:

- **Colors**: Deep earth tones with seismic accent colors
- **Gradients**: Layered geological gradients
- **Animations**: Seismic wave patterns and pulse effects
- **Typography**: Clean, readable fonts optimized for data display

---

## 🚀 Deployment

### **Frontend (Vercel)**
```bash
npm run build
# Deploy to Vercel via GitHub integration
```

### **Backend (Railway/Fly.io)** *(planned)*
```bash
# Docker deployment configuration coming soon
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📊 Roadmap

- [ ] **Phase 1**: Frontend dashboard and visualization *(Current)*
- [ ] **Phase 2**: Twitter API integration and backend development
- [ ] **Phase 3**: Real-time notifications and user management
- [ ] **Phase 4**: Mobile app and advanced analytics
- [ ] **Phase 5**: Integration with official seismic networks (USGS, EMSC)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Live Demo**: [seismowatch.vercel.app](https://seismowatch.vercel.app) *(coming soon)*
- **Documentation**: [docs.seismowatch.dev](https://docs.seismowatch.dev) *(coming soon)*
- **API Status**: [status.seismowatch.dev](https://status.seismowatch.dev) *(coming soon)*

---

## 💡 Inspiration

SeismoWatch was inspired by the need for faster earthquake detection systems that leverage the power of crowdsourced reporting through social media platforms.

---

## 📞 Support

For support, email support@seismowatch.dev or join our [Discord community](https://discord.gg/seismowatch).

---

<p align="center">
  <strong>⚡ Detecting earthquakes at the speed of social media ⚡</strong>
</p>
