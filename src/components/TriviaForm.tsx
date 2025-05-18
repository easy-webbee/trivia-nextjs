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

interface Props {
  onFetchedQuestions: (questions: Question[]) => void;
  setLoading: (loading: boolean) => void;
}

export default function TriviaForm({ onFetchedQuestions , setLoading}: Props) {
  const [showWelcome, setShowWelcome] = useState(true);

  const [form, setForm] = useState({
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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

  return (
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
      <div className="pt-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <Input
            className="w-[220px]"
            name="amount"
            type="number"
            onChange={handleChange}
            placeholder="Number of questions (10)"
            autoComplete="off"
          />
          <Select
            onValueChange={(value) => setForm({ ...form, category: value })}
          >
            <SelectTrigger className="w-[180px]" aria-label="Select Category">
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
            <SelectTrigger className="w-[180px]" aria-label="Select Difficulty">
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
            <SelectTrigger className="w-[180px]" aria-label="Select Type">
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

          <Button
            variant="destructive"
            size="default"
            className="rounded w-[180px] font-medium"
            onClick={fetchTrivia}
          >
            Start Travia
          </Button>
        </div>
      </div>
    </div>
  );
}
