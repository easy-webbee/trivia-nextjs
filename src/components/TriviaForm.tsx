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
import { CardQuestion } from "./CardQuestion";

export default function TriviaForm() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({ amount: 10, category: "", difficulty: "", type:"" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e: { target: { name: string; value: string } }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const fetchTrivia = async () => {
    const params = new URLSearchParams(form as any).toString();
    const res = await fetch(`/api?${params}`);
    const data = await res.json();
    setQuestions(data.data);
    setCurrentIndex(0);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between">
      <Input
        className="w-[220px]"
        name="amount"
        type="number"
        onChange={handleChange}
        placeholder="Number of questions (10)"
        autoComplete="none"
      />
      <Select  onValueChange={(value) => setForm({ ...form, category: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent >
          {triviaCategories.map((opt: SelectOption) => (
            <SelectItem key={opt.value} value={opt.value} >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => setForm({ ...form, difficulty: value })}>
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
        className="rounded"
        onClick={fetchTrivia}
      >
        Start
      </Button>
      </div>
      {/* Card */}

      {questions.length > 0 && currentIndex < questions.length && (
        <CardQuestion data={questions[currentIndex]} onNext={handleNext} />
      )}

      {questions.length > 0 && currentIndex >= questions.length && (
        <p className="text-xl">You’ve completed the quiz!</p>
      )}
    </div>
  );
}
