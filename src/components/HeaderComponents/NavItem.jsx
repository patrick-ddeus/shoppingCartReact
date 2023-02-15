import { Link } from "react-router-dom";
import React from "react";

const NavItem = ({ link, name, active }) => {
    return (
        <li className={`nav-item ${active ? "active" : ""}`}>
            <Link to={link}>
                {name}
            </Link>
        </li>
    );
};

export default NavItem;