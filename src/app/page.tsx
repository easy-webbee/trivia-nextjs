"use client";
import { Header } from "@/components/Header";
import TriviaForm from "@/components/TriviaForm";
import { useState } from "react";
import { Question } from "@/components/question.model";
import { CardQuestion } from "@/components/CardQuestion";
import { ScoreDisplay } from "@/components/Score";

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const [score, setScore] = useState(0);

  const handleAnswer = (points: number) => {
    console.log(points);
    setScore((prev) => prev + points);
  };

  const handleFetchedQuestions = (data: Question[]) => {
    setQuestions(data);
    setCurrentIndex(0);
  };

  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <Header />
      <TriviaForm onFetchedQuestions={handleFetchedQuestions} />

      <div className="mt-5 flex justify-around">
        <div>
          {questions.length > 0 && currentIndex < questions.length && (
            <CardQuestion
              data={questions[currentIndex]}
              onNext={handleNext}
              onAnswer={handleAnswer}
            />
          )}
          {questions.length > 0 && currentIndex >= questions.length && (
            <p className="text-xl">You’ve completed the quiz!</p>
          )}
        </div>
        <div>{questions.length > 0 && <ScoreDisplay score={score} />}</div>
      </div>
    </div>
  );
}
