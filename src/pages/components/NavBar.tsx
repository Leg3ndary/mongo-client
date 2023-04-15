// React component for the navigation bar
import React from 'react';

const NavBar = () => {
    return (<div className="flex flex-col items-center justify-center w-full h-full">
        <nav className="flex items-center justify-between w-full bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 absolute p-4">
            <a href="#" className="text-2xl font-bold">
                MongoClient
            </a>
            <ul className="flex items-center space-x-4">
                <li>
                    <a href="#" className="text-lg font-medium">
                        Connections
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-lg font-medium">
                        About
                    </a>
                </li>
            </ul>
        </nav>
    </div>);
}

export default NavBar;
