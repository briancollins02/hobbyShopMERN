import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
// import Order from './Order';

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        require: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    orders: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        },
    ],
});

// before the user is created or password is modified and saved, the password is hashed
userSchema.pre('save', async function () {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
<<<<<<< HEAD:server/models/User.ts
});

// use bcrypt to check inputted password to encrypted password when logging in
// userSchema.method.isCorrectPassword = async function (password) {
//     await bcrypt.compare(password, this.password);
// };
=======
  
    next();
  });

// use bcrypt to check inputted password to encrypted password when logging in
userSchema.methods.isCorrectPassword = async function (password: any) {
    return bcrypt.compare(password, this.password);
  };
>>>>>>> d3b230df824854f48160d2470716a0e2c8f79ab0:server/models/User.js

const User:any = mongoose.models.User || model('User', userSchema);

export default User;