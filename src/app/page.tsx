"use client";
import { Header } from "@/components/Header";
import TriviaForm from "@/components/TriviaForm";
import { useState } from "react";
import { Question } from "@/components/question.model";
import { CardQuestion } from "@/components/CardQuestion";
import { ScoreDisplay } from "@/components/Score";
import Confetti from 'react-confetti'
import { useWindowSize } from "react-use"; 
export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width, height } = useWindowSize(); 
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const [score, setScore] = useState(0);

  const handleAnswer = (points: number) => {
    setScore((prev) => prev + points);
  };

  const handleFetchedQuestions = (data: Question[]) => {
    setQuestions(data);
    setCurrentIndex(0);
    setScore(0);
  };
  const isQuizComplete = questions.length > 0 && currentIndex >= questions.length;
  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <Header />
      <TriviaForm onFetchedQuestions={handleFetchedQuestions} />

      <div className="mt-5 gap-4 flex justify-center">
        <div>
          {questions.length > 0 && currentIndex < questions.length && (
            <CardQuestion
              data={questions[currentIndex]}
              state={{ currentQts:1+currentIndex, length: questions.length }}
              onNext={handleNext}
              onAnswer={handleAnswer}
            />
          )}
        </div>
        <div>
          {isQuizComplete &&(<Confetti width={width} height={height} />)}
          {questions.length > 0 && <ScoreDisplay score={score} />}</div>

      </div>
    </div>
  );
}


