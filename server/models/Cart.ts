import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
});

const Cart = model('Cart', cartSchema)

export default Cart;