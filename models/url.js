import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
  {
    origUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("url", UrlSchema);
