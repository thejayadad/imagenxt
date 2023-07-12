import mongoose from "mongoose";

const { Schema } = mongoose;

const donutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
  },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Donut || mongoose.model("Donut", donutSchema);