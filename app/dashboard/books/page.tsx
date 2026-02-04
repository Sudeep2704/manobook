"use client";
import { useEffect, useState } from "react";
import AddBookModal from "@/component/addbook";
import { motion } from "framer-motion";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  async function loadBooks() {
    const res = await fetch("/api/books");
    setBooks(await res.json());
  }

  async function deleteBook(id: string) {
    await fetch("/api/books", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadBooks();
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">📚 Books</h1>
        <AddBookModal onAdd={loadBooks} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {books.map((b: any) => (
          <motion.div
            key={b._id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-xl relative"
          >
            <h2 className="font-semibold">{b.title}</h2>
            <p className="text-sm">{b.author}</p>
            <p className="text-green-400">₹{b.price}</p>
            <p className="text-xs">Stock: {b.stock}</p>

            <button
              onClick={() => deleteBook(b._id)}
              className="absolute top-2 right-2 text-red-400 hover:text-red-600"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}