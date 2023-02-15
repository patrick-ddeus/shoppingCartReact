import React from "react";
import NavItem from "./HeaderComponents/NavItem";
import { useLocation, Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
const Header = ({ Logo, totalProducts }) => {
    const location = useLocation().pathname

   return (
        <header id="header">
            <div className="header-content">
                <h1>{Logo}</h1>
                <nav>
                    <ul className="nav-list">
                        <NavItem name={"Home"} link={"/"} active={location === "/" ? true : false} />
                        <NavItem name={"Products"} link={"/products"} active={location === "/products" ? true : false} />
                        <NavItem name={"Contact"} link={"/contact"} active={location === "/contact" ? true : false} />
                        <Link to={"/cart"} className="bag-link">
                            <IoBagOutline className="bag-header" />
                            <div className="notification">{totalProducts}</div>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;