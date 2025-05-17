export const triviaCategories = [
  { value: 'any', label: 'Any Category' },
  { value: '9', label: 'General Knowledge' },
  { value: '10', label: 'Entertainment: Books' },
  { value: '11', label: 'Entertainment: Film' },
  { value: '12', label: 'Entertainment: Music' },
  { value: '13', label: 'Entertainment: Musicals & Theatres' },
  { value: '14', label: 'Entertainment: Television' },
  { value: '15', label: 'Entertainment: Video Games' },
  { value: '16', label: 'Entertainment: Board Games' },
  { value: '17', label: 'Science & Nature' },
  { value: '18', label: 'Science: Computers' },
  { value: '19', label: 'Science: Mathematics' },
  { value: '20', label: 'Mythology' },
  { value: '21', label: 'Sports' },
  { value: '22', label: 'Geography' },
  { value: '23', label: 'History' },
  { value: '24', label: 'Politics' },
  { value: '25', label: 'Art' },
  { value: '26', label: 'Celebrities' },
  { value: '27', label: 'Animals' },
  { value: '28', label: 'Vehicles' },
  { value: '29', label: 'Entertainment: Comics' },
  { value: '30', label: 'Science: Gadgets' },
  { value: '31', label: 'Entertainment: Japanese Anime & Manga' },
  { value: '32', label: 'Entertainment: Cartoon & Animations' },
];

export const triviaDifficulties = [
  { value: 'any', label: 'Any Difficulty' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

export const triviaTypes = [
  { value: 'any', label: 'Any Type' },
  { value: 'multiple', label: 'Multiple Choice' },
  { value: 'boolean', label: 'True / False' },
];

// export const dataType = { triviaCategories, triviaDifficulties, triviaTypes };

const data = {
  "response_code": 0,
  "results": [
      {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Film",
          "question": "Which one of these actors is said to be cut from the film &#039;E.T. the Extra-Terrestrial&#039;?",
          "correct_answer": "Harrison Ford",
          "incorrect_answers": [
              "Michael J. Fox",
              "Andy Kaufman",
              "Arnold Schwarzenegger"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Science: Computers",
          "question": "On which computer hardware device is the BIOS chip located?",
          "correct_answer": "Motherboard",
          "incorrect_answers": [
              "Hard Disk Drive",
              "Central Processing Unit",
              "Graphics Processing Unit"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Entertainment: Music",
          "question": "What is not a wind instrument?",
          "correct_answer": "Viola",
          "incorrect_answers": [
              "Oboe",
              "Trombone",
              "Duduk"
          ]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Politics",
          "question": "Joko Widodo has appeared in the cover of a TIME magazine.",
          "correct_answer": "True",
          "incorrect_answers": [
              "False"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Video Games",
          "question": "When was the video game publisher &quot;Ubisoft&quot; founded ?",
          "correct_answer": "March 1986",
          "incorrect_answers": [
              "April 1990",
              "June 2001",
              "August 1956"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Entertainment: Television",
          "question": "Guy&#039;s Grocery Games is hosted by which presenter?",
          "correct_answer": "Guy Fieri",
          "incorrect_answers": [
              "Guy Martin",
              "Guy Ritchie",
              "Ainsley Harriott"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "hard",
          "category": "Politics",
          "question": "Starting from 2000, China banned manufacturing and sales of all video game consoles. On which year was this ban lifted?",
          "correct_answer": "2015",
          "incorrect_answers": [
              "2012",
              "2008",
              "2017"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Animals",
          "question": "What is the name for a male bee that comes from an unfertilized egg?",
          "correct_answer": "Drone",
          "incorrect_answers": [
              "Soldier",
              "Worker",
              "Male"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Entertainment: Video Games",
          "question": "Which of these is not a wonder weapon in &quot;Call Of Duty: Zombies&quot;?",
          "correct_answer": "R115 Resonator",
          "incorrect_answers": [
              "GKZ-45 Mk3",
              "Ray Gun",
              "Scavenger"
          ]
      },
      {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Entertainment: Video Games",
          "question": "Which of these is NOT a team available in the game Pok&eacute;mon Go?",
          "correct_answer": "Team Rocket",
          "incorrect_answers": [
              "Team Instinct",
              "Team Valor",
              "Team Mystic"
          ]
      }
  ]
}