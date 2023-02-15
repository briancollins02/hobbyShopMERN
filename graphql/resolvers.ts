const { AuthenticationError } = require('apollo-server-express');
const { Cart, Category, Order, Product, User } = require('../server/models');
const { isTemplateExpression } = require('typescript');
const { signToken } = require('../server/utils/auth');

export default {
    Query: {
        // return all categories
        categories: async () => Category.find({}),

        // return all products
        products: async (parent, {category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name,
                };
            }

            return Product.find(params).populate('category');
        },

        // return single product by Id
        product: async (parent, {id}) =>
            Product.findById(id).populate('category'),

        // return single user by Id
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id).populate({
                    path: 'orders.product',
                    populate: 'category',
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },

        // return all of a users previous orders
        order: async (parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id).populate({
                    path: 'orders.product',
                    populate: 'category',
                });

                return user.orders.id(id);
            }

            throw new AuthenticationError('Not logged in');
        },

        // Desired Result: Go to User Cart Subdoc and view all 'cartItems' inside of the user cart
        cart: async (parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id).select('cart');
            };
            return user.cart.id(id);
        }
    },

    Mutation: {

        addUser: async(parent, args) => {
            const user = await User.create({args, cart: {}});
            const token = signToken(user);
            return { token, user };
        },

        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = singleToken(user);

            return { token, user };
        },

        addOrder: async (parent, { product }, context) => {
            const { userId } = context;
            const user = await User.findById(userId).populate('cart.product');
            
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }
            
            const item = user.cart.map(product => {
                return {
                    productId: product.productId,
                    quantity: product.quantity 
                };
            });

            const order = new Order({
                user: user._id,
                product: item
            });

            await order.save();

            user.cart = [{}];
            await user.save();

            return order;
        },

        addToCart: async(parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id);
                user.cart.product.push({ _id, quantity });
                await user.save();

                return user.cart;
            }
        },
        removeFromCart: async(parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id);
                user.cart.product = user.cart.product.filter(product => product.productId != productId);
                await user.save();

                return user.cart;
            }
        },
    }
}