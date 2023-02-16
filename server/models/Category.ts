import mongoose, { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
<<<<<<< HEAD
=======
  description: {
    type: String,
  },
>>>>>>> d3b230df824854f48160d2470716a0e2c8f79ab0
});

const Category = mongoose.models.Category || model('Category', categorySchema);

export default Category;
