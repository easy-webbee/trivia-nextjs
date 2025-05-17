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
import { useState } from "react";
interface TriviaCardProps {
  data: Question;
  onNext: () => void;
}
export function CardQuestion({ data, onNext }: TriviaCardProps) {
    console.log(15)
  const { question, category, difficulty, correct_answer, incorrect_answers } =
    data;
  const allAnswers = shuffleAnswers([correct_answer, ...incorrect_answers]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  let variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined = "default";
  const handleSelect = (answer: string) => {
    console.log(answer, correct_answer);
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  const isCorrect = (answer: string) => answer === correct_answer;
  return (
    <Card className="w-[650px] h-[450px]">
      <CardHeader>
        <CardTitle>Question project</CardTitle>
        <CardDescription
          className="text-lg font-semibold mb-4"
          dangerouslySetInnerHTML={{ __html: question }}
        ></CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        {allAnswers.map((answer, idx) => {
          //   const isSelected = selectedAnswer === answer;
          //   const correct = isCorrect(answer);

          //   if (selectedAnswer) {
          //     if (correct) variant = "secondary";
          //     else if (isSelected) variant = "outline";
          //   }

          return (
            <Button
              key={idx}
              variant={variant}
              className="w-full justify-around"
              onClick={() => handleSelect(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
              //   disabled={!!selectedAnswer}
            />
          );
        })}
      </CardContent>
      <CardFooter className="flex justify-end mt-auto">
        <Button onClick={onNext}>Next</Button>
      </CardFooter>
    </Card>
  );
}

function shuffleAnswers(answers: string[]): string[] {
    console.log(123)
  return answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
