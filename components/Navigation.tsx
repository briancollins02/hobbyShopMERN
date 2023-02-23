// Boilerplate imports
import React from 'react'

// Import dynamic navigation components
import AboutNav from "./dynamicNavs/AboutNav";
import CartPreviewNav from "./dynamicNavs/CartPreviewNav";
import ContactNav from "./dynamicNavs/ContactNav";
import ProductsNav from "./dynamicNavs/ProductsNav";


const Navigation = (props: any) => {

    const currentNav= props.currentNav;

        switch (currentNav) {
            
            case 'AboutNav':
                return <AboutNav currentNav={currentNav} />;

            case 'ProductsNav':
                return <ProductsNav currentNav={currentNav} />;

            case 'CartPreviewNav':
                return <CartPreviewNav currentNav={currentNav} />;

            case 'ContactNav':
                return <ContactNav currentNav={currentNav} />;

            default:
                'AboutNav'
                    return <AboutNav currentNav={currentNav} />;
        };
};

export default Navigation;

