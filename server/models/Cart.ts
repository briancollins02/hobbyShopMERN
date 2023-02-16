import mongoose, { Schema, model } from 'mongoose';

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
<<<<<<< HEAD:server/models/Cart.ts
=======
                ref: 'Product',
>>>>>>> d3b230df824854f48160d2470716a0e2c8f79ab0:server/models/Cart.js
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
});

const Cart = mongoose.models.Cart || model('Cart', cartSchema)

export default Cart;