import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App () {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
    }, [cartProducts]);

    function getTotalProductsFromCart () {
        return cartProducts.reduce((acc, products) => acc + products.quantity, 0);
    }

    return (
        <Router>
            <div className={`page-container `}>
                <Header Logo={"CartShop"} totalProducts={getTotalProductsFromCart()} />
                <div className={""}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductPage cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
                        <Route path="/cart" element={<CartPage cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}