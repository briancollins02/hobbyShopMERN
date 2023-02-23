import React from "react";
import Link from "next/link";

const CartPreviewNav = (props) => {
    return (
        <div>
            <ul>
                <Link href="../pages/About" className="nav-item">
                    About Us
                </Link>
                <Link href="../pages/Products" className="nav-item">
                    Products
                </Link>
                <Link href="../pages/Contact" className="nav-item">
                    Contact Us
                </Link>
            </ul>
        </div>
    )
};

export default CartPreviewNav;