"use client";
import { Header } from "@/components/Header";
import TriviaForm from "@/components/TriviaForm";
import { useState } from "react";
import { Difficulty, Question } from "@/model/trivia.model";
import { CardQuestion } from "@/components/CardQuestion";
import { ScoreDisplay } from "@/components/Score";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/spinner/Spinner";
import { ScoreMobileDisplay } from "@/components/ScoreMobile";

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [statitic, setStatitic] = useState<
    Record<Difficulty, { correct: number; total: number }>
  >({
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 },
  });
  const { width, height } = useWindowSize();

  const handleNext = (difficulty: Difficulty) => {
    setCurrentIndex((prev) => prev + 1);
    setStatitic((prev) => ({
      ...prev,
      [difficulty]: {
        ...prev[difficulty],
        total: prev[difficulty].total + 1,
      },
    }));
  };

  const handleAnswer = (points: number, difficulty: Difficulty) => {
    if (points > 0) {
      setStatitic((prev) => ({
        ...prev,
        [difficulty]: {
          ...prev[difficulty],
          correct: prev[difficulty].correct + 1,
          total: prev[difficulty].total,
        },
      }));
    }
    setScore((prev) => prev + points);
  };

  const handleFetchedQuestions = (data: Question[]) => {
    setLoading(false);
    setQuestions(data);
    setCurrentIndex(0);
    // setScore(0);
    // setStatitic({
    //   easy: { correct: 0, total: 0 },
    //   medium: { correct: 0, total: 0 },
    //   hard: { correct: 0, total: 0 },
    // })
  };

  const isQuizComplete =
    questions.length > 0 && currentIndex >= questions.length;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto w-full max-w-7xl p-4 flex-grow">
        <Header />
        <main>
          <TriviaForm
            onFetchedQuestions={handleFetchedQuestions}
            setLoading={setLoading}
          />
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Spinner />
            </div>
          ) : (
            <div className="mt-5 gap-4 flex justify-center flex-col min-[700px]:flex-row items-center ">
              <div className="order-2 min-[700px]:order-1">
                {questions.length > 0 && currentIndex < questions.length && (
                  <CardQuestion
                    data={questions[currentIndex]}
                    state={{
                      currentQts: 1 + currentIndex,
                      length: questions.length,
                    }}
                    onNext={handleNext}
                    onAnswer={handleAnswer}
                  />
                )}
              </div>
              <div className="order-1 min-[700px]:order-2">
                {isQuizComplete && <Confetti width={width} height={height} />}
                <div className="max-[700px]:hidden">
                  {questions.length > 0 && (
                    <ScoreDisplay score={score} statitic={statitic} />
                  )}
                </div>
                <div className="hidden max-[700px]:block">
                  {questions.length > 0 &&  isQuizComplete &&(
                    <ScoreDisplay score={score} statitic={statitic} />
                  )}
                </div>
                <div className="min-[700px]:hidden">
                  {questions.length > 0 &&  !isQuizComplete && (
                    <ScoreMobileDisplay score={score} statitic={statitic} />
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
