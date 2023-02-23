import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { UserProvider } from "@/lib/client-context"

// Import components
// import Header from "./Header"
import Footer from "./Footer"

import graphqlClient from "@/lib/graphql-client";
import gql from "graphql-tag";

interface Props {
    children?: ReactNode
}
const Layout = (props: Props) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const getUser = async () => {
            const query = gql`
                query Query {
                    user {
                        id
                        first_name
                        email
  }
}
            `
        try{
            const authToken = localStorage.getItem("authToken");
            if (!authToken){
                return 
            }
            graphqlClient.setHeader("Authorization", authToken);
            const user = await graphqlClient.request(query);
            console.log(user);
            if (!user){
                return
            }
            setUser({...user, cart:[]})
        } catch (err) {
            console.log(err);
        }    
        }
        getUser()
    },[]
    )

    return (
        <UserProvider value={{ user, setUser }}>
            <main>
                {props.children}
            </main>
            <Footer />
        </UserProvider>
    )
}
export default Layout;