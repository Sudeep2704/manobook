import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    books: Array,
    totalAmount: Number,
    paymentMode: String,
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);