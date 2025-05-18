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
}

export function ScoreMobileDisplay({ score }: ScoreDisplayProps) {
  return (
    // Card container with fixed height and responsive width for mobile
    <Card className="w-[450px] h-[100px] max-[470px]:w-[300px] flex  flex-row">
      <CardHeader>
        <CardTitle>Scores</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-center w-full h-full">
        <div className="">
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
      </CardContent>
    </Card>
  );
}
