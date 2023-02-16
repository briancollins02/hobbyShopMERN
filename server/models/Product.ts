import mongoose, { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        // Images are stored on a server. The path to that image is stored in the db
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
});

const Product = mongoose.models.Product || model('Product', productSchema);

export default Product;