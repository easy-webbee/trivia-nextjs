import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export function QuizInfo() {
  const quizDetail = (
    <div className="space-y-6 text-sm text-muted-foreground max-w-md mx-auto">
      <section>
        <h3 className="font-semibold text-base mb-2 text-foreground">
          Quiz Options
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Number of Questions:</strong> Set how many questions you&apos;d
            like to answer (default is 10).
          </li>
          <li>
            <strong>Category:</strong> Choose a topic such as Sports, Science,
            or History.
          </li>
          <li>
            <strong>Difficulty:</strong> Pick from Easy (quicker), Medium, or
            Hard (more challenging).
          </li>
          <li>
            <strong>Type:</strong> Select between Multiple Choice or True/False.
          </li>
        </ul>
      </section>

      <section className="bg-muted p-4 rounded-md">
        <h4 className="font-semibold mb-2 text-foreground">Scoring Rules</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Points = 10 × seconds left</strong> when you answer
            correctly.
          </li>
          <li>
            Time limit depends on difficulty:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Easy: 15 seconds</li>
              <li>Medium: 30 seconds</li>
              <li>Hard: 45 seconds</li>
            </ul>
          </li>
          <li>No points are awarded for incorrect or unanswered questions.</li>
        </ul>
      </section>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          aria-label="Quiz Info"
        >
          <QuestionMarkCircledIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Quiz Guide</DialogTitle>
          <DialogDescription>
            Learn how the quiz options and scoring work before you start.
          </DialogDescription>
        </DialogHeader>
        {quizDetail}
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
