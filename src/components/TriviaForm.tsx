// components/TriviaForm.tsx
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
import { Question, SelectOption } from "./question.model";
import {
  triviaCategories,
  triviaDifficulties,
  triviaTypes,
} from "./select-option";
import { Button } from "./ui/button";

interface Props {
  onFetchedQuestions: (questions: Question[]) => void;
}

export default function TriviaForm({ onFetchedQuestions }: Props) {
  const [form, setForm] = useState({
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const fetchTrivia = async () => {
    const params = new URLSearchParams(form as any).toString();
    const res = await fetch(`/api?${params}`);
    const data = await res.json();
    onFetchedQuestions(data.data);
  };

  return (
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
          <SelectTrigger className="w-[180px]">
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
          <SelectTrigger className="w-[180px]">
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
          <SelectTrigger className="w-[180px]">
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
          className="rounded w-[180px]"
          onClick={fetchTrivia}
        >
          Start Travia
        </Button>
      </div>
    </div>
  );
}
