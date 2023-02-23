import { gql } from "graphql-tag"

export default gql`
    type User{
        id: ID
        first_name: String
        last_name: String
        address: String
        email: String
        password: String
        isAdmin: Boolean
        orders: [Order]
        cart: [Cart]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Product{
        id: ID
        name: String
        description: String
        price: Float
        quantity: Int
        category: String
        images: [String]
        stripe_product_id: String!
        stripe_product_price_id: String!
    }
    type Category{
        id: String!
        name: String!
        description: String!
        products: [Product]
    }
    type CartItem{
        product: Product!
        Quantity: Int!
    }
    type Cart{
        userId: User!
        product: [CartItem]
        total: Float!
    }
    type Order{
        id: String!
        #Apollo does not have date but we can use a string as the type.
        purchaseDate: String
        orderStatus: String
        products: [Product!]
    }
    type Query{
        user(id:String, email:String): User
        users: [User]
        product(id:String!): Product
        products: [Product]
        category(id:String!): Category
        categories: [Category]
        cart(id:String!): Cart
        order(id:String!): Order
        orders: [Order]
    }
    type Mutation {
        addUser(
            first_name: String!
            last_name: String!
            email: String!
            password: String!
            address: String!
            isAdmin: Boolean
        ): User
        addToCart(product: ID!, quantity: Int!): Cart
        removeFromCart(product: ID!): Cart
        addOrder(product: [ID]!): Order
        updateUser(
            first_name: String
            last_name: String
            email: String
            Password: String
        ): User
        addProduct(
            name: String!
            description: String!
            price: Float!
            quantity: Int
            category: String!
            images: [String]
        ): Product
        updateProduct(
            id: ID!
            name: String
            description: String
            price: Float
            quantity: Int
            category: String
            images: [String]
        ): Product
        deleteProduct(
            id: ID!
        ): String
        login(email: String!, password: String!): Auth
    }
`