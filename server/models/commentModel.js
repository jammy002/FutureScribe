import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    post: { type: Schema.Types.ObjectId, ref: "Posts" },
    desc: { type: String },
    commentTime:{type: Date, default:Date.now}
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", commentSchema);

export default Comments;


