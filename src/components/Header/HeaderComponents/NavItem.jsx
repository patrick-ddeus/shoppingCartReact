import { Link } from "react-router-dom";
import { NavItem as NavItemStyle } from "../styles";
import React from "react";

const NavItem = ({ link, name, active }) => {
    return (
        <NavItemStyle active={active}>
            <Link to={link}>
                {name}
            </Link>
        </NavItemStyle>
    );
};

export default NavItem;