import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"

import context from "@/graphql/context"
import schema from "@/graphql/schema"
import resolvers from "@/graphql/resolvers"



const typeDefs = schema
const server = new ApolloServer({ 
    resolvers,
    typeDefs
});

export default startServerAndCreateNextHandler(server, {
    // context
})