const { AuthenticationError } = requier('apollo-server-express');
const { Cart, Category, Order, Product, User } = requier('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
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
                    path: 'orders.products',
                    populate: 'category',
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },

        // return all of a users previous orders
        orders: async (parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id).populate({
                    path: 'orders.products',
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
            const { first_name, last_name, email, password } = args;
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

        addOrder: async (parent, { products }, context) => {
            if (context.user) {
                const order = Order.create({ products });

                await User.findByIdAndUpdate(context.user.id, {
                    $push: { orders: order };
                });

                return order;
            }
            throw new AuthenticationError('Not logged in');
        },

        addToCart: async(parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id);
                user.cart.product.push({ productId, quantity });
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

module.exports = { Query, Mutation };