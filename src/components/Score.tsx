// Score.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

interface ScoreDisplayProps {
  score: number;
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <Card className="w-[350px] h-[450px] flex flex-col">
      <CardHeader>
        <CardTitle>Scores</CardTitle>
        <CardDescription className="text-lg font-semibold mb-4">
          Points earned so far
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-2 text-4xl font-bold text-center">

        {score}
      </CardContent>

      <CardFooter className="flex justify-center text-muted-foreground">
        Keep it up!
      </CardFooter>
    </Card>
  );
}
