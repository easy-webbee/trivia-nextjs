
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Question } from "./question.model";


export function ScoreDisplay() {

  return (
    <Card className="w-[350px] h-[450px] flex flex-col">
      <CardHeader>
        <CardTitle>Scores</CardTitle>
        <CardDescription className="text-lg font-semibold mb-4"
        />
        <p className="text-right text-sm text-muted-foreground">
        </p>
      </CardHeader>

      <CardContent className="flex-grow space-y-2">

      </CardContent>

      <CardFooter className="flex justify-end mt-auto">

      </CardFooter>
    </Card>
  );
}

