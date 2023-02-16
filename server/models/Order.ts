import mongoose, { Schema, model } from 'mongoose';

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

const Order = mongoose.models.Order || model('Order', orderSchema);

export default Order;
