const { Schema, model } = require('mongoose');

const productSchema = new mongoose.Schema({
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

const Product = model('Product', productSchema);

module.exports = Product;