import React from "react";
import Link from "next/link";

const ContactNav = (props) => {
    return (
        <div>
            <ul>
                <Link href="../pages/About" className="nav-item">
                    About Us
                </Link>
                <Link href="../pages/Products" className="nav-item">
                    Products
                </Link>
                <Link href="./CartPreview" className="nav-item">
                    View Cart
                </Link>
            </ul>
        </div>
    )
};

export default ContactNav;