"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Question, SelectOption } from "../model/trivia.model";
import {
  triviaCategories,
  triviaDifficulties,
  triviaTypes,
} from "../data/mockdata";
import { Button } from "./ui/button";
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
interface Props {
  onFetchedQuestions: (questions: Question[]) => void;
  setLoading: (loading: boolean) => void;
}

export default function TriviaForm({ onFetchedQuestions, setLoading }: Props) {
  const [showWelcome, setShowWelcome] = useState(true);

  const [form, setForm] = useState({
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  });

  // Handle input changes by updating form state
  const handleChange = (e: { target: { name: string; value: string } }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Fetch trivia questions from API based on form state
  const fetchTrivia = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        amount: form.amount.toString(),
        category: form.category,
        difficulty: form.difficulty,
        type: form.type,
      }).toString();
      const res = await fetch(`/api?${params}`);
      const data = await res.json();
      onFetchedQuestions(data.data);
      setShowWelcome(false);
    } finally {
      setLoading(false);
    }
  };
  // question parama
  const questionSelection = (
    <>
      <Input
        className="w-[220px]"
        name="amount"
        type="number"
        onChange={handleChange}
        placeholder="Number of questions (10)"
        autoComplete="off"
      />
      <Select onValueChange={(value) => setForm({ ...form, category: value })}>
        <SelectTrigger className="w-[220px]" aria-label="Select Category">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {triviaCategories.map((opt: SelectOption) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => setForm({ ...form, difficulty: value })}
      >
        <SelectTrigger className="w-[220px]" aria-label="Select Difficulty">
          <SelectValue placeholder="Select Difficulty" />
        </SelectTrigger>
        <SelectContent>
          {triviaDifficulties.map((opt: SelectOption) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => setForm({ ...form, type: value })}>
        <SelectTrigger className="w-[220px]" aria-label="Select Type">
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          {triviaTypes.map((opt: SelectOption) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
  const btnStart = (
    <Button
      variant="destructive"
      size="default"
      className="rounded w-[220px] font-medium"
      onClick={fetchTrivia}
    >
      Start Travia
    </Button>
  );
  const desktopView = (
    <div className="flex flex-wrap gap-4 justify-center">
      {questionSelection}
      {btnStart}
    </div>
  );
  const mobileDialog = (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="rounded w-[220px] font-medium">
          Start Travia
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-destructive font-medium">
            Start Trivia
          </DialogTitle>
          <DialogDescription>
            Choose your trivia preferences before starting the game.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-4 justify-center">
          {questionSelection}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <div className="flex flex-wrap gap-4 justify-center">
              {btnStart}
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  const respondsiveLayout = (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      {showWelcome && (
        <div className="flex flex-col items-center justify-center gap-6 text-center min-h-[200px]">
          <h1 className="text-4xl font-bold">Welcome to Travia 🎉</h1>
          <p className="text-lg max-w-xl text-muted-foreground">
            Test your knowledge with fun trivia questions across various
            categories and difficulties. Ready to begin?
          </p>
        </div>
      )}
      <div className="p-4 hidden min-[700px]:block">{desktopView}</div>
      <div className="p-4 block min-[700px]:hidden">{mobileDialog}</div>
    </div>
  );
  return <>{respondsiveLayout}</>;
}
