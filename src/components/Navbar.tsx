import React from 'react';
import NavbarItem from "@/components/NavbarItem";

const Navbar = () => {
    return (
        <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
            <NavbarItem className="mr-3" title="Trending" param="ft"/>
            <NavbarItem className="ml-3" title="Top Rated" param="ftr"/>
        </div>
    );
};

export default Navbar;