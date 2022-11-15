import mongoose, { model } from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, require: true },
    level: { type: String },
  },
  {
    timestamps: true,
  },
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

export const CourseModel = mongoose.model('Course', Course);
