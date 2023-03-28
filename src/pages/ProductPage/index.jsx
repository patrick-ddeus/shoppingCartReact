import React from "react";
import { useCart } from "../../hooks/CartProductContext";
import Product from "./Product";
import { ProductArea } from "./style";
const ProductPage = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const { addProduct } = useCart();
   
    return (
        <main className="fade-in">
            <ProductArea>
                {
                    products.map(product => (
                        <Product product={product} addProduct={() => addProduct(products, product.id)} key={product.id} />
                    ))
                }
            </ProductArea>
        </main>
    );
};

export default ProductPage;