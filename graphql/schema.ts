import { gql } from "graphql-tag"

export default gql`
    type User{
        id: String!
        first_name: String!
        last_name: String!
        address: String!
        email: String!
        password: String!
        isAdmin: Boolean
        orders: [Order]
        cart: Cart
    }
    type Product{
        id: String!
        name: String!
        description: String!
        price: Float!
        quantity: Int
        category: Category!
    }
    type Category{
        id: String!
        name: String!
    }
    type Cart{
        id: String!
        products: [Product]
    }
    type Order{
        id: String!
        #Apollo does not have date but we can use a string as the type.
        purchaseDate: String
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
`