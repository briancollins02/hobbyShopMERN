import connectMongo from "@/db/connection";
import User from "@/server/models/User";

export default {
    Query: {
        user: () => {
            return {
            }
        },
        users: () => {
            return {
            }
        },
        product: () => {
            return {
            }
        },
        products: () => {
            return {
            }
        },
        category: () => {
            return {
            }
        },
        categories: () => {
            return {
            }
        },
        cart: () => {
            return {
            }
        },
        order: () => {
            return {
            }
        },
        orders: () => {
            return {
            }
        }
    },
    Mutation: {
        createUser: async (parent:any, args:any, contextValue:any, info:any) => {
          try {
            const client = await connectMongo();
            // const db = client.db("dragonpunk")
            // const newUser = await db.collection("users").insertOne(args);
            const newUser = await User.create(args)
            console.log(newUser)
            return newUser
          } 
          catch(err) {
            console.log(err)
            return null
          }
        }
    }
}