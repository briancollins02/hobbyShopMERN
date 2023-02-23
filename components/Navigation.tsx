// Boilerplate imports
import React from 'react'
import { useContext, useState } from "react";
import Link from "next/link";

import { UserContext } from "@/lib/client-context";
import {useRouter} from "next/router";


import CartPreview from "@/components/CartPreview";


const Navigation = (props: any) => {

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

    const navButtons = ['About', 'Products', 'CartPreview', 'Contact'];

    return (
        <header className="header">
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
                <div className="links-container-div">
                    {navButtons.map((navButton) => (
                        <ul>
                            <Link href = "/sign-up" className={props.currentPage === navButton ? "nav-item is-active" : "nav-item"}key={navButton}>
                                Sign Up
                            </Link>
                            <Link href = "/log-in" className={props.currentPage === navButton ? "nav-item is-active" : "nav-item"}key={navButton}>
                                Login
                            </Link>
                        </ul>
                    ))}
                </div>
            }
        </header>
    );
};

export default Navigation;

