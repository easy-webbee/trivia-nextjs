import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Difficulty, Question } from "../model/trivia.model";
import { CircularTimer } from "./ui/circularTimer";
import { decode } from "he";
interface TriviaCardProps {
  data: Question;
  state: {
    currentQts: number;
    length: number;
  };
  onNext: (difficulty: Difficulty) => void;
  onAnswer: (points: number, difficulty: Difficulty) => void;
}

export function CardQuestion({
  data,
  state,
  onNext,
  onAnswer,
}: TriviaCardProps) {
  const { question, correct_answer, incorrect_answers, difficulty, category } =
    data;

  // time for difficulty lv
  const difficultyTimerMap = {
    easy: 15,
    medium: 30,
    hard: 45,
  };

  const maxTime = difficultyTimerMap[difficulty] || 15;

  // State variables for user answer selection, timeout, timer countdown, and points gained
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [timer, setTimer] = useState(maxTime);
  const [showPoints, setShowPoints] = useState(0);

  // Shuffle answers to randomize order each time question changes
  const allAnswers = useMemo(() => {
    return shuffleAnswers([correct_answer, ...incorrect_answers]);
  }, [correct_answer, incorrect_answers]);

  // reset
  useEffect(() => {
    setSelectedAnswer(null);
    setTimeoutReached(false);
    setTimer(maxTime);
    setShowPoints(0);
  }, [data, maxTime]);

  // Timer countdown logic:
  useEffect(() => {
    if (selectedAnswer || timeoutReached) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeoutReached(true);
          onAnswer(0, difficulty);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedAnswer, timeoutReached, difficulty, onAnswer]);

  // Handles when user selects an answer
  const handleSelect = (answer: string) => {
    if (!selectedAnswer && !timeoutReached) {
      setSelectedAnswer(answer);
      const isCorrect = answer === correct_answer;
      const points = isCorrect ? 10 * timer : 0;
      setShowPoints(points);
      onAnswer(points, difficulty);
    }
  };

  const isCorrect = (answer: string) => answer === correct_answer;
  const showFeedback = selectedAnswer !== null || timeoutReached;

  // Determine button styles base on feedback and correctness
  const getButtonClass = (answer: string) => {
    if (!showFeedback) return "w-full justify-start";

    if (isCorrect(answer)) {
      return "w-full justify-start bg-green-500 text-white dark:bg-green-600";
    }

    if (selectedAnswer === answer && !isCorrect(answer)) {
      return "w-full justify-start bg-red-500 text-white dark:bg-red-600";
    }

    return "w-full justify-start opacity-50";
  };

  return (
    <Card className="w-[650px] max-[1030px]:w-[500px] max-[900px]:w-[400px] h-[450px] max-[900px]:h-[500px] max-[700px]:w-[450px] max-[470px]:w-[300px] flex flex-col overflow-auto">
      <CardHeader>
        <CardTitle>
          Category: {decode(category)} | Level {difficulty} | Time Allow{" "}
          {maxTime}s
        </CardTitle>

        <CardDescription>{decode(question)}</CardDescription>
        <div className="flex items-center justify-end space-x-2 w-full">
          <div className="flex items-center space-x-2">
            {timer === 0 && (
              <span className="text-red-500 font-bold text-sm whitespace-nowrap">
                Time&apos;s up!
              </span>
            )}
            {showPoints > 0 && (
              <span className="text-green-600 font-semibold text-sm">
                +{showPoints} pts
              </span>
            )}
            <CircularTimer timer={timer} maxTime={maxTime} />
          </div>
          <p className="text-right text-sm text-muted-foreground">
            <span>
              {" "}
              {state.currentQts} of {state.length}{" "}
            </span>
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-2">
        {allAnswers.map((answer, idx) => (
          <Button
            key={idx}
            variant="outline"
            className={getButtonClass(answer)}
            onClick={() => handleSelect(answer)}
            disabled={!!selectedAnswer || timeoutReached}
          >
            {decode(answer)}
          </Button>
        ))}
      </CardContent>

      <CardFooter className="flex justify-end mt-auto">
        <Button onClick={() => onNext(difficulty)}>Next</Button>
      </CardFooter>
    </Card>
  );
}

//shuffle answers randomly
function shuffleAnswers(answers: string[]): string[] {
  return answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
