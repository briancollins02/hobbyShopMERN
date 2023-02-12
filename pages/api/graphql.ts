import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { decode as queryStringDecode } from "node:querystring"
import schema from "@/graphql/schema"

const resolvers = {
    Query: {
        user: () => {
            return {
                id: "123",
                name: "RobotCaptain",
                age: 25,
                orders: [
                    {
                        id: "07",
                        name: "Warhammer",
                        description: "A tabletop wargame",
                        price: 300.07
                    }
                ]
            }
        },
        product: () => {
            return {
                id: "07",
                name: "Warhammer",
                description: "A tabletop wargame",
                price: 300.07
            }
        }

    }
}
const typeDefs = schema
const server = new ApolloServer({ 
    resolvers,
    typeDefs
});

export default startServerAndCreateNextHandler(server)