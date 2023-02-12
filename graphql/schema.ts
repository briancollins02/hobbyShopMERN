import { gql } from "graphql-tag"

export default gql`
    type User{
        id: String
        name: String
        age: Int
        orders: [Product]
    }
    type Product{
        id: String
        name: String
        description: String
        price: Float
    }
    type Query{
        user: User
        product: Product
    }
`