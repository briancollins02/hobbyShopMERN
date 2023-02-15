const { Schema, model } = require('mongoose');
const { PerformanceNodeTiming } = require('perf_hooks');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  orderStatus: {
    type: String,
    default: 'Pending',
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      requierd: true,
    },
  ],
});

const Order = model('Order', orderSchema);

module.exports = Order;
