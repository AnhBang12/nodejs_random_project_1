import mongoose, { model } from 'mongoose';
import slug from 'mongoose-slug-generator'

const Schema = mongoose.Schema;
mongoose.plugin(slug)

const Course = new Schema({
  name: { type: String, require: true },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: 'name', unique: true, },
  videoId: { type: String, require: true, },
  level: { type: String },
}, {
  timestamps: true
});

export const CourseModel = mongoose.model('Course', Course);
