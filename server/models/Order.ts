import mongoose, { Schema, model } from 'mongoose';
import dateFormat from '@/server/utils/dateFormat'

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: (timestamp: any) => dateFormat(timestamp)
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      requierd: true,
    },
  ],
});

const Order = mongoose.models.Order || model('Order', orderSchema);

export default Order;
