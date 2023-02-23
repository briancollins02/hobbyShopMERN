// Boilerplate imports
import React from "react";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "@/lib/client-context";
import {useRouter} from "next/router";

import CartPreview from "../CartPreview";

const ProductsNav = (props: any) => {
    const router = useRouter()
    const userContext = useContext(UserContext);
    console.log(userContext);
    const [cartPreview, setCartPreview] = useState(false) 
    const handleCartPreview = () => {
        setCartPreview(true)
    }
    const handleLogout = async () => {
        try {
            // const logOutResponse = await fetch("/api/auth", {
            //     method: "DELETE"
            // })
            // const logOutData = await logOutResponse.json();
            localStorage.removeItem("authToken");
            userContext.setUser(null);
            router.push("/");   
        } catch (err) {
            console.log(err);
            alert("Can not log out.")
        }
    };

    return (
        <div>
            {
                userContext && userContext.user?
                <div>
                    <p>{userContext.user.first_name}</p>
                    <button onClick = {handleCartPreview}>
                        Cart
                        <span>{userContext.user.cart.length}</span>
                    </button>
                    <button onClick = {handleLogout}>
                        Logout
                    </button>
                    {cartPreview && <CartPreview setCartPreview = {setCartPreview}/>}
                </div>

                :

                <ul>
                    <Link href="../pages/About" className="nav-item">
                        About Us
                    </Link>
                    <Link href="./CartPreview" className="nav-item">
                        View Cart
                    </Link>
                    <Link href="../pages/Contact" className="nav-item">
                        Contact Us
                    </Link>
                </ul>
            }
        </div>
    )
};

export default ProductsNav;