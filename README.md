# 🧠 Trivia – Think Fast, Score High

🌐 **Live Demo**: [https://thinktrivia.vercel.app](https://thinktrivia.vercel.app)

**Trivia** is a modern trivia quiz web app that challenges your knowledge across a variety of topics and difficulty levels. Built with cutting-edge tools like **Next.js**, **shadcn/ui**, and **TypeScript**, Trivia delivers an engaging and responsive experience with real-time feedback, scoring, and animations.

---

## 🚀 Features

* 🎯 **Customizable Quiz Options**: Choose the number of questions, category, difficulty, and type (Multiple Choice or True/False).
* 📊 **Dynamic Scoring System**: Earn points based on how quickly you answer. More difficult questions offer more time.
* ⏱️ **Animated Timer**: Circular countdown timer with color-coded urgency and timeout handling.
* 🎉 **Confetti Celebration**: Visual feedback when the quiz is completed.
* 📱 **Fully Responsive**: Optimized for both mobile and desktop screens.
* ♿ **Accessible UI**: Keyboard navigation and ARIA labels for an inclusive experience.
* 🌙 **Dark Mode**: Seamless light/dark theme toggle.

---

## 🛠️ Tech Stack

* **Next.js** – React-based framework for SSR and routing
* **React + TypeScript** – Typed component logic
* **shadcn/ui** – Elegant and accessible component library
* **react-confetti** – Confetti animation on quiz completion
* **react-use** – Helpful hooks (e.g., window size for confetti)
* **lucide-react** – Lightweight and consistent icon set
* **loading.io** – Stylish CSS-based loading animations
* **react-confetti** – Confetti animation for quiz celebration
* **...**

---

## 📡 Trivia API

Trivia uses the [Open Trivia Database (OpenTDB)](https://opentdb.com/api_config.php) for fetching quiz data.

**Supported API Parameters:**

* Number of questions
* Category
* Difficulty
* Question type

🔗 [Explore the API](https://opentdb.com/api_config.php)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kuku20/trivia-nextjs
cd Trivia
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) to explore Trivia locally.

---

## 🌟 Planned Improvements

* 🔐 **User Accounts** – Save progress, scores, and history across sessions
* 📊 **Persistent Score Tracking** – Store and retrieve scores from a backend
* 👥 **Multiplayer Mode** – Join live quiz rooms and compete in real time
* 🏆 **Leaderboards** – See how you stack up against friends and global players
* ✅ **Question Review** – Review past questions and submit ratings/feedback
* 📱 **Mobile App Version** – Native experience via React Native or similar

---

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests to improve the app, add features, or fix bugs.

---