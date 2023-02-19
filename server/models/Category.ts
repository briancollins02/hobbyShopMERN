import mongoose, { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
});

const Category = mongoose.models.Category || model('Category', categorySchema);

export default Category;
