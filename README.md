# Travia

🌐 Live App: [https://thinktrivia.vercel.app](https://thinktrivia.vercel.app)

Travia is an engaging trivia quiz web application that tests your knowledge across various categories and difficulty levels. Built with modern technologies like Next.js and shadcn/ui, it offers a fun, interactive way to challenge yourself and friends, and track your score.

---

## Features

- Select number of questions, category, difficulty, and question type  
- Real-time score tracking with detailed statistics by difficulty  
- Animated circular timer with progress indicator and alerts  
- Confetti celebration on quiz completion  
- Responsive design optimized for desktop and mobile  
- Accessible UI with ARIA labels and keyboard support  
- Dark Mode  

---

## Technologies Used

- **Next.js** — React framework for server-rendered apps  
- **React** — UI library  
- **TypeScript** — Static typing for JavaScript  
- **shadcn/ui** — Component library for UI elements  
- **react-confetti** — Celebration animation  
- **react-use** — Utility hooks (e.g. window size)  
- **lucide-react** — Lightweight React icon library  
- **loading.io** — CSS spinner animations  

---

## API Source

This project uses the [Open Trivia Database (OpenTDB) API](https://opentdb.com/api_config.php) to fetch trivia questions. OpenTDB provides a free, public API for trivia questions across multiple categories and difficulties, making it perfect for quiz applications like Travia.

The API endpoints used support parameters for:  
- Number of questions  
- Category  
- Difficulty  
- Question type  

You can learn more and explore the API documentation here: [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/travia.git
   cd travia
   ````

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to start using Travia.

---

## Future Improvements

* **User Authentication:** Allow users to create accounts and log in to save their progress and scores.
* **Score Persistence:** Store scores in a database for tracking user history and achievements.
* **Multiplayer Competitions:** Implement real-time quiz rooms where multiple users can compete with the same set of questions.
* **Leaderboard:** Add global and friends leaderboards to encourage competition and engagement.
* **Question Review & Feedback:** Allow users to review past questions and submit feedback or new questions.
* **Mobile App:** Create a mobile version of Travia for a better on-the-go experience.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

---