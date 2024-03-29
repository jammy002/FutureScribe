import mongoose, { Schema } from "mongoose";

const viewsSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Posts", required: true },
  },
  { timestamps: true }
);

const Views = mongoose.model("Views", viewsSchema);

export default Views;
