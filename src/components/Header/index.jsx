import React from "react";
import NavItem from "./HeaderComponents/NavItem";
import * as S from "./styles";
import { useLocation, Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "../../hooks/CartProductContext";
const Header = ({ Logo }) => {
    const location = useLocation().pathname;
    const { getTotalProductsFromCart } = useCart()

    return (
        <S.Container id="header">
            <S.HeaderContent>
                <h1>{Logo}</h1>
                <nav>
                    <S.NavList className="nav-list">
                        <NavItem name={"Home"} link={"/"} active={location === "/" ? true : false} />
                        <NavItem name={"Products"} link={"/products"} active={location === "/products" ? true : false} />
                        <NavItem name={"Contact"} link={"/contact"} active={location === "/contact" ? true : false} />
                        <S.BagLink>
                            <Link to={"/cart"}>
                                <IoBagOutline className="bag-header" />
                                <S.Notification>{getTotalProductsFromCart()}</S.Notification>
                            </Link>
                        </S.BagLink>
                    </S.NavList>
                </nav>
            </S.HeaderContent>
        </S.Container>
    );
};

export default Header;