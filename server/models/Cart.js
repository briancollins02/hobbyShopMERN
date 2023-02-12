const { Schema, model } = requier('mongoose');

const CartSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: Schema.Types.productId,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
});

const Cart = model('Cart', cartSchema)

module.exports = Cart;