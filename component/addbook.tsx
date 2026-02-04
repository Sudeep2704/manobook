"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AddBookModal({ onAdd }: any) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
  });

  async function submit() {
    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });
    setOpen(false);
    onAdd();
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        + Add Book
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-gray-900 p-6 rounded-xl w-96"
          >
            <h2 className="text-xl mb-4">Add Book</h2>

            {["title", "author", "price", "stock"].map((field) => (
              <input
                key={field}
                placeholder={field}
                className="w-full mb-3 p-2 rounded bg-gray-800"
                onChange={(e) =>
                  setForm({ ...form, [field]: e.target.value })
                }
              />
            ))}

            <div className="flex justify-end gap-3">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                onClick={submit}
                className="bg-green-600 px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}