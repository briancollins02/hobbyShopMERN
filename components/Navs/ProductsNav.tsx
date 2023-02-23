import React from "react";
import Link from "next/link";

const ProductsNav = (props) => {
    return (
        <div>
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
        </div>
    )
};

export default ProductsNav;