const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ProductId,
      ref: 'Product',
      requierd: true,
    },
  ],
});

const Order = model('Order', orderSchema);

module.exports = Order;
