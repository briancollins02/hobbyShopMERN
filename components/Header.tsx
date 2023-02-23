// Boilerplate imports
import { useState } from "react";

// import components
import Navigation from './Navigation';

const Header = () => {

    const [currentNav, handleNavChange] = useState("About");

    const renderNav = (currentNav: any) => {
        switch(currentNav) {
            case 'Sign Up':

            case 'Login':
                
            case 'About':
                
            case 'Products':
                
            case 'CartPreview':
                
            case 'Contact':
                

            default:
              
        };
    };

    return (
        <header className="header">
            <Navigation   currentPage={currentNav} handlePageChange={handleNavChange}> {renderNav(currentNav)} </Navigation>
        </header>
    );
};

export default Header;