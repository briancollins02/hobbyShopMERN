import connectMongo from "@/db/connection";
<<<<<<< HEAD
import { ApolloServerErrorCode } from '@apollo/server/errors';
import User from "@/server/models/User";
import Category from "@/server/models/Category";
=======
import * as ApolloServerErrorCode from '@apollo/server/errors';
import User from "@/server/models/User";
import Category from "@/server/models/Category";
import { authMiddleware, signToken } from "@/server/utils/auth";
>>>>>>> d3b230df824854f48160d2470716a0e2c8f79ab0

export default {
    Query: {
        // return all categories
        categories: async () => {
            try {
                //need to await mongoDB connection before doing operations on the models.
                //we need to do this on every query and resolver function.
                await connectMongo();
                const categories = await Category.find({});
                return categories
            }
            catch (err) {
                console.log(err);
<<<<<<< HEAD
            }
        },
    },

    //         // return all products
    //         products: async (parent, {category, name }) => {
    //             const params = {};

    //             if (category) {
    //                 params.category = category;
    //             }

    //             if (name) {
    //                 params.name = {
    //                     $regex: name,
    //                 };
    //             }

    //             return Product.find(params).populate('category');
    //         },

    //         // return single product by Id
    //         product: async (parent, {id}) =>
    //             Product.findById(id).populate('category'),

    //         // return single user by Id
    //         user: async (parent, args, context) => {
    //             if (context.user) {
    //                 const user = await User.findById(context.user.id).populate({
    //                     path: 'orders.products',
    //                     populate: 'category',
    //                 });

    //                 user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //                 return user;
    //             }

    //             throw new AuthenticationError('Not logged in');
    //         },

    //         // return all of a users previous orders
    //         orders: async (parent, { id }, context) => {
    //             if (context.user) {
    //                 const user = await User.findById(context.user.id).populate({
    //                     path: 'orders.products',
    //                     populate: 'category',
    //                 });

    //                 return user.orders.id(id);
    //             }

    //             throw new AuthenticationError('Not logged in');
    //         },

    //         // Desired Result: Go to User Cart Subdoc and view all 'cartItems' inside of the user cart
    //         cart: async (parent, { id }, context) => {
    //             if (context.user) {
    //                 const user = await User.findById(context.user.id).select('cart');
    //             };
    //             return user.cart.id(id);
    //         }
    //     },

    Mutation: {
        createUser: async (parent: any, args: any, contextValue: any, info: any) => {
            try {
                const client = await connectMongo();
                const newUser = await User.create(args)
                console.log(newUser)
                return newUser
=======
            }
        },
    },

    //         // return all products
    //         products: async (parent, {category, name }) => {
    //             const params = {};

    //             if (category) {
    //                 params.category = category;
    //             }

    //             if (name) {
    //                 params.name = {
    //                     $regex: name,
    //                 };
    //             }

    //             return Product.find(params).populate('category');
    //         },

    //         // return single product by Id
    //         product: async (parent, {id}) =>
    //             Product.findById(id).populate('category'),

    //         // return single user by Id
    //         user: async (parent, args, context) => {
    //             if (context.user) {
    //                 const user = await User.findById(context.user.id).populate({
    //                     path: 'orders.products',
    //                     populate: 'category',
    //                 });

    //                 user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //                 return user;
    //             }

    //             throw new AuthenticationError('Not logged in');
    //         },

    //         // return all of a users previous orders
    //         orders: async (parent, { id }, context) => {
    //             if (context.user) {
    //                 const user = await User.findById(context.user.id).populate({
    //                     path: 'orders.products',
    //                     populate: 'category',
    //                 });

    //                 return user.orders.id(id);
    //             }

    //             throw new AuthenticationError('Not logged in');
    //         },

    //         // Desired Result: Go to User Cart Subdoc and view all 'cartItems' inside of the user cart
    //         cart: async (parent, { id }, context) => {
    //             if (context.user) {
    //                 const user = await User.findById(context.user.id).select('cart');
    //             };
    //             return user.cart.id(id);
    //         }
    //     },

    Mutation: {
        // createUser: async (parent: any, args: any, contextValue: any, info: any) => {
        //     try {
        //         const client = await connectMongo();
        //         const newUser = await User.create(args)
        //         console.log(newUser)
        //         return newUser
        //     }
        //     catch (err) {
        //         console.log(err)
        //         return null
        //     }
        // },
        addUser: async(parent: any, { first_name, last_name, email, password }: any) => {
            try {
                await connectMongo();
                const user = await User.create({ first_name, last_name, email, password });
                const token = signToken(user);
                return { token, user };
            }
            catch (err) {
                console.log(err)
                return null
            }
        },
        login: async (parent: any, { email, password }: any) => {
            try {
                await connectMongo()
                const user = await User.findOne({ email });
        
                if (!user) {
                throw new AuthenticationError('No user found with this email address');
                }
        
                const correctPw = await user.isCorrectPassword(password);
        
                if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
                }
        
                const token = signToken(user);
        
                return { token, user };
>>>>>>> d3b230df824854f48160d2470716a0e2c8f79ab0
            }
            catch (err) {
                console.log(err)
                return null
            }
<<<<<<< HEAD
        }
=======
        },

>>>>>>> d3b230df824854f48160d2470716a0e2c8f79ab0
        // addToCart: async(parent, { id }, context) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user.id);
        //         user.cart.product.push({ productId, quantity });
        //         await user.save();

        //         return user.cart;
        //     }
        // },
        // removeFromCart: async(parent, { id }, context) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user.id);
        //         user.cart.product = user.cart.product.filter(product => product.productId != productId);
        //         await user.save();

        //         return user.cart;
        //     }
        // },
    }
}