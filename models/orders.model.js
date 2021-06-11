import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Category",
      required: true,
    },
    authors: { type: [String], required: true },
  },
  { timestamps: true }
);

let Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
