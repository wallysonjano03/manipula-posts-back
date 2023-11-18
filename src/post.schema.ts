import mongoose, { Schema, Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  content: string;
  author: string;
}

export const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

export const PostModel = mongoose.model<Post>('Post', PostSchema);