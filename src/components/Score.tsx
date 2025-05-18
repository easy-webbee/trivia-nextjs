"use client";
import { Statistic } from "../model/trivia.model";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import AnimatedNumbers from "react-animated-numbers";

interface ScoreDisplayProps {
  score: number;
  statitic: Statistic;
}

export function ScoreDisplay({ score, statitic }: ScoreDisplayProps) {
  return (
    <Card className="w-[350px] h-[450px] flex flex-col">
      <CardHeader>
        <CardTitle>Scores</CardTitle>
        <CardDescription className="text-lg font-semibold mb-4">
          Your total Point
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-2 text-4xl font-bold text-center">
        <div className="flex justify-center">
          <AnimatedNumbers
            key={score}
            includeComma
            animateToNumber={score}
            transitions={(index) => ({
              type: "spring",
              tension: 100 * (index + 1),
              friction: 100,
            })}
            fontStyle={{
              fontSize: 50,
              fontWeight: "700",
              color: "#16a34a",
            }}
          />
        </div>
        <div className="mt-5 space-y-2 text-base">
          <p>
            <strong>Easy:</strong> {statitic.easy.correct} /{" "}
            {statitic.easy.total}
          </p>
          <p>
            <strong>Medium:</strong> {statitic.medium.correct} /{" "}
            {statitic.medium.total}
          </p>
          <p>
            <strong>Hard:</strong> {statitic.hard.correct} /{" "}
            {statitic.hard.total}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center text-muted-foreground">
        Keep it up!
      </CardFooter>
    </Card>
  );
}
