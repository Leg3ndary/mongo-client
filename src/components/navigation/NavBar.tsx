// React component for the navigation bar
import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">My Website</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex justify-end">
                    <li>
                        <Link className="" href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/connect">Connect</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
