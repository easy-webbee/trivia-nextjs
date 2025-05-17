import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Question } from "./question.model";
interface TriviaCardProps {
  data: Question;
  onNext: () => void;
}
export function CardQuestion({ data, onNext }: TriviaCardProps) {
  const { question, category, difficulty, correct_answer, incorrect_answers } =
    data;
  const allAnswers = shuffleAnswers([correct_answer, ...incorrect_answers]);
  return (
    <Card className="w-[750px] h-[450px]">
      <CardHeader>
        <CardTitle>Question project</CardTitle>
        <CardDescription
          className="text-lg font-semibold mb-4"
          dangerouslySetInnerHTML={{ __html: question }}
        ></CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {allAnswers.map((answer, idx) => (
          <Button
            key={idx}
            variant="outline"
            className="w-full justify-start"
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
