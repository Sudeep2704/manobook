import { connectDB } from "@/lib/db";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const books = await Book.find();
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const book = await Book.create(data);
  return NextResponse.json(book);
}