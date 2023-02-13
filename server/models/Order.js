const { Schema, model } = require('mongoose');
const { PerformanceNodeTiming } = require('perf_hooks');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  orderStatus: {
    type: String,
    default: 'Pending',
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
