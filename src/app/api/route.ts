import { NextResponse } from "next/server";
import axios from "axios";
import { Mockdata } from "@/data/mockdata";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const amount = searchParams.get("amount") || "10";
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");
  const type = searchParams.get("type");

  let url = `https://opentdb.com/api.php?amount=${amount}`;
  if (category) url += `&category=${category}`;
  if (difficulty) url += `&difficulty=${difficulty}`;
  if (type) url += `&type=${type}`;
 
  try {
    const res = await axios.get(url);
    const questions = res.data.results;
    return NextResponse.json({
      success: true,
      data: questions.length > 0 ? questions : Mockdata,
    });
  } catch {
    // return mock data incase api 429
    return NextResponse.json({ success: true, data: Mockdata });
  }
}
