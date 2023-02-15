import React from 'react';
import { IoCartOutline } from "react-icons/io5";

function Product ({product, addProduct}) {
    return (
        <div className="productCard" id={product.id} key={product.id}>
            <div className="image-area">
                <a href={product.image}><img src={product.image} alt="" /></a>
            </div>
            <div className="desc-area">
                <span>Adidas</span>
                <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                <div className="starArea">
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                </div>
                <h4>{product.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h4>
                <IoCartOutline name="cart-outline" className="cart" onClick={addProduct}></IoCartOutline>
            </div>
        </div>
    );
}

export default Product;