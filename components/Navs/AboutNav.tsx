import React from "react";
import Link from "next/link";

const AboutNav = (props) => {
    return (
        <div>
            <ul>
                <Link href="../pages/Products" className="nav-item">
                    Products
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

export default AboutNav;