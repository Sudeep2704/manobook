import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    category: String,
    price: Number,
    stock: Number,
    cover: String,
  },
  { timestamps: true }
);

export default mongoose.models.Book ||
  mongoose.model("Book", BookSchema);