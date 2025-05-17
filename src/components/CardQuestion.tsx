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
import { Question } from "./question.model";

interface TriviaCardProps {
  data: Question;
  state: {
    currentQts: number;
    length: number;
  };
  onNext: () => void;
  onAnswer: (points: number) => void;
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
  const allAnswers = useMemo(() => {
    return shuffleAnswers([correct_answer, ...incorrect_answers]);
  }, [data]);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [timer, setTimer] = useState(maxTime);
  useEffect(() => {
    setSelectedAnswer(null);
    setTimeoutReached(false);
    setTimer(maxTime);
  }, [data]);

  useEffect(() => {
    if (selectedAnswer || timeoutReached) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setTimeoutReached(true);
          onAnswer(0);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedAnswer, timeoutReached]);

  const handleSelect = (answer: string) => {
    if (!selectedAnswer && !timeoutReached) {
      setSelectedAnswer(answer);
      const isCorrect = answer === correct_answer;
      const points = isCorrect ? 10 * timer : 0;
      onAnswer(points);
    }
  };

  const isCorrect = (answer: string) => answer === correct_answer;
  const showFeedback = selectedAnswer !== null || timeoutReached;

  const getButtonClass = (answer: string) => {
    if (!showFeedback) return "w-full justify-start";

    if (isCorrect(answer)) {
      return `w-full justify-start bg-green-500 text-white dark:bg-green-600`;
    }

    if (selectedAnswer === answer && !isCorrect(answer)) {
      return `w-full justify-start bg-red-500 text-white dark:bg-red-600`;
    }

    return "w-full justify-start opacity-50";
  };

  return (
    <Card className="w-[650px] h-[450px] flex flex-col">
      <CardHeader>
        <CardTitle
          dangerouslySetInnerHTML={{ __html: "Category: " + category +" | Level " + difficulty}}
        ></CardTitle>
        <CardDescription
          className="text-lg font-semibold mb-4"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <p className="text-right text-sm text-muted-foreground">
          <span>
            {state.currentQts} of {state.length}{" "}
          </span>
          Time left:{" "}
          <span className={timer <= 5 ? "text-red-500 font-bold" : ""}>
            {timer}s
          </span>
        </p>
      </CardHeader>

      <CardContent className="flex-grow space-y-2">
        {allAnswers.map((answer, idx) => (
          <Button
            key={idx}
            variant="outline"
            className={getButtonClass(answer)}
            onClick={() => handleSelect(answer)}
            disabled={!!selectedAnswer || timeoutReached}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </CardContent>

      <CardFooter className="flex justify-end mt-auto">
        <Button onClick={onNext}>Next</Button>
      </CardFooter>
    </Card>
  );
}

function shuffleAnswers(answers: string[]): string[] {
  return answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
